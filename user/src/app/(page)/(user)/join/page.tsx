'use client'

import { NextPage } from "next";
import React, { useState } from "react";
import { MoveButton } from '@/app/component/button/buttons';
import { WhiteBox } from '@/app/component/style/whiteBox';
import { useJoinAction, useJoinStack } from '@/app/store/join.store';
import { characterInfo } from '@/app/common/enums/character';
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { joinUser, loginUser } from "@/app/service/users/users.api";

const AdminJoin: NextPage = () => {

    const submitInfo = useJoinAction();
    const userInfo = useJoinStack();
    const [btn, setBtn] = useState(0);
    const router = useRouter();

    
    // const joinApi = async () => await joinUser(userInfo)

    const handleForm = (e: any) => {
        submitInfo({ ...userInfo, [e.target.name]: e.target.value });
        console.log('userInfo : ' + JSON.stringify(userInfo))
    }

    const handleSubmit = (e: any) => {
        submitInfo({ ...userInfo, [e.target.name]: e.target.value });
        // joinApi()
        // .then((res: boolean | { status: number; }) => {
        //     res === true ? router.push(`/login`) :
        //     Swal.fire({
        //         icon: "error",
        //         title: "error",
        //         text: "다시 시도해주세요",
        //     })
        // })
        // .catch((error) => {
        //     console.log("login page err: ", error)
        // })
        // console.log('userInfo : ' + JSON.stringify(userInfo))
        router.push(`/login`)
    }

    return (
        <div className='flex w-full justify-center h-full'>
            <div className='w-[60%]'>
                <WhiteBox>
                    <div className='grid grid-cols-4'>
                        <div>회원가입</div>
                        <div className=' w-[90%] px-3 gap-3 col-span-3 space-y-3'>
                            <div className='flex gap-3'>ID : <input type="text" placeholder='ID' className='w-[200px]' name="username" onChange={handleForm} /></div>
                            <div className='flex gap-3'>password : <input type="password" placeholder='password' className='w-[200px]' name="password" onChange={handleForm} /></div>
                            <div className='flex gap-3'>이름 : <input type="text" placeholder='이름' className='w-[200px]' name="name" onChange={handleForm} /></div>
                            <div className='flex gap-3'>이메일 : <input type="text" placeholder='ggun@gmail.com' className='w-[200px]' name="email" onChange={handleForm} /></div>
                            <div className='flex gap-3'>성별 :
                                <div className="flex justify-center gap-4">
                                    <label className="flex content-center" id="input2"><input type="radio" name="ssnF" className="w-5" value='true' onClick={handleForm} defaultChecked />여자</label>
                                    <label className="flex content-center" id="input1"><input type="radio" name="ssnF" className="w-5" value='false' onClick={handleForm} />남자</label>
                                </div>
                            </div>
                            <div className='flex gap-3'>주소 : <input type="text" placeholder='주소' className='w-[200px]' name="address" onChange={handleForm} /></div>
                            <div className='flex gap-3'>핸드폰 : <input type="text" placeholder='010-0000-0000' className='w-[200px]' onChange={handleForm} /></div>
                            <div className='flex gap-3'>투자성향 : <input type="text" placeholder='투자성향' className='w-[200px]' onChange={handleForm} /></div>
                            <div className='flex gap-3'>투자성향 : <input type="text" placeholder='투자성향' className='w-[200px]' onChange={handleForm}  value={characterInfo[btn].title} hidden/></div>
                            <div className='flex gap-3'>
                                <div className="bg-red-400 h-[50px] w-[50px] rounded-full text-white" onClick={()=>setBtn(0)}></div>
                                <div className="bg-amber-400 h-[50px] w-[50px] rounded-full text-white" onClick={()=>setBtn(1)}></div>
                                <div className="bg-purple-400 h-[50px] w-[50px] rounded-full text-white" onClick={()=>setBtn(2)}></div>
                                <div className="bg-blue-400 h-[50px] w-[50px] rounded-full text-white" onClick={()=>setBtn(3)}></div>
                                <div className="bg-green-400 h-[50px] w-[50px] rounded-full text-white" onClick={()=>setBtn(4)}></div>
                            </div>
                                <div className='border w-full h-[200px] text-center bg-pebble-400 rounded-lg content-center'><span className={`text-lg text-bold text-[${characterInfo[btn].color}]`}>{characterInfo[btn].title}</span> <br /><br /> {characterInfo[btn].info} </div>
                            <div className='w-full  p-5 content-center'>
                                <div className='h-[30px] mb-3 w-full '><MoveButton style="w-full" click={handleSubmit}> 회원가입</MoveButton></div>
                            </div>
                        </div>

                    </div>
                </WhiteBox>



            </div>

        </div>
    )
};
export default AdminJoin;

