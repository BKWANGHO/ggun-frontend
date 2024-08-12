'use client'
import { fetchNews } from "@/app/service/news/news.api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image"

export default function NewsTopic(){

  const fetchData= async (): Promise<INews[]> => {
    const response = await fetchNews()
    if ('status' in response) {
        throw new Error(`Error: ${response.status}`);}
    return response;
}

  const { data } = useQuery<INews[]>(
    {
        queryKey: ["news"],
        queryFn : fetchData,
        // placeholderData: newsDummy,
    }
);
    
    return(
        <div className="text-center grid grid-cols-5 gap-3">
        {data && data.length > 0 &&data.slice(0,5).map((v: INews, i: any) =>
            <ul key={i} className="border text-center text-black hover:text-gray-500 hover:shadow-lg hover:border rounded-lg">
                <li className="flex justify-center h-[60%]">
                  <Image unoptimized src={v.imgSrc} height={150} width={300} alt={v.title} className="rounded-t-lg" />
                </li>
                <li className="p-2 h-[30%] ">{v.title}</li>
                {/* <li className="text-left text-gray-400 h-[10%]">{i.id}분전</li> */}
              </ul>
            )}
        </div>
    )
}