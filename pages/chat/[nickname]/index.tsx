import React, { useEffect, useRef, useState } from 'react';

import SockJS from 'sockjs-client';
import { Client, StompHeaders } from '@stomp/stompjs';

import styled from 'styled-components';

import Navigate from '../../../components/layout/navigate';
import { useMessages } from '../../../quries/hooks/chat/messages/useMessages';
import { chatApi } from '../../../services/api';
import { useInView } from 'react-intersection-observer';
import { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { TInputChangeEvent } from '../../../lib/types/types';
import useUser from '../../../quries/hooks/user/useUser';
import useChat from '../../../lib/hooks/socket/useChat';
import WithoutLayout from '../../../components/hoc/withoutLayout';

const Chat = () => {
  const router = useRouter();
  const senderNickname = router.query.nickname as string;

  const { user } = useUser();
  const nickname = user?.nickname;
  const profileImg = user?.profileImg;

  const scrollRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<Client | null>(null);
  const { ref, inView } = useInView();

  const [prevScrollHeight, setPrevScrollHeight] = useState<number | null>();

  const { messages, fetchNextPage, isFetchingNextPage, __setRoomId } =
    useMessages();
  const {
    message,
    setMessage,
    handlePublish,
    chatMessages,
    senderProfileImg,
    receiverProfileImg
  } = useChat(clientRef, senderNickname, __setRoomId);

  const isMessage = message !== '';

  const onChange = useCallback((e: TInputChangeEvent) => {
    setMessage(e.target.value);
  }, []);

  const scrollToBottom = () => {
    if (scrollRef && scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  const onScrollTo = (y: number) => {
    if (scrollRef && scrollRef.current) scrollRef.current.scrollTop = y;
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  useEffect(() => {
    if (!(scrollRef && scrollRef.current)) return;
    if (prevScrollHeight) {
      onScrollTo(scrollRef.current?.scrollHeight - prevScrollHeight);
      return setPrevScrollHeight(null);
    }
    onScrollTo(
      scrollRef.current?.scrollHeight - scrollRef.current?.clientHeight
    );
  }, [messages?.pages]);

  useEffect(() => {
    if (inView && messages) {
      onFetchMessages();
    }
  }, [inView]);

  const onFetchMessages = useCallback(() => {
    setPrevScrollHeight(scrollRef.current?.scrollHeight);

    fetchNextPage();
  }, []);

  return (
    <Container>
      <Navigate
        text={senderNickname}
        padding={true}
        profileImg={receiverProfileImg}
      />
      <Divider />
      <ChatContainer ref={scrollRef}>
        {isFetchingNextPage ? <div /> : <div ref={ref}></div>}
        {messages?.pages?.map((page, pageIdx) => {
          return page.data.map((msg, msgIdx) => {
            const isSender = msg.nickname !== nickname;
            const profileImg = isSender ? receiverProfileImg : senderProfileImg;
            const Container = isSender ? SenderContainer : ReceiverContainer;
            const messageBoxClass =
              msgIdx === 0 || page.data[msgIdx - 1].nickname !== msg.nickname
                ? 'firstMessageBox'
                : 'messageBox';
            return (
              <Container key={`${pageIdx}-${msgIdx}`}>
                <Image
                  src={profileImg}
                  alt="profileImage"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className={messageBoxClass}>
                  <span>{msg.content}</span>
                </div>
              </Container>
            );
          });
        })}
        {chatMessages &&
          chatMessages.length > 0 &&
          chatMessages.map((msg, msgIdx) => {
            const isSender = msg.nickname !== nickname;
            const profileImg = isSender ? receiverProfileImg : senderProfileImg;
            const Container = isSender ? SenderContainer : ReceiverContainer;
            const messageBoxClass =
              msgIdx === 0 ||
              (msgIdx >= 1 && chatMessages[msgIdx - 1].nickname !== nickname)
                ? 'firstMessageBox'
                : 'messageBox';
            return (
              <Container key={msgIdx}>
                <Image
                  src={profileImg}
                  alt="profileImage"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className={messageBoxClass}>
                  <span>{msg.message}</span>
                </div>
              </Container>
            );
          })}
      </ChatContainer>
      <Footer>
        <Divider />
        <InputMessageContainer>
          <Image
            src={profileImg || ''}
            alt="profileImage"
            width={32}
            height={32}
            className="rounded-full"
          />

          <InputBox>
            <input
              type="text"
              placeholder="메세지를 입력해주세요"
              value={message}
              onChange={onChange}
              onKeyPress={(e) =>
                (e.target as HTMLInputElement).value &&
                e.which === 13 &&
                handlePublish(message)
              }
            />
            <MessageButton
              disabled={!isMessage}
              isMessage={isMessage}
              onClick={() => handlePublish(message)}
            >
              Send
            </MessageButton>
          </InputBox>
        </InputMessageContainer>
      </Footer>
    </Container>
  );
};

export default WithoutLayout(Chat);

const Container = styled.div`
  /* position: relative; */
  border-right: solid 1px #ececec;
  border-left: solid 1px #ececec;
  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    width: 40%;
  }

  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const ChatContainer = styled.div`
  padding: 1rem;

  flex: 1;

  overflow-y: auto;
`;

const SenderContainer = styled.div`
  display: flex;

  margin: 0.3rem 0;
  img {
    margin-top: 0.2rem;
    margin-right: 0.313rem;
  }
  .firstMessageBox {
    position: relative;
    padding: 0.625rem;
    gap: 0.625rem;

    max-width: 80%;

    word-break: break-all;

    background: #ffffff;
    border: 1px solid #e5e5ea;
    border-radius: 0.813rem;

    span {
      font-size: 15px;
      line-height: 18px;
    }
  }

  .messageBox {
    padding: 0.625rem;
    gap: 0.625rem;

    max-width: 80%;
    word-break: break-all;

    background: #ffffff;
    border: 1px solid #e5e5ea;
    border-radius: 0.813rem;
    span {
      font-size: 15px;
      line-height: 18px;
    }
  }
`;
const ReceiverContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.3rem 0;

  .messageBox {
    padding: 0.625rem;
    gap: 0.625rem;

    max-width: 80%;
    word-break: break-all;

    background: #ffffff;
    border: 1px solid #e5e5ea;
    border-radius: 0.813rem;
    span {
      font-size: 15px;
      line-height: 18px;
    }
  }
`;

const Footer = styled.div`
  /* position: absolute;
  bottom: 0; */
  width: 100%;
`;

const InputMessageContainer = styled.div`
  display: flex;

  align-items: center;
  padding: 0.75rem 1rem;
  gap: 0.688rem;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ececec;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #f2f2f7;
  border-radius: 2rem;
  /* padding: 0.625rem; */
  input {
    flex: 1;
    padding: 0.625rem 0.8rem;
    border-radius: 2rem;
    background-color: transparent;
    outline: none;
    border: none;
  }
`;
const MessageButton = styled.button<{ isMessage: boolean }>`
  /* border-radius: 0 32px 32px 0; */
  /* border-radius: 32px; */
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 14px;
  padding: 0 0.625rem;
  color: ${(props) => (props.isMessage ? '#007aff' : 'gray')};
  /* background-color: #007aff;
    svg {
      color: white;
      font-size: 1rem;
    } */
`;
