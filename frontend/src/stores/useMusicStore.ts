import { axiosInstance } from '@/lib/axios';
import { create } from 'zustand';
import { Album, Song } from "@/types";

interface MusicStore {
    songs: Song[];
    albums: Album[];
    isLoading: boolean;
    error: string | null;
    currentAlbum: Album | null;
    fetchAlbums: () => Promise<void>;
    fetchAlbumById: (id: string) => Promise<void>;
}

export const useMusicStore = create<MusicStore>((set) => ({
    albums: [],
    songs: [],
    isLoading: false,
    error: null,
    currentAlbum: null,
    fetchAlbums: async () => {
        set({ isLoading: true, error: null });

        try {
            const response = await axiosInstance.get("/albums");
            set({ albums: response.data as Album[] });
        } catch (error: any) {
            set({ error: error.response?.data?.message || "Error fetching albums" });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchAlbumById: async (id: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get(`/albums/${id}`);
            set({ currentAlbum: response.data as Album });
        } catch (error: any) {
            set({ error: error.response?.data?.message || "Error fetching album by ID" });
        } finally {
            set({ isLoading: false });
        }
    }
}));
