import { configureStore } from '@reduxjs/toolkit';
import CardReducer from "./index";

export default configureStore({
    reducer: {
        card: CardReducer,
    },
});

