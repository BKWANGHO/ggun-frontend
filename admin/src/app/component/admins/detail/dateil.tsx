'use client'
import { BrownButton } from '@/app/common/button/MoveButton';
import { BrownLink } from '@/app/common/link/brawnLink';
import { WhiteLink } from '@/app/common/link/whiteLink';
import { findAdminById, updateAdmin } from '@/app/service/admin/admin.api';
import { useAdminAction, useAdminStack } from '@/app/store/admin.store';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function AdminsDetail({ props }: { props: string }) {

    const router = useRouter();

    const fetchData = async (): Promise<IAdmin> => {
        const response = await findAdminById(props)
        if ('status' in response) {
            throw new Error(`Error: ${response.status}`);
        }
        return response;
    }

    const { data } = useQuery<IAdmin>(
        {
            queryKey: ["adminDetail"],
            queryFn: fetchData,
        }
    );

    const saveAdmin = async () => await updateAdmin(stackAdmin)
            .then((res: boolean | { status: number; }) => {
                actionAdmin.clean()
                router.push('/admins/list')
            })
            .catch((error) => {
                console.log("saveAdmin page err: ", error)
            })



    const actionAdmin = useAdminAction();
    const stackAdmin = useAdminStack();

    const handleAamin = (e: any) => {
        actionAdmin.update({ ...stackAdmin, [e.target.name]: e.target.value });
        console.log('handleAamin : ' + JSON.stringify(stackAdmin))

    }

    return (
        <div>
            <div className='w-full px-3 grid grid-cols-6 gap-3'>
                <div className=' '>사원명 :</div>
                <div className=' '><input type="text" placeholder={data?.name} name='name' defaultValue={data?.name} onChange={handleAamin} /></div>
                <div className=''>사원번호 : </div>
                <div className=' '><input type="text" placeholder={data?.number} name='number' onChange={handleAamin} /></div>
                <div className=''>부서 : </div>
                <div className=' '><input type="text" placeholder={data?.department} name='department' onChange={handleAamin} /></div>
                <div className=''>직책 : </div>
                <div className=' '><input type="text" placeholder={data?.position} name='position' onChange={handleAamin} /></div>
                <div className=''>직무 : </div>
                <div className=' '><input type="text" placeholder={data?.job} name='job' onChange={handleAamin} /></div>
                <div className=''>이메일 : </div>
                <div className=' '><input type="text" placeholder={data?.email} name='email' onChange={handleAamin} /></div>
                <div className=''>핸드폰 : </div>
                <div className=' '><input type="text" placeholder={data?.phone} name='phone' onChange={handleAamin} /></div>
                {/* <div className=''>비밀번호 : </div>
                <div className=' '><input type="text" placeholder={props.password} /></div> */}
                <div className=''>권한 : </div>
                <div className=' '><input type="text" placeholder={data?.role} name='role' onChange={handleAamin} /></div>
            </div>
            <div className=' h-[100px] p-5 content-center justify-center space-y-3'>
                <BrownButton style="w-[30px]" click={() => saveAdmin}>정보수정</BrownButton>
                <WhiteLink click={`/admins/list/1`}>돌아가기</WhiteLink> 
            </div>
        </div>
    )
}
