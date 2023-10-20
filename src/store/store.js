import { configureStore } from "@reduxjs/toolkit";
import global_items from "./slices/global";


const store = configureStore({

    reducer: {
        globalItem: global_items.reducer,
    },
});


export default store;