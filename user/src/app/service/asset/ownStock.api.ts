'use server'

export async function fetchOwnStockTotalProfit(): Promise<IOwnStock | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/ownStocks/totalProfit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                account: 2,
                pdno: "005930",
                avgPrvs: "71390",
            })
        })
        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IOwnStock = await response.json();

        if (res == null) { return { status: 404 }; }

        console.log("fetchOwnStockTotalProfit data : ", res);

        return res;
    } catch (error) {
        console.error("fetchOwnStockTotalProfit err : " + error);
        return { status: 500 };
    }
}

export async function fetchOwnStockProfit(): Promise<IOwnStock | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/ownStocks/profit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([
                {
                    account: 2,
                    pdno: "005930",
                    avgPrvs: "71390",
                },
                {
                    account: 2,
                    pdno: "000990",
                    avgPrvs: "40000",
                },
            ]),
        });
            
        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IOwnStock = await response.json();

        if (res == null) { return { status: 404 }; }

        console.log("fetchOwnStockProfit data : ", res);

        return res;
    } catch (error) {
        console.error("fetchOwnStockProfit err : " + error);
        return { status: 500 };
    }
}