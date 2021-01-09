-module(wir_app).
-behaviour(application).

-export([start/2, stop/1]).
-export([tmp/0, tmp2/1, tmp3/1]).

tmp() ->
    receive
        {new_client, PID} -> io:format("new_client: ~w ~n", [PID]), spawn(wir_app, tmp2, [PID]), tmp();
        {new_car, StateID} -> io:format("new car: ~w ~n", [StateID]), tmp();
        {close, StateID} -> io:format("close: ~w ~n", [StateID]), tmp()
    end.

tmp2(PID) ->
    timer:sleep(1000),
    PID ! {update, [{light, 10, 1}, {light, 20, 1}, {light, 31, 2}, {light, 40, 1}], [{car, 10, 321}, {car, 20, 111}]},
    tmp3(PID).

tmp3(PID) ->
    timer:sleep(1000),
    PID ! {update, [{light, 10, 1}, {light, 20, 2}, {light, 31, 2}, {light, 40, 1}], [{car, 10, 320}, {car, 20, 112}]},
    tmp2(PID).

start(_Type, _Args) ->
    Concurrency = spawn(wir_app, tmp, []),
    % delete above code and tmp function, pass concurrent part PID to proper path
    Paths = [
            {"/ws", ws_handler, [Concurrency]},
            {"/", cowboy_static, {priv_file, wir, "static/index.html"}},
            {"/[...]", cowboy_static, {priv_dir, wir, "static"}},
            {"/_", cowboy_static, {priv_file, wir, "static/index.html"}}
        ],
    Dispatch = cowboy_router:compile([{'_', Paths}]),
    {ok, _} = cowboy:start_clear(my_http_listener,
        [{port, 8080}],
        #{env => #{dispatch => Dispatch}}
    ),
	wir_sup:start_link().

stop(_State) ->
	ok.
