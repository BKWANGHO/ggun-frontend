// 로그인시 소셜로그인 3개 가능 -> 이미지 세개로 ㅇㅋ
// 소셜로그인시 비회원이면 join으로 넘어가게 되어있음. 백단에서 컨트롤
// 이때 이메일을 string으로 전달해주기 때문에 
// 소셜로그인->조인으로 넘어왔을때는 이메일이 readonly로 입력되어 있게 해달라고 함

import { WhiteBox } from "@/app/component/style/whiteBox";

// 조인에서 회원가입할때
// 이메일 입력후 이메일 확인하기 버튼 필요. 네이버/카카오/구글로 이메일 확인함
// 조인 오오스로 작동함

export default function Authpage(){
    
    return (
        <div className="w-full h-full">
            <div className="w-[85%]">

                <WhiteBox>
                    <div>Authpage</div>
                </WhiteBox>
            </div>
        </div>
    )
}