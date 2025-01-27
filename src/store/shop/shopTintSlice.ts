import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import {Burger} from '../../utils/common.ts';

export const shopMyBookSelector = (state: RootState): ShopState => state.shop;

export interface ShopState {
    totalCount: number;
    itemsCart: { product: Burger; quantity: number }[];
    burgers: Burger[];
}

const initialState: ShopState = {
    totalCount: 0,
    itemsCart: [],
    burgers: [],
};

const shopTintSlice = createSlice({
    name: 'shopMyBook',
    initialState,
    reducers: {
        resetProductToCart: (state) => {
            state.itemsCart = [];
            state.totalCount = 0;
        },
        addProductToCart: (state, action: PayloadAction<Burger>) => {
            const existingProduct = state.itemsCart.find(
                (item) => item.product.id === action.payload.id
            );

            if (existingProduct) {
                // Если продукт уже в корзине, увеличиваем количество
                existingProduct.quantity += 1;
            } else {
                // Если продукта нет в корзине, добавляем его
                state.itemsCart.push({ product: action.payload, quantity: 1 });
            }

            // Пересчитываем общую сумму
            state.totalCount += action.payload.price;
        },
        decreaseProductQuantityTint: (state, action: PayloadAction<number>) => {
            const product = state.itemsCart.find(
                (item) => item.product.id === action.payload
            );

            if (product) {
                product.quantity -= 1;
                state.totalCount -= product.product.price;

                // Если количество продукта достигает 0, удаляем его
                if (product.quantity <= 0) {
                    state.itemsCart = state.itemsCart.filter(
                        (item) => item.product.id !== action.payload
                    );
                }
            }
        },
        visibleBurgers: (state, action: PayloadAction<Burger[]>) => {
            state.burgers = action.payload;
        },
    },
});

export const shopSliceReducer = shopTintSlice.reducer;
export const {
    addProductToCart,
    resetProductToCart,
    decreaseProductQuantityTint,
    visibleBurgers,
} = shopTintSlice.actions;
