'use server'

import ThirtyDaysAgo from "@/app/common/date/thirtyDaysAgo";
import Today from "@/app/common/date/today";

export async function fetchItemsDetail(search:string): Promise<IItems[] | { status: number }> {
    const searchh = "삼성전자"
    console.log("fetchItemsList requsetData : search: ", searchh, " date : ", ThirtyDaysAgo())
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/items/detail`,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                search : searchh,
                sdate : ThirtyDaysAgo(),
                edate : Today(),
            })
        })

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res: IItems[] = await response.json();
        console.log("fetchItemsList data : ", res);
        if (res.length === 0) {
            return { status: 404 };
        }

        return res;
    } catch (error) {
        console.error("fetchItemsList api err : " + error);
        return { status: 500 };
    }
}