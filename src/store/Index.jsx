import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./slices/articles.slice";
import clientsProductsSlice from "./slices/clientsProducts.slice";
import isLoadingSlice from "./slices/isLoading.slice";



export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    clientsProducts: clientsProductsSlice,
    articles: articlesSlice
  }
});
