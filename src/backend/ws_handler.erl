-module(ws_handler).
-behavior(cowboy_websocket).

-export([init/2, websocket_init/1, websocket_handle/2, websocket_info/2, terminate/3]).

init(Req, State) ->
    {cowboy_websocket, Req, State}.

websocket_init([Concurrency]) ->
    Concurrency ! {new_client, self()},
    {ok, [Concurrency]}.

websocket_handle({text, Msg}, [Concurrency]) ->
    try list_to_integer(binary_to_list(Msg)) of
        Id -> Concurrency ! {new_car, Id}, {ok, [Concurrency]}
    catch
        _:_ -> 'oh no, anyway'
    end,
    {ok, [Concurrency]};
websocket_handle(_, State) ->
    {ok, State}.

websocket_info({update, ListOfTrafficLights, ListOfCars}, State) ->
    LightsString = handle_format(ListOfTrafficLights),
    CarsString = handle_format(ListOfCars),
    {[{text, "{ lights: " ++ LightsString ++ ", cars: " ++ CarsString ++ " }"}], State};
websocket_info(_, State) ->
    {ok, State}.

terminate(_, _, [Concurrency]) ->
    Concurrency ! {close, self()},
    ok.

% helpers

handle_format(List) -> "["++lists:concat(lists:join(",",map_format(List)))++"]".

map_format([{car, ID, StateID}|T]) -> map_format([{light, ID, StateID}|T]);
map_format([{light, ID, Color}|T]) -> ["[" ++ lists:flatten(io_lib:format("~p", [ID])) ++ "," ++ lists:flatten(io_lib:format("~p", [Color])) ++ "]"|map_format(T)];
map_format([]) -> "".
