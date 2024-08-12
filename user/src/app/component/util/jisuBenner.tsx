'use client'
import { KrxJisuDummy } from "@/app/common/dummy/krx.dummy";
import { fetchKrxJisu } from "@/app/service/krxJisu/krx.api";
import { useQuery } from "@tanstack/react-query";

export default function JisuBenner() {

    const queryKrxJisu = async (): Promise<IKrx[]> => {
        const response = await fetchKrxJisu()
        if ('status' in response) {
            throw new Error(`Error: ${response.status}`);
        }
        let result = response;
        if(response.length == 0){
            result = KrxJisuDummy;
        }
        return result;
    }

    const { data } = useQuery<IKrx[]>(
        {
            queryKey: ["krxJisu"],
            queryFn: queryKrxJisu,
            // placeholderData: KrxJisuDummy,
        }
    );

    return (
        <div className="bg-pebble-100">
            <div className="text-white text-sm space-x-8 flex h-[20px] whitespace-nowrap animate-slider">
                {data && data.map((v: IKrx, i: number) =>
                    <div key={i} className="flex gap-2">
                        <div className="" key={i}>{v.IDX_NM}</div>
                        <div className="text-pebble-400">{v.CLSPRC_IDX}</div>
                        <div className={`${v.FLUC_RT.startsWith('-') ? 'text-sky-300' : 'text-rose-300'}`}>{v.FLUC_RT}</div>
                    </div>
                )}
            </div>
        </div>

    )
}