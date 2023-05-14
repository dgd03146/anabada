import { Client, StompHeaders } from '@stomp/stompjs';
import React, { useState, useEffect, Dispatch } from 'react';
import SockJS from 'sockjs-client';
import { chatApi } from '../../../services/api';
import { getToken } from '../../../services/token';
import useGetToken from '../user/useGetToken';

const useChat = (
  clientRef: React.MutableRefObject<Client | null>,
  senderNickname: string,
  __setRoomId: Dispatch<React.SetStateAction<string | null>>
) => {
  // FIXME: class로 변경
  const token = useGetToken();
  const accessToken = token ?? '';
  const headers: StompHeaders = { accessToken };

  const [chatMessages, setChatMessages] = useState<
    { nickname: string; message: string }[] | null
  >([]);
  const [message, setMessage] = useState('');
  const [senderProfileImg, setSenderProfileImg] = useState('');
  const [receiverProfileImg, setReceiverProfileImg] = useState('');

  const [roomId, setRoomId] = useState(null);

  const handleConnect = () => {
    clientRef.current = new Client({
      brokerURL: `ws://${process.env.REACT_APP_API_SERVER}/socket`, //
      webSocketFactory: () =>
        new SockJS(`https://${process.env.REACT_APP_API_SERVER}/socket`),
      connectHeaders: headers,
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,

      onConnect: () => {
        // 구독
        handleSubscribe();
      },
      onStompError: (frame) => {
        console.error(frame);
      }
    });

    clientRef.current.activate();
  };

  const handleDisConnect = () => {
    clientRef.current?.deactivate();
  };

  const handleSubscribe = () => {
    clientRef.current?.subscribe(`/sub/rooms/${roomId}`, (message) => {
      const getMessage = JSON.parse(message.body).content;
      const getNickname = JSON.parse(message.body).nickname;

      setChatMessages((_chatMessages) => [
        ...(_chatMessages || []),
        { nickname: getNickname, message: getMessage }
      ]);
    });
  };

  const handlePublish = (message: string) => {
    if (!clientRef.current || !clientRef.current.connected) {
      return;
    }

    clientRef.current.publish({
      destination: `/pub/messages/${roomId}`,
      headers: {
        accessToken
      },
      body: JSON.stringify({ content: message })
    });

    setMessage(''); // 메세지 초기화
  };

  useEffect(() => {
    async function getRoomId() {
      try {
        const res = await chatApi.createChat(senderNickname);

        let getRoomId, getSenderProfileImg, getReceiverProfileImg;
        if (res.status === 200) {
          getRoomId = res.data.roomId;

          getSenderProfileImg = res.data.senderProfileImg;
          getReceiverProfileImg = res.data.receiverProfileImg;
        } else {
          getRoomId = res.data.roomId;
          getSenderProfileImg = res.data.senderProfileImg;
          getReceiverProfileImg = res.data.receiverProfileImg;
        }

        setReceiverProfileImg(getReceiverProfileImg);
        setSenderProfileImg(getSenderProfileImg);
        setRoomId(getRoomId);

        __setRoomId(getRoomId);
      } catch (error) {
        console.log(error, 'error');
      }
    }
    getRoomId();

    return () => handleDisConnect();
  }, []);

  useEffect(() => {
    if (roomId) {
      handleConnect();
    }
  }, [roomId]);

  return {
    message,
    setMessage,
    handlePublish,
    handleSubscribe,
    handleConnect,
    chatMessages,
    senderProfileImg,
    receiverProfileImg
  };
};

export default useChat;
