import { create } from 'zustand'

interface ChatState {
    data: IChat,
    action:{
        update: (data: IChat) => void,
    }
}

const useChatStore = create<ChatState>()((set) => ({
    data: {id:'', roomId:''},
    action: {
        update: (data: IChat) => set({ data }),
    }
}))

export const useChatAction = () => useChatStore((store) => store.action)
export const useChatStack = () => useChatStore((store) => store.data)
export const useChatState = () => useChatStore.getState();
