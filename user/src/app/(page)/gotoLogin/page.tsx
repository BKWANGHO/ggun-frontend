
import { WhiteLink } from "@/app/component/link/whiteLink";
import { WhiteBox } from "@/app/component/style/whiteBox";
import Link from "next/link";

export default function GotoLogin() {

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[70%] h-[320px] text-center">
            <WhiteBox style="">
                <div className="flex-col">
                    <h1 className="bold text-[60px]">!!!로그인이 필요합니다!!!</h1> <br />
                    <h1 className="bold text-[50px]">비회원 및 계좌미개설 고객님은 <br />확인할수 없는 페이지입니다.</h1>
                    <br />
                    <h4 className="bold text-[30px]">로그인해주세요.</h4> <br />
                    <Link className="w-full h-full" href='/login' > <WhiteBox>login</WhiteBox></Link> <br />
                </div>
            </WhiteBox>
            </div>
        </div>
    )
}