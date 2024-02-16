import axios from 'axios';
import { create } from 'zustand';

export const useDolaresStore = create((set) => ({
    dolares: [],
    getDolares: async () => {
        const { data } = await axios.get('https://dolarapi.com/v1/dolares')
        set({ dolares: data })
    }
}));