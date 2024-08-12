import { myStockDummy } from "@/app/common/dummy/account.dummy";

export default function MyStocks () {

    const myStockList = myStockDummy;
    return (
    <div className="w-full h-full flex justify-center">
        <div className="w-full">
            <div className="">
            <table className="">
            <thead>
                <tr>
                    <th>AI / CMA 위에 셀렉 넣어야 함</th>
                    <th>종목명</th>
                    <th>보유수량</th>
                    <th>평가손익</th>
                    <th>현재잔액</th>
                    <th>매수금액</th>
                </tr>
            </thead>
            <tbody>
                {myStockList.map((v: any, i: number) =>
                    <tr key={i}>
                        <td>{v.stock}</td>
                        <td>{v.price}</td>
                        <td>{v.volume}</td>
                        <td>{v.total}</td>
                    </tr>
                )}
            </tbody>
        </table>
            </div>
        </div>
    </div>
    )

}