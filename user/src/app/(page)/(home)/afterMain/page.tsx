'use client'

import { MyStockList } from "@/app/component/stock/stockJisu";
import MyAccInfo from "@/app/component/main/myAccInfo";
import NewsTopic from "@/app/component/news/newsTopic";
import { stockCommunDummy } from "@/app/common/dummy/chat.dummy";
import Link from "next/link";
import Image from "next/image";
import { useNewsFetch, useNewsStack } from "@/app/store/news.store";
import { useQuery } from "@tanstack/react-query";
import { fetchOwnStockTotalProfit } from "@/app/service/asset/ownStock.api";
import StockLank from "@/app/component/stock/stockLank";

export default function AfterHome() {

    const fetchOwnStockTotalprofit = async (): Promise<IOwnStock[]> => {
        const response = await fetchOwnStockTotalProfit();
        if (typeof response === 'object' && 'status' in response) {
            throw new Error(`Error: ${response.status}`);
        }
        return [response];
    }
    
    const { data: ownStockTotalProfit=[] } = useQuery<IOwnStock[]>(
        {
            queryKey: ["ownStockTotalProfit"],
            queryFn: fetchOwnStockTotalprofit,
        }
    );

    const fecthNews = useNewsFetch();
    const newslist = useNewsStack();

    try {
        if(newslist.length == 0){
            fecthNews();
        }
    } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
    }

    return (
        <main className="w-full h-full space-y-3">
            <div className="w-full h-[300px] "><MyAccInfo ownStock={ownStockTotalProfit} /></div>
            <div className="px-8"><MyStockList /></div>

            <div className="px-8">
                <div className="text-2xl py-5">오늘의 hot토픽</div>
                <NewsTopic />
            </div>
            <div className="w-full flex justify-center">
                {/* <div className="w-[50%] ">
                <MyStocks />
            </div> */}
                <div className="w-[50%] ">
                    <StockLank />
                </div>
            </div>
            <div className="w-full flex justify-center space-x-5">
                {/* <div className="w-[30%]">
                    <div className="text-xl py-3">인기 급상승 오픈채팅방</div>
                    <ChartRoomList />
                </div> */}
                <div className="w-[50%]">
                    <div className="text-xl py-3">인기 급상승 커뮤니티</div>
                    <div className="mb-15">
                        {stockCommunDummy.slice(0, 5).map((v: any, i: number) =>
                            <Link key={i} className="w-full h-[50px] grid grid-cols-3 px-4 items-center active:text-xl" href={`/stock/stockCommun/${v.id}`}>
                                <div className="flex gap-2">
                                    <Image src={v.imgSrc} width={30} height={10} alt={"logos"} className="rounded-lg" />
                                    {v.stock} 
                                </div>
                                <div className="text-lg text-left active:text-xl">{v.title}</div>
                                <div className="text-slate-400 text-right">{v.writer}</div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}