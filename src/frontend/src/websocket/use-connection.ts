import { useCallback, useEffect, useState } from 'react';

type Props = {
  url: string;
  maxSavedMessages?: number;
};

export const useWebsocket = ({ url, maxSavedMessages = 10 }: Props): [boolean, string[], (i: string) => void] => {
  const [connected, setConnected] = useState<boolean>(false);
  const [messageQueue, setMessages] = useState<string[]>([]);
  const [sendMessage, setupSendCallback] = useState<(i: string) => void>(() => null);

  useEffect(() => {
    const ws = new WebSocket(url);

    const send = (input: string) => {
      ws.send(input);
    };

    ws.onmessage = ({ data }) => {
      setMessages([data, ...messageQueue.slice(0, maxSavedMessages)]);
    };

    ws.onopen = () => {
      setConnected(true);
    };

    ws.onclose = () => {
      setConnected(false);
    };

    setupSendCallback(() => send);

    return () => (ws.close(), setConnected(false));
  }, []);

  return [connected, messageQueue, sendMessage];
};
