
import { mainExchangeDummy } from "@/app/common/dummy/exchange.dummy";
import { WhiteBox } from "../style/whiteBox";
import { useQuery } from "@tanstack/react-query";
import { fetchExchange } from "@/app/service/exchange/exchange.api";

export default function TransWon() {

    const queryExchage = async (): Promise<IExchange[]> => {
        const response = await fetchExchange()
        if ('status' in response) {
            throw new Error(`Error: ${response.status}`);
        }
        return response;
    }

    const { data } = useQuery<IExchange[]>(
        {
            queryKey: ["exchange"],
            queryFn: queryExchage,
            placeholderData: mainExchangeDummy,
        }
    );

    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="w-full h-[70%] text-center grid grid-cols-2 gap-5">
                {data && data.map((v: IExchange, i: number) =>
                    <WhiteBox key={i}>
                        <div className="py-3 space-y-2">
                            <div className="">{v.cur_nm} {v.cur_unit}<hr /></div>
                            <div className="text-red-400 ">살때 {v.ttb}</div>
                            <div className="text-blue-400 ">팔때 {v.tts}</div>
                        </div>
                    </WhiteBox>
                )}
            </div>
        </div>
    )

}