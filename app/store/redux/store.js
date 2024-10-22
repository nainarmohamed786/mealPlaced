import { configureStore } from '@reduxjs/toolkit';
import FavouriteRedux from './FavouriteRedux'


export const store = configureStore({
    reducer: {
        favouritemeal: FavouriteRedux
    }
})