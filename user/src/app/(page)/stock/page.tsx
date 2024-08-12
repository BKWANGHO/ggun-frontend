
import StockLank from "@/app/component/stock/stockLank";

export default function stockMain() {

    // const formattedDate = itemsList?.map(item => {
    //     const formattedDate = format(new Date(item.date), 'yyyy-MM-dd');
    //     console.log("formattedDate : ", formattedDate)
    //     return {
    //         ...item,
    //         formattedDate, // 추가된 포맷된 날짜
    //     };
    // });

    
    return (
        <div className="w-full h-full justify-center flex">
            <div className="w-[80%]">
            <StockLank />
            </div>
        </div>
    )
}