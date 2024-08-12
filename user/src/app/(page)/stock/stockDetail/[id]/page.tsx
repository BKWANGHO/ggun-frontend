'use client'

import { useState } from "react";
import StockInfo from "@/app/component/stock/stockInfo";
import { TabButton } from "@/app/component/button/tabButton";
import StockLog from "@/app/component/stock/stockLog";
import StockChat from "../../stockCommun/[id]/page";
import AskTrade from "../../trade/page";
import { WhiteBox } from "@/app/component/style/whiteBox";
import Cookies from "js-cookie";
import Link from "next/link";

function Stock({ params }: { params: { id: number } }) {
    const [btn, setBtn] = useState(0);

    function handleInfo(btn: any) {
        console.log("handelCharts : ", btn)
        const enums: any = {
            0: <AskTrade props={params.id}/>,
            1: <StockInfo props={params.id}/>,
            2: <StockLog props={params.id} />,
            // 3: <StockAnnual/>,
            // 5: <ChatRoom />,
            6: <StockChat params={1} />,
            // 7: <div ><Link href="/stock/stockchat/1">종목 토론방을 만들긴 함</Link></div>,
        };
        return <div>{enums[btn]}</div>;
    };

    return (
        <div className="w-full h-full">
            <div className="w-full flex justify-center">
                <div className="flex-col w-full items-center flex mb-3">
                {Boolean(Cookies.get('accessToken')) == false ?
                    <WhiteBox>
                        <div className="bg-ggun_logo bg-no-repeat bg-top h-auto w-full">
                            <div className="h-[500px]"></div>
                            <div className="text-center text-2xl">비회원 및 계좌미개설 고객님은 <br /> 확인할수 없는 페이지입니다.</div><br />
                            <Link className="w-full h-full" href='/login' > <WhiteBox style="text-center">login</WhiteBox></Link> <br />
                        </div>
                    </WhiteBox>

                    :
                    <div className="w-[60%]"> 
                    <div className="w-full h-[300px] w-full bg-cover bg-benner_img bg-center bg-fixed"></div>
                    <div className="w-full shadow-lg rounded-lg ">
                        <div className="h-[50px] grid grid-cols-4">
                            <TabButton click={() => setBtn(0)} select={btn == 0} >호가매매</TabButton>
                            <TabButton click={() => setBtn(1)} select={btn == 1} >종합</TabButton>
                            <TabButton click={() => setBtn(2)} select={btn == 2} >시세</TabButton>
                            {/* <TabButton click={() => setBtn(3)} select={btn == 3} >재무정보</TabButton> */}
                            {/* <TabButton click={() => setBtn(4)} select={btn == 4} >관련뉴스</TabButton> */}
                            {/* <TabButton click={() => setBtn(5)} select={btn == 5} >종목챗방</TabButton> */}
                            <TabButton click={() => setBtn(6)} select={btn == 6} >종목토론</TabButton>
                        </div>
                        <div className="p-5 border border-t-0" >{handleInfo(btn)}</div>
                    </div>
                    </div>
}
                </div>
            </div>
        </div>
    )
};
export default Stock;