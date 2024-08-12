'use client'

import { KisAskPriceDummy } from "@/app/common/dummy/kis.dummy";
import QuoteChart from "@/app/component/chart/quoteChart";
import TradeOrder from "@/app/component/trade/tradeOrder";
import { fetchKisAskingprice } from "@/app/service/kis/kis.api";
import { useaskTradeAction, useaskTradeStack } from "@/app/store/askTrade";
import { useQuery } from "@tanstack/react-query";


export default function AskTrade({ props }: { props: number }) {

    const queryKisAskPrice = async (): Promise<IKisAskPrice> => {
        const response = await fetchKisAskingprice()
        if ('status' in response) {
            throw new Error(`Error: ${response.status}`);
        }
        return response;
    }

    const { data } = useQuery<IKisAskPrice>(
        {
            queryKey: ["kisAskPrice"],
            queryFn: queryKisAskPrice,
            placeholderData: KisAskPriceDummy,
        }
    );

    const ask: IAskPriceOutput1 | '0' = data ? data.output1 : '0';

    const tradeOrder = useaskTradeAction();
    const order = useaskTradeStack();

    const handleOrder = (avgPrvs: number) => {
        tradeOrder.update({ ...order.data, avgPrvs: avgPrvs }); // avgPrvs를 업데이트
        console.log('order : ' + JSON.stringify(avgPrvs));
        console.log('order : ' + JSON.stringify(order));
    }

    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="grid grid-cols-2 gap-1">
                <div className="content-center">
                    <div className="border rounded-lg">

                        {data && Array.from({ length: 5 }, (v: number, i: number) => {
                            const askPrice = typeof ask === 'string' ? 0 : parseInt(ask[`askp${i + 1}` as keyof IAskPriceOutput1]);
                            const askRsqn = typeof ask === 'string' ? '0' : ask[`askp_rsqn_icdc${i + 1}` as keyof IAskPriceOutput1];

                            return (
                                <button 
                                    key={i + 1} 
                                    className="text-center h-[50px] flex w-full hover:bg-slate-100 cursor-pointer"
                                    onClick={() => handleOrder(askPrice)} // askPrice를 인자로 전달
                                >
                                    <div className="w-1/3">
                                        <QuoteChart 
                                            props={typeof ask === 'string' ? { data: '0', max: '0', color: 'black' } : { data: ask[`askp_rsqn${i + 1}` as keyof IAskPriceOutput1], max: ask.total_askp_rsqn, color: '#F87171' }} 
                                        />
                                    </div>
                                    <div className={`w-1/3 text-xl items-center hover:text-red-600
                                        ${parseInt(data.output2.stck_prpr) < askPrice ? 'text-red-400' : 'text-blue-400'}`}>
                                        {askPrice?.toLocaleString()}
                                    </div>
                                    <div className="w-1/3 text-slate-400 content-center">{askRsqn}</div>
                                </button>
                            );
                        })}

                        {data && Array.from({ length: 5 }, (v: number, i: number) => {
                            const bidPrice = typeof ask === 'string' ? 0 : parseInt(ask[`bidp${i + 1}` as keyof IAskPriceOutput1]);
                            const bidRsqn = typeof ask === 'string' ? '0' : ask[`bidp_rsqn_icdc${i + 1}` as keyof IAskPriceOutput1];

                            return (
                                <button 
                                    key={i + 2} 
                                    className={`text-center h-[50px] flex w-full hover:bg-slate-100 cursor-pointer 
                                        ${parseInt(data.output2.stck_prpr) == bidPrice ? 'border-dashed border-pebble-500 border-y-2' : ''}`}
                                    onClick={() => handleOrder(bidPrice)} // bidPrice를 인자로 전달
                                >
                                    <div className="w-1/3">
                                        <QuoteChart 
                                            props={typeof ask === 'string' ? { data: '0', max: '0', color: 'black' } : { data: ask[`bidp_rsqn${i + 1}` as keyof IAskPriceOutput1], max: ask.total_askp_rsqn, color: '#60a5fa' }} 
                                        />
                                    </div>
                                    <div className={`w-1/3 text-xl items-center hover:text-blue-600
                                        ${parseInt(data.output2.stck_prpr)  < bidPrice ? 'text-red-400' : 'text-blue-400'}`}>
                                        {bidPrice?.toLocaleString()}
                                    </div>
                                    <div className="w-1/3 text-slate-400 content-center">{bidRsqn}</div>
                                </button>
                            );
                        })}

                    </div>

                    <div className="bg-pebble-100 text-white col-span-2 text-center">잔량 총합 {typeof ask === 'string' ? 0 : parseInt(ask.ntby_aspr_rsqn).toLocaleString()}</div>
                </div>
                <div className="w-full h-full"><TradeOrder /></div>
            </div>
        </div>
    )
}