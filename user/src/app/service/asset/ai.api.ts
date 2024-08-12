'use server'

export async function allAiAccount(id:string): Promise<IAccount[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/ai/getAIAcno?id=${id}`,{
            method: 'GET',
        })

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IAccount[] = await response.json();
        if (!data || data.length === 0) { return { status: 404 }; }
        console.log("allAiAccount!!!" + JSON.stringify(data))
        return data
    } catch (error) {
        console.error("allAiAccount err : " + error);
        return { status: 500 };
    }
}