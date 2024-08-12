'use client'

import { useQuery } from "@tanstack/react-query";
import AiExistFalse from "./existFalse/page";
import AiExistTrue from "./existTrue/page";
import { extractTokenId } from "@/app/component/util/jwtDecode";
import { allAiAccount } from "@/app/service/asset/ai.api";

export default function aiExist() {
        
        const jwtTokenId = extractTokenId();
        
        const fetchAiAccListData = async (): Promise<IAccount[]> => {
            const response = await allAiAccount(jwtTokenId+'');
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response as IAccount[];
        }
        
        const { data: aiAccList } = useQuery<IAccount[]>(
            {
                queryKey: ["aiAccList"],
                queryFn: fetchAiAccListData,
            }
        );


    return (
        <div className="w-full h-full flex justify-center">
            {aiAccList == null ?
                <div><AiExistFalse /></div>
                : <div><AiExistTrue /></div>
            }
        </div>
    )
}