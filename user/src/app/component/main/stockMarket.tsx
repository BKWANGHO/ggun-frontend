
import { useQuery } from "@tanstack/react-query";
import { fetchKisSection } from "@/app/service/kis/kis.api";
import { Suspense } from "react";
import { KrxJisuDummy } from "@/app/common/dummy/krx.dummy";
import { KisSectionDummy } from "@/app/common/dummy/kis.dummy";
import MarketBarChart from "../chart/marketChart";
import IsLoading from "../queryState/isLoading";

export default function StockMarket({ props }: { props: number }) {
    // props = 1 코스닥, 2 = 코스피
    const fetchSection = async (): Promise<IKisSection> => {
        // console.log("fetchSection: ", props)
        const response = await fetchKisSection(props)
        if ('status' in response) {
            throw new Error(`Error: ${response.status}`);
        }
        let result = response;
        if(response.length == 0){
            // result = KisSectionDummy;
        }
        return response;
    }

    const { data } = useQuery<IKisSection>(
        {
            queryKey: ["kisSection", props],
            queryFn: fetchSection,
            // placeholderData: KisSectionDummy,
        }
    );

    return (
        <div className="w-full h-full flex justify-center content-center">
            <Suspense>
                {data ? <MarketBarChart props={data} /> :''}
            </Suspense>
        </div >
    )

}