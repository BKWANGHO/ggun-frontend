'use client'

import { fetchMyArticleList } from "@/app/service/articles/articles.api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation"

export default function Articles({ prop }: { prop: string }) {

    const router = useRouter();

    const fetchData = async (): Promise<IArticle[]> => {
        const response = await fetchMyArticleList(prop);
        if (typeof response === 'object' && 'status' in response) {
            throw new Error(`Error: ${response.status}`);
        }
        return response;
    }
    
    const { data: artiMyList = [] } = useQuery<IArticle[]>(
        {
            queryKey: ["artiMyList"],
            queryFn: fetchData,
        }
    );


    return (
        <table className="">
            <thead>
                <tr>
                    <th>No.</th>
                    {/* <th>게시판</th> */}
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성일</th>
                    {/* <th>처리완료일</th> */}
                </tr>
            </thead>
            <tbody>
                {prop == '1' ?
                artiMyList && artiMyList.slice(0,5).map((v: IArticle, i: number) =>
                    <tr key={v.id} onClick={()=>router.push('/articles/detail/${v.id}')}>
                        <td>{v.id}</td>
                        {/* <td>{v.boardId}</td> */}
                        <td>{v.title}</td>
                        {/* <td>{v.writerId}</td> */}
                        <td>{v.content}</td>
                        {/* <td>{v.regDate}</td> */}
                        <td>{v.modDate}</td>
                    </tr>
                )
                :
                artiMyList&&artiMyList.map((v: IArticle, i: number) =>
                    <tr key={v.id} onClick={()=>router.push('/articles/detail/${v.id}')}>
                        <td>{v.id}</td>
                        {/* <td>{v.boardId}</td> */}
                        <td>{v.title}</td>
                        {/* <td>{v.writerId}</td> */}
                        <td>{v.content}</td>
                        {/* <td>{v.regDate}</td> */}
                        <td>{v.modDate}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    )
}