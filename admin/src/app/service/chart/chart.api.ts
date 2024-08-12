'use server'

export async function fetchTransactionLlit(): Promise<any[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions/list`
            , {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: any[] = await response.json();
        console.log("fetchTransactionLlit api : ", res);

        if (res.length == 0) { return { status: 404 }; }

        return res;

    } catch (error) {
        console.log("fetchTransactionLlit err : " + error);
        return { status: 500 };
    }
}

export async function fetchTransactionNetByDate(): Promise<any[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions/netProfitByDate`
            , {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: any[] = await response.json();
        console.log("fetchTransactionNetByDate api : ", res);

        if (res.length == 0) { return { status: 404 }; }

        return res;

    } catch (error) {
        console.log("fetchTransactionNetByDate err : " + error);
        return { status: 500 };
    }
}

export async function fetchTransactionQuantityByDate(): Promise<any[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions/QuantityByDate`
            , {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: any[] = await response.json();
        console.log("fetchTransactionQuantityByDate api : ", res);

        if (res.length == 0) { return { status: 404 }; }

        return res;

    } catch (error) {
        console.log("fetchTransactionQuantityByDate err : " + error);
        return { status: 500 };
    }
}

