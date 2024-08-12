
import { LocalNumberOptions } from "@/app/common/config/localeString";
import { tradeDummy } from "@/app/common/dummy/account.dummy";


export default function MyAccInfo({ownStock} : IOwnStock) {

    const data: IAccount = tradeDummy[0];

    return (
        <div className="h-full w-full bg-pebble-400 p-8 flex justify-center">
            <div className="w-[50%] text-center">
                <div className="h-[30%] text-4xl content-center">총자산</div>
                <div className="h-[30%] item-center text-6xl">{data.balance?.toLocaleString()}원</div>

                <div className="h-[40%] text-slate-500 grid grid-cols-4 content-center">
                    <div className=""></div>
                    <div className={`${data.balance == undefined || data.balance < 0 ? 'text-blue-400' : 'text-red-400'} text-2xl`}>{data.balance}</div>
                    <div className={`${data.balance == undefined || data.balance < 0 ? 'text-blue-400' : 'text-red-400'} text-2xl`}>11.3%</div>
                    <div></div>
                    <div></div>
                    <div>예수금</div>
                    <div>{data.balance?.toLocaleString()}원</div>
                    <div></div>
                    <div></div>
                    <div>출금가능금액</div>
                    <div>{data.balance?.toLocaleString()}원</div>
                </div>

            </div>
        </div>
    )
}
