'use server'

export async function fetchChatroomList(): Promise<IChat[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/chats/list`
            , {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: any[] = await response.json();
        console.log("chatroomList api : ", res);

        if (res.length == 0) { return { status: 404 }; }

        return res;

    } catch (error) {
        console.log("chatroomList err : " + error);
        return { status: 500 };
    }
}


export async function fetchChatting(): Promise<IChat[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/chats/list`
            , {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: any[] = await response.json();
        console.log("chatroomList api : ", res);

        if (res.length == 0) { return { status: 404 }; }

        return res;

    } catch (error) {
        console.log("chatroomList err : " + error);
        return { status: 500 };
    }
}


