import { stockInfoDummy } from "@/app/common/dummy/stock.dummy";
import { OneBox } from "../stock/oneBox";

export default function TradeInfo() {

    return (
        <div className="w-full h-full">
            <div className="w-full flex justify-center items-center h-full">
                <div className="w-full gap-3">
                    {stockInfoDummy.slice(0,7).map((v:any,i:number)=>
                    <div key={i} className="h-[40px]">
                        <OneBox title={v.title} data={v.data} fontColor={`${v.title.endsWith('가') == true ? 'text-pebble-500' : 'text-pebble-300'}`} />
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
};
