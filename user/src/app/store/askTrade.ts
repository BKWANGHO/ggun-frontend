import { create } from 'zustand'

interface askTradeState {
    stack  : {
        data: IAskTrade,
        total : number,
    }
    action : {
        update: (data: IAskTrade) => void,
        pdQtyIncrease: () => void,
        pdQtyDecrease: () => void,
        submitTotal : ()=> void,
        currentPrice : () => void,
    }
}

const useaskTradeStore = create<askTradeState>()((set, get) => ({
    stack  : {
    data: {
        pdno: '',
        prdtName: '',
        pdQty: 0,
        avgPrvs: 0,
        tradeType: '',
        account: 0,
        acpw: 0,
        sllBuyDvsnCd: 1,
        ordDvsnCd: 2,
    },
    total : 0,
},
    action : {
        update: (data: IAskTrade) => {
            set((state) => ({ stack: {...state.stack, data }}))
            console.log("set : ", data)
        },
        pdQtyIncrease: () => {
            const currentData = get().stack.data;
            set((state) => ({
                stack: {
                    ...state.stack,
                    data: { ...currentData, pdQty: currentData.pdQty + 1 }, 
                    total: currentData.avgPrvs * currentData.pdQty }
            }));
            console.log("pdQtyIncrease : ", currentData)
        },
        pdQtyDecrease: () => {
            const currentData = get().stack.data;
            set((state) => ({
                stack: {
                    ...state.stack,
                    data: { ...currentData, pdQty: currentData.pdQty - 1 }, 
                    total: currentData.avgPrvs * currentData.pdQty }
            }));
            console.log("pdQtyIncrease : ", currentData)
        },
        submitTotal: () => {
            const currentData = get().stack.data;
            set((state) => ({
                stack: {
                    ...state.stack,
                    data: { ...currentData, avgPrvs: state.stack.total }, 
                    total: 0
                }
            }));
            console.log("pdQtyDecrease : ", currentData)
        },
        currentPrice : ()=>{
            set((state) => {
                const updatedData = { ...state.stack.data }; // avgPrvs만 업데이트
                console.log("set : ", updatedData); // 업데이트된 data 출력
                return { stack: { ...state.stack, data: updatedData } }; // 새로운 상태 반환
            });
        }
    }
}))

export const useaskTradeAction = () => useaskTradeStore((store) => store.action)
export const useaskTradeStack = () => useaskTradeStore((store) => store.stack)
export const useaskTradeState = () => useaskTradeStore.getState();
