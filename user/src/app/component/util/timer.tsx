'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Timer() {
    const [sec, setSec] = useState(60);
    const [minute, setMinute] = useState(30);

    const router = useRouter();
  
    useEffect(() => {

      const id = setInterval(() => {
        if(sec <= 0 ){
          setMinute((minute)=>minute-1);
          setSec(5);
        }else{
          setSec((sec) => sec - 1)
        }
      }, 1000);
      
      if(minute === 0 && sec == 0) {
        clearInterval(id);
        alert("로그인이 만료되었습니다.")
        router.push(`/login`);
      }

      
      return () => clearInterval(id);

    }, [sec,minute,router]);
  
    return (<div className="text-slate-400 text-sm">
      {minute==0 && sec==0 ?
      <div></div>
      : <div>남은시간 <span className="">{minute}:{sec}</span></div>
      }
      </div>);
  }
