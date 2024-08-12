
import { stockInfoDummy } from "@/app/common/dummy/stock.dummy";
import { OneBox } from "@/app/component/stock/oneBox";
import { useQuery } from "@tanstack/react-query";


function StockInfo({props}:{props:number}) {

    const fetchData= async (): Promise<any[]> => {
        const response = await fetchNews(props)
        if ('status' in response) {
            throw new Error(`Error: ${response.status}`);}
        return response;
    }
    
      const { data } = useQuery<any[]>(
        {
            queryKey: ["stockInfo"],
            queryFn : fetchData,
            placeholderData: stockInfoDummy,
        }
    );

    return (
        <div className="w-full h-full">
            <div className="w-full flex justify-center">
                <div className="flex-col w-full grid grid-cols-4 gap-3">
                    {stockInfoDummy.map((v: any, i: number) =>
                        <div key={v.id} className="h-[40px]">
                            <OneBox title={v.title} data={v.data} fontColor={`${v.title.endsWith('가') == true ? 'text-pebble-500' : 'text-pebble-300'}`} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};
export default StockInfo;