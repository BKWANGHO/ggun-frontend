import { StockRankingDummy } from "@/app/common/dummy/stock.dummy";
import { WhiteBox } from "../style/whiteBox";
import Link from "next/link";
import Image from "next/image";
import MiniChart from "../chart/miniChart";

export default function StockLank () {

    return (
        <div className="w-full h-full justify-center flex">
            <div className="w-[80%]">
                <div className="w-full text-center content-center text-[60px] h-[300px] bg-coin_img bg-left bg-no-repeat bg-[#DECCCA] font-bold my-5 rounded-lg">실시간 랭킹 TOP 10</div>
                <div className="grid grid-cols-8 text-center items-center bg-pebble-100 text-white h-[40px] bold text-lg rounded-lg">
                    <div className="">rank</div>
                    <div className="col-span-3">종목</div>
                    <div className="">현재가</div>
                    <div>거래량</div>
                    <div>시총</div>
                </div>
                {StockRankingDummy.map((v:any, i:number) =>
                    <WhiteBox key={v.id} style="my-3">
                        <Link href={`/stock/stockDetail/${v.id}`}
                            className="grid grid-cols-8 text-center items-center" >
                            <div className="">{v.id}</div>
                            <div className="flex items-center justify-center">
                                <Image src={v.imgSrc} width={50} height={30} alt={"search"} className="rounded-lg"/>
                            </div>
                            <div className=""><MiniChart props={v.title}/></div>
                            <span className="">{v.stock}</span>
                            <span>{v.now}</span>
                            <span>{v.volume}</span>
                            <span>{v.total}</span>
                        </Link>
                    </WhiteBox>
                )}
            </div>
        </div>
    )
}