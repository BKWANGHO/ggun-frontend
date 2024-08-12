'use server'

export const allAdmins = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/list`)
        const data = await response.json();
        console.log("allAdmins!!!"+ JSON.stringify(data[0]))
        return data
    } catch (error) {
        console.log("allAdmins err : " + error
        )
    }
}

export const findAdminById = async (id: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/detail?id=${id}`)
        const data = await response.json();
        console.log("findAdminById : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("findAdminById EERR!!!" + error)
        return error
    }
}

export const deleteAdmin = async (id: string) => {
    const idd = parseInt(id)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/delete?id=${idd}`)
        const data = await response.json();
        console.log("deleteAdmin : " + JSON.stringify(data))
    } catch (error) {
        console.log("deleteAdmin EERR!!!" + error)
        return error
    }
}


export const updateAdmin = async (admin: IAdmin) => {
    // console.log("updateAdmin : " + JSON.stringify(article))
    const { id, password, name, number, department, position, job, email, phone } = admin || {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/modify`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                password: password,
                name: name,
                enpNum:number,
                department:department,
                position: position,
                job: job,
                enpEmail: email,
                phone: phone
            })
        })
        const data = await response.json();
        console.log("updateAdmin : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("updateAdmin EERR!!!" + error)
        return error
    }
}


// export const joinAdminAPI = async (admin: IAdmin) => {
//     try {
//         const response = await instance().post('/admins/save', admin)
//         console.log("JoinAdminAPI : " + response)
//         return response
//     } catch (error) {
//         console.log("JoinAdminAPI EERR!!!" + error)
//         return error
//     }
// }