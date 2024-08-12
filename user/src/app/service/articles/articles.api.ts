'use server'

import { cookies } from "next/headers";

export async function fetchMyArticleList(board: string): Promise<IArticle[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/articles/list?boardId=${board}`);

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: IArticle[] = await response.json();
        if (data.length === 0) { return { status: 404 }; }

        console.log("myArticleList : " + JSON.stringify(data))

        return data
    } catch (error) {
        console.error("myArticleList err : " + error);
        return { status: 500 };
    }
}

export async function findByArticleId(id: string): Promise<IArticle | { status: number }> {
    // const board = parseInt(board)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/api/boards/list?id=${id}`);

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: IArticle = await response.json();
        // if (data.length === 0) { return { status: 404 }; }

        console.log("myArticleList : " + JSON.stringify(data))

        return data
    } catch (error) {
        console.error("myArticleList err : " + error);
        return { status: 500 };
    }
}

export async function saveArticle(article: IArticle): Promise<IArticle[] | { status: number }> {
    // console.log("saveArticle : " + JSON.stringify(article))
    const { title, content, writerId, boardId } = article || {}
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        // 'accessToken': cookies().get('accessToken')?.toString || '',
    }
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/articles/save`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                title: title,
                content: content,
                writerId: writerId,
                boardId: "2",
            })
        })
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: IArticle[] = await response.json();
        if (data.length === 0) { return { status: 404 }; }
        console.log("saveArticle : " + JSON.stringify(article))
        return data
    } catch (error) {
        console.error("saveArticle err : " + error);
        return { status: 500 };
    }
}
