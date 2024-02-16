import axios from 'axios';
import { create } from 'zustand';

export const useDolaresStore = create((set) => ({
    dolares: [],
    getDolares: async () => {
        const { data } = await axios.get('https://dolarapi.com/v1/dolares')
        set({ dolares: data })
    }
}));

export const useMoviesStore = create((set) => ({
    movies: [], 
    getMovies: async () => {
        const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=54ff70d898f1d0133d19f5ab82223a1d')
        set({ movies: data.results})
    }
}))