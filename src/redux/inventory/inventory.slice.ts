import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { useSelector } from "react-redux"
import { fakeProducts } from "@/mock/fakeProducts";
import { Status } from "@/utils/statusLabel";

interface ProductProps {
    id: number;
    productName: string;
    productPrice: number;
    productQuantity: number;
    expiringDate: string;
    availability: Status;
}

interface inventoryProps {
    filter: string,
    products: ProductProps[]
}

const initialState:inventoryProps = {
    filter: 'all',
    products: fakeProducts
}

const inventorySlice = createSlice({
    name: 'inventory',
    initialState: initialState,
    reducers: {
        setUpdateFilter(state, action) {
            state.filter = action.payload
        }
    }
})

 export function useInventorySlice() {
    const state = useSelector(({inventory}:RootState) => inventory)

    return {...state, ...inventorySlice.actions}
}

export default inventorySlice.reducer

export const inventoryActions = inventorySlice.actions