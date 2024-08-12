'use server'

export async function allAccount(id:string): Promise<IAccount[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/list?id=${id}`,{
            method: 'GET',
        })

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IAccount[] = await response.json();
        if (!data || data.length === 0) { return { status: 404 }; }
        // console.log("allAccount!!!" + JSON.stringify(data))
        return data
    } catch (error) {
        console.error("allAccount err : " + error);
        return { status: 500 };
    }
}

export async function findAccountById(id:string): Promise<IAccount[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/detail?id=${id}`)
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IAccount[] = await response.json();
        // if (!data || data.length === 0) { return { status: 404 }; }
        // console.log("findAccountById!!!" + JSON.stringify(data))
        return data
    } catch (error) {
        console.error("findAccountById err : " + error);
        return { status: 500 };
    }
}

export async function accountHistories(id:string): Promise<IAccount[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/accHistories/list?id=${id}`)

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IAccount[] = await response.json();
        if (!data || data.length === 0) { return { status: 404 }; }
        // console.log("accountHistories!!!" + JSON.stringify(data))
        return data
    } catch (error) {
        console.error("accountHistories err : " + error);
        return { status: 500 };
    }
}

export async function deposit(accinfo: IAccount): Promise<IAccount[] | { status: number }> {
    // console.log("deposit : " + JSON.stringify(article))
    // const id = 1;
    const { id, balance, tradeType, bank } = accinfo || {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/deposit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 1,
                balance: balance,
                tradeType: "입금",
                bank: bank,
            })
        })
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IAccount[] = await response.json();
        if (!data || data.length === 0) { return { status: 404 }; }
        console.log("deposit : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.error("deposit err : " + error);
        return { status: 500 };
    }
}

export async function withdraw(accinfo: IAccount): Promise<IAccount[] | { status: number }> {
    // console.log("deposit : " + JSON.stringify(article))
    // const id = 1;
    const { id, balance, tradeType, bank } = accinfo || {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/withdraw`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 1,
                balance: balance,
                tradeType: "출금",
                bank: bank,
            })
        })
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IAccount[] = await response.json();
        if (!data || data.length === 0) { return { status: 404 }; }
        console.log("withdraw : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.error("withdraw err : " + error);
        return { status: 500 };
    }
}
