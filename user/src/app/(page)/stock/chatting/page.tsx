
'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { WhiteBox } from "@/app/component/style/whiteBox";
import ChartRoomList from "@/app/component/chat/chatRoom";

function ChatRoom() {

    const myname = 1111;

    return (
        <div className="w-full h-full">
          <ChartRoomList/>
        </div >
    )
}
export default ChatRoom;