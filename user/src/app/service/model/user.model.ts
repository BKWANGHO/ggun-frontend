interface IUser {
    id?: number,
    username?: string,
    password?: string,
    name?: string,
    email?: string,
    ssnF?: string,
    ssnS?: String,
    address?: string,
    phone?: string,
    color?: String,
    investmentPropensity?: string
}

interface IAuthToken {
    id?: number,
    accessToken?: string,
    refreshToken?: string,
}