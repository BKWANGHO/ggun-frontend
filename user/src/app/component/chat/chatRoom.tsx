'use client'
import { WhiteBox } from "../style/whiteBox"
import { RoomlistDummy } from "@/app/common/dummy/chat.dummy"
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

export default function ChartRoomList() {

    const router = useRouter();

    const fetchData = async (): Promise<IChatRoom[]> => {
        const response = await fetchNews()
        if ('status' in response) {
            throw new Error(`Error: ${response.status}`);
        }
        return response;
    }

    const { data } = useQuery<IChatRoom[]>(
        {
            queryKey: ["news"],
            queryFn: fetchData,
            placeholderData: RoomlistDummy,
        }
    );

    return (<>
        {data&&data.map((v:any, i: number) =>
            <button key={v.id} className="flex-col py-1 w-full text-left" onClick={() => router.push(`/stock/chatting/${v.senderId}`)}>
                <WhiteBox style="white hover:bg-pebble-400 flex-col">
                    <div className="">
                        <div className="flex ">
                            <div className="text-sm w-2/3 truncate">{v.sender}와의 대화</div>
                            <div className="text-gray-400 text-xs w-1/3">{v.modDate}</div>
                        </div>
                    </div>
                </WhiteBox>

            </button>
        )}
    </>)
}