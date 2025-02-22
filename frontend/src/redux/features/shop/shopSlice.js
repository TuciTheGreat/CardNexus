import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    products: [],
    checked: [],
    radio: [],
    cardtypeCheckboxes: {},
    checkedCardtype: [],
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setChecked: (state, action) => {
            state.checked = action.payload
        },
        setRadio: (state, action) => {
            state.radio = action.payload
        },
        setSelectedCardtype: (state, action) => {
            state.selectedCardtype = action.payload
        },
    },
});

export const {
    setCategories,
    setProducts,
    setChecked,
    setRadio,
    setSelectedCardtype,
} = shopSlice.actions;

export default shopSlice.reducer;