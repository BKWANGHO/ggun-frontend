
import BarChart from "../chart/askPriceChart";
import { WhiteBox } from "../style/whiteBox";
import { useQuery } from "@tanstack/react-query";
import { fetchKisAuth, fetchKisSection } from "@/app/service/kis/kis.api";
import { cookies } from "next/headers";

export default function TransJisu() {


    // const fetchNews = useNewsFetch();
    // const currentNews = useNewsStack();
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       await fetchNews();
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
  
    //   fetchData();
    // }, [fetchNews]);

    // // 데이터 패칭 함수 
    // const getUserData(userId) = () => {
    //     return fetch(`/api/user/${userId}`).then((response) => response.json());
    //   }

    //   const UserProfile = ({ userId }) => {
    //       // useQuery 를 사용하여 데이터를 가져옵니다. ['user', userId] 는 쿼리 키를 의미합니다.
    //     const { data, isError, error, isLoading } = useQuery(['user', userId], () => fetchUserData(userId));


    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="w-[80%] h-[60%] grid grid-cols-2  text-center gap-2">
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">구리<hr /></div>
                        {/* <div className=""><BarChart /></div> */}
                    </div>
                </WhiteBox>
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">금<hr /></div>
                    </div>
                </WhiteBox>
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">희토류<hr /></div>
                    </div>
                </WhiteBox>
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">반도체<hr /></div>
                    </div>
                </WhiteBox>
            </div>
        </div >
    )

}