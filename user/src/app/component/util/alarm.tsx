'use client'

import Image from "next/image";
import { useState } from "react";
import { WhiteBox } from "../style/whiteBox";
import { qnalistDummy } from "@/app/common/dummy/articles.dummy";

function Alarm() {
    const [isOpen, setIsOpen] = useState(false);

    const alaramList = qnalistDummy;
    return (
        <div className="w-full h-full">
            <button className="fixed right-3 top-3" onClick={() => setIsOpen(!isOpen)}>
                <span className="bg-red-500 h-4 w-4 rounded-full text-xs text-white absolute top-1 right-1">{alaramList.length}</span>
            </button>

            {isOpen == true ?
                <div className="absolute top-3 right-[65px] w-full h-[80%] border-gray-300 border overflow-auto bg-white shadow-lg rounded-lg p-3">
                    {alaramList.map((i: any) =>
                        <div key={i.id} className="flex-col py-1 ">
                            <WhiteBox style="white hover:bg-gray-100">
                                <div>
                                    <div className="flex">
                                        <div className="text-sm w-2/3 truncate">{i.title}</div>
                                        <div className="text-gray-300 text-xs w-1/3">{i.modDate}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs row-span-2 text-gray-300 truncate">{i.content}</div>
                                    </div>
                                </div>
                            </WhiteBox>
                        </div>
                    )}
                </div>

                : <div></div>}
        </div >
    )
}
export default Alarm;