import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import {Product} from '../../utils/commonLists.ts';

export const shopMyBookSelector = (state: RootState): ShopState => state.shop;

export interface ShopState {
    totalCount: number;
    itemBasket: { product: Product; quantity: number }[];
    itemFavorites: { product: Product; quantity: number }[];
    items: Product[];
    events: any;
    enabledApi: boolean | null;
    path: string;
}

const initialState: ShopState = {
    totalCount: 0,
    itemBasket: [],
    itemFavorites: [],
    items: [],
    events: [],
    enabledApi: null,
    path: '',
};

const shopSliceMyBook = createSlice({
    name: 'shopMyBook',
    initialState,
    reducers: {
        resetProductToBasketMyBook: (state) => {
            state.itemBasket = [];
            state.totalCount = 0;
        },
        addProductToBasketMyBook: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.itemBasket.find(
                (item) => item.product.id === action.payload.id
            );

            if (existingProduct) {
                // Если продукт уже в корзине, увеличиваем количество
                existingProduct.quantity += 1;
            } else {
                // Если продукта нет в корзине, добавляем его
                state.itemBasket.push({ product: action.payload, quantity: 1 });
            }

            // Пересчитываем общую сумму
            state.totalCount += action.payload.price;
        },
        decreaseProductQuantityMyBook: (state, action: PayloadAction<number>) => {
            const product = state.itemBasket.find(
                (item) => item.product.id === action.payload
            );

            if (product) {
                product.quantity -= 1;
                state.totalCount -= product.product.price;

                // Если количество продукта достигает 0, удаляем его
                if (product.quantity <= 0) {
                    state.itemBasket = state.itemBasket.filter(
                        (item) => item.product.id !== action.payload
                    );
                }
            }
        },
        visibleItemsMyBook: (state, action: PayloadAction<Product[]>) => {
            state.items = action.payload;
        },
    },
});

export const shopSliceReducer = shopSliceMyBook.reducer;
export const {
    addProductToBasketMyBook,
    resetProductToBasketMyBook,
    decreaseProductQuantityMyBook,
    visibleItemsMyBook,
} = shopSliceMyBook.actions;
