import { create } from 'zustand'

interface JoinState {
    data: IUser,
    update: (data: IUser) => void,
}

const useJoinStore = create<JoinState>()((set) => ({
    data: {username:'', password: ''},
    update : ()=> set( (state) => ({ data:{ ...state.data, ...state } }) ),
    // update: (data: IUser[]) => set({ data }),
}))

export const useJoinAction = () => useJoinStore((store) => store.update)
export const useJoinStack = () => useJoinStore((store) => store.data)
export const useJoinState = () => useJoinStore.getState();
