'use client'

import { stockCommunDummy } from "@/app/common/dummy/chat.dummy";
import { StockComuBox } from "@/app/component/stock/stockCommun";

function StockChat({ params }: any) {

    function handleTitle() {
        const enums: any = {
            1: "삼성전자 종목 토론",
            2: "SK하이닉스 종목 토론",
            3: "LG디스플레이 종목 토론",
            4: "SK하이닉스 종목 토론",
            5: "DB하이텍 종목 토론",
        };
        return <div>{enums[params]}</div>;
    };

    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-[85%]">
                <div className="text-lg bold">
                    <div className="blod text-[32px] h-[100px] content-center">{handleTitle()} <hr /></div>
                    <input type="text" className="h-[50px] w-1/3 my-2" placeholder="종목토론 제목" />
                    <input type="text" className="h-[50px] w-2/3" placeholder="종목에 대한 자유로운 이야기를 해보세요!" />
                </div>
                <div>
                    {stockCommunDummy.map((v, i) =>
                        <StockComuBox key={v.id} id={v.id} writer={v.writer} title={v.title} content={v.content} date={v.date} />
                    )}
                </div>
            </div>
        </div>
    )
};
export default StockChat;
