import { create } from 'zustand'

interface NewsState {
    data: INews[],
    fetchNews: () => Promise<void>,
    setNews: (data: INews[]) => void,

}

const useNewsStore = create<NewsState>()((set, get) => ({
    data: [],
    fetchNews: async () => {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/news/list`);
        // if (!response.ok) {
        //     throw new Error('Failed to fetch news');
        // }
        // const newsData: INews[] = await response.json()
        // get().setNews(newsData);
        // console.log('News fetched',newsData)
    },
    setNews: (data: INews[]) => set((state) => ({ ...state, data })),

}))

export const useNewsFetch = () => useNewsStore((store) => store.fetchNews)
export const useNewsStack = () => useNewsStore((store) => store.data)
export const useNewsState = () => useNewsStore.getState();
