export const AcountMenus: IMenu[] = [
    { id: 1, title: "보유주식 조회", href: `/asset` },
    { id: 4, title: "CMA", href: `/asset/account/histories/1` },
    { id: 5, title: "AI", href: `/asset/ai` },
    { id: 3, title: "IPO 달력", href: `/asset/IPO` },
    { id: 6, title: "계좌이체", href: `/asset/charge` },
]

export const CmaMenus: IMenu[] = [
    { id: 2, title: "거래내역", href: `/asset/account/histories/1` },
    // { id: 4, title: "CMA 보유주식", href: `/asset/account` },
]

export const AiMenus: IMenu[] = [
    // { id: 1, title: "AI 거래내역", href: `/asset/ai/histories/1` },
    { id: 2, title: "AI 계좌 있음", href: `/asset/ai/existTrue` },
    { id: 3, title: "AI 계좌 없음", href: `/asset/ai/existFalse` },
    // { id: 4, title: "AI 보유주식", href: `/asset/ai` },
]