'use server'

import { extractCookie } from "@/app/component/util/extractToken";
import { cookies } from "next/headers";

export async function existUser(username: string): Promise<boolean | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/exists-username?username=${username}`)

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: boolean = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }
        console.log("existAdmin!!!" + JSON.stringify(data))

        return data
    } catch (error) {
        console.log("existUser err : " + error);
        return { status: 500 };
    }
}

export async function loginUser(user: IUser): Promise<any | { status: number }> {
    try {
        const bodys = {
            username: user.username,
            password: user.password,
        };
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/local`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodys),
        })

        // if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: any = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }

        console.log("loginAdmin : " + JSON.stringify(data))
        // console.log("cookies : " + cookies().get()?.value)

        
        if (response.status === 200) {
            const accToken = response.headers.getSetCookie()[0];
            const refreToken = response.headers.getSetCookie()[1];

            cookies().set({
                name: 'accessToken',
                value: extractCookie(accToken, 'accessToken'),
                path: '/',
                maxAge: Number(extractCookie(accToken, 'Max-Age')),
                expires: new Date(extractCookie(accToken, 'Expires')),
                sameSite: 'lax',
                httpOnly: false,
            });

            cookies().set({
                name: 'refreshToken',
                value: extractCookie(refreToken, 'refreshToken'),
                maxAge: Number(extractCookie(refreToken, 'Max-Age')),
                expires: new Date(extractCookie(refreToken, 'Expires')),
                path: '/',
                sameSite: 'lax',
                httpOnly: true
            });

        }

        return data
    } catch (error) {
        console.log("loginUser err : " + error);
        return { status: 500 };
    }
}


export async function refreshToken(): Promise<IAuthToken | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login?username=ggunAdmin0001&password=pO2(eO73)%@`)

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: IAuthToken = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }

        console.log("loginAdmin : " + JSON.stringify(data))
        // cookies().set('accessToken', data.access_token);
        // cookies().set('refreshToken', data.refreshToken);
        // cookies().set('id', data.id);
        return data
    } catch (error) {
        console.log("refreshToken err : " + error);
        return { status: 500 };
    }
}

export async function logoutUser(): Promise<any | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)

        // if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: any = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }

        cookies().delete('accessToken')
        cookies().delete('refreshToken')

        console.log("logoutAdmin : " + JSON.stringify(data))
        console.log("cookies : " + cookies().get('accessToken')?.value)

        return data
    } catch (error) {
        console.log(error, "logoutAdmin EERR!!!")
        return error
    }
}


export async function joinUser(user: IUser): Promise<any | { status: number }> {
    try {
        const bodys = {
            username: user.username,
            password: user.password,
            name: user.name,
            email: user.email,
            ssnF: user.ssnF,
            ssnS: user.ssnS,
            address: user.address,
        };
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/auth/join`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodys),
        })

        // if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: any = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }

        console.log("loginAdmin : " + JSON.stringify(data))



        return data
    } catch (error) {
        console.log("loginUser err : " + error);
        return { status: 500 };
    }
}


