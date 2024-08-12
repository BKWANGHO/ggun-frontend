
'use client'

import Image from "next/image";
import { useState } from "react";
import { WhiteBox } from "@/app/common/box/whiteBox";
import { chatDummy, chatRoomDummy } from "@/app/common/dummy/chat.dummy";
import ChatLayout from "@/app/component/layout/chatLayout";
import { AdminIcon } from "@/app/common/icons/adminIcon";
import { fetchChatroomList, fetchChatting } from "@/app/service/chat/chat.api";
import { useQuery } from "@tanstack/react-query";
import { useChatAction, useChatStack } from "@/app/store/chat.store";
import { extractTokenId } from "@/app/component/util/extractToken";
import today from "@/app/common/date/today";
import { useIsChatOpenAction, useIsChatOpenStack } from "@/app/store/chatOpen.store";

function ChatRoom() {
    const [isOpen, setIsOpen] = useState(false);
    // const [myid, setMyid] = useState<string>('');

    const inputChat = useChatAction();
    const Chat = useChatStack();

    const handleIsChatOpen = useIsChatOpenAction();
    const isChatOpen = useIsChatOpenStack();

    const fetchChatRoom = async (): Promise<IChat[]> => {
        const response = await fetchChatroomList()
        if ('status' in response) {
            throw new Error(`Error: ${response.status}`);
        }
        return response;
    }

    // const { data: chatRoom } = useQuery<IChat[]>(
    //     {
    //         queryKey: ["chatRoom"],
    //         queryFn: fetchChatRoom,
    //         placeholderData: chatRoomDummy,
    //     }
    // );

    const fetchChats = async (): Promise<IChat[]> => {
        const response = await fetchChatting()
        if ('status' in response) {
            throw new Error(`Error: ${response.status}`);
        }
        return response;
    }

    const handleChat = (e:any) =>{
        inputChat.update({ ...Chat, [e.target.name]: e.target.value });
        console.log('article : ' + JSON.stringify(Chat))
    }

    const submitChat = (e:any) =>{
        if(e.key === "Enter") {
            // inputChat.update({id:myid, createdAt:today(), message:e.target.value, senderId:chatting[0].senderId})
            inputChat.update({id:myid, message:e.target.value,senderId:chatting[0].senderId, createdAt: today()})
        }
        fetchChats()
        console.log('article : ' + JSON.stringify(Chat))
    }

    // const myid = extractTokenId();
    const myid = '1111'
    const chatRoom = chatRoomDummy;
    const chatting = chatDummy;

    return (
        <div className="w-full h-full">
            <button className="fixed right-3 bottom-3" onClick={() => setIsOpen(!isOpen)}>
                <Image src="/imgs/chatroom.png" width="50" height="50" alt="채팅빙 목록" priority />
                <span className="bg-red-500 h-4 w-4 rounded-full text-xs text-white absolute top-0 right-0">{chatRoomDummy.length}</span>
            </button>

            {isOpen == true ?
                isChatOpen == false ?
                    <ChatLayout>
                        {chatRoom && chatRoom.map((v: IChat, i: any) =>
                            <div className="py-1" key={i}>
                                <button key={i} className="w-full text-left" name="roomId" onClick={() => { handleIsChatOpen(!isChatOpen), handleChat }}>
                                    <WhiteBox style="white hover:bg-pebble-400 grid grid-cols-3 h-[60px] content-center" >
                                        <div className="text-sm truncate col-span-2">{v.sender}와의 대화</div>
                                        <div className="text-gray-400 text-xs text-right">{v.createdAt}</div>
                                        <div className="text-xs row-span-2 text-gray-400 truncate col-span-3">{chatting[chatting.length-1].message}</div>
                                    </WhiteBox>
                                </button>
                            </div>
                        )}
                    </ChatLayout>
                    : <ChatLayout>
                        {chatting && chatting.map((v: IChat, i: any) =>
                            v.senderId == myid ?
                                <div key={i} className="w-full flex justify-end ">
                                    <div className="mx-2 content-end text-gray-300">{v.createdAt}</div>
                                    <div className="border shadow-md rounded-lg text-pretty flex items-center my-3 max-w-[45%] p-2 bg-white ">
                                        {v.message}
                                    </div>
                                </div>
                                :
                                <div key={i + 1} className="flex w-full">
                                    <div className="w-[50px] h-[40px]"> <AdminIcon color="#433E49" /></div>
                                    <div className="border shadow-md rounded-lg text-pretty flex items-center my-3 max-w-[45%] p-2 bg-pebble-400">
                                        {v.message}
                                    </div>
                                    <div className="mx-2 content-end text-gray-300">{v.createdAt}</div>
                                </div>
                        )}
                        <div className="sticky bottom-0 h-[50px] w-full">
                            <input type="text" name="message" placeholder="enter the text" className="h-[40px]" onKeyDown={submitChat} />
                        </div>
                    </ChatLayout>

                : <div></div>}
        </div >
    )
}
export default ChatRoom;