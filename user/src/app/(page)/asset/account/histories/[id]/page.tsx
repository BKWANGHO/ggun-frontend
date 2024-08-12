'use client'

import { MoveButton } from "@/app/component/button/buttons";
import { extractTokenId } from "@/app/component/util/jwtDecode";
import MiniCalendar from "@/app/component/util/miniCalender";
import { accountHistories, allAccount } from "@/app/service/asset/account.api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function AccountHistories({ params }: {params: {id: string,}}) {

        const [acno, setAcno] = useState(params.id);

        const fetchAccountHistoriesData = async (): Promise<IAccount[]> => {
            console.log('acno : ' + JSON.stringify(acno))
            const response = await accountHistories(acno);
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        }
        
        const { data: accHistory } = useQuery<IAccount[]>(
            {
                queryKey: ["accHistory"],
                queryFn: fetchAccountHistoriesData,
            }
        );
        
        const jwtTokenId = extractTokenId();
        
        const fetchAccListData = async (): Promise<IAccount[]> => {
            const response = await allAccount(jwtTokenId+'');
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response as IAccount[];
        }
        
        const { data: accList } = useQuery<IAccount[]>(
            {
                queryKey: ["accList"],
                queryFn: fetchAccListData,
                // placeholderData: accListDummy,
            }
        );

        const handleInput = (e: any) => {
            setAcno(e.target.value)
            console.log('acno : ' + JSON.stringify(acno))
          }

    return (
        <div className="w-full h-full flex justify-center ">
            <div className="w-[85%] flex-col flex text-center items-center">
                <div className="grid grid-cols-3 w-full border gap-5 bg-pebble-400 rounded-lg p-3">
                    <div className="col-span-3 text-xl bold">CMA 거래내역 조회</div>
                    <label htmlFor="" className="text-right">계좌선택 : </label>
                    <select name="acno" id="" className="" onChange={handleInput}>
                        {accList && accList.map((v:IAccount, i:number) =>
                            <option value={v.id} key={i}>{v.acno}</option>)}
                    </select>
                    <div></div>
                    <div className="text-right">월별조회 : </div>
                    <div className="flex col-span-2 ">
                        <MiniCalendar /><p className="px-5">~</p><MiniCalendar />
                    </div>

                    <label htmlFor="" className="text-right">입출금 : </label>
                    <div className="flex col-span-2 gap-5 items-center ">
                        <div><input type="radio" name="tradeType" value="출금" className="w-5" onChange={handleInput}/>입출금</div>
                        <div><input type="radio" name="tradeType" value="입금" className="w-5" onChange={handleInput}/>입금</div>
                        <div><input type="radio" name="tradeType" value="출금" className="w-5" onChange={handleInput}/>출금</div>
                    </div>

                    <div className="col-span-3"><MoveButton click={fetchAccountHistoriesData}>조회하기</MoveButton></div>
                </div>

                <table className="p-4">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>거래일자</th>
                            <th>종류</th>
                            <th>입금</th>
                            <th>출금</th>
                            <th>잔액</th>
                            <th>거래처</th>
                            <th>적요</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accHistory && accHistory.map((v: IAccount, i: any) =>
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.modDate}</td>
                                <td>{v.bank}</td>
                                <td>{v.tradeType == "입금" ? v.balance?.toLocaleString() :''}</td>
                                <td>{v.tradeType == "출금" ? v.balance?.toLocaleString() :''}</td>
                                <td>{v.balance?.toLocaleString()}</td>
                                <td>{v.briefs}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
};
export default AccountHistories;