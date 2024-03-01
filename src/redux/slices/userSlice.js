import { createSlice } from "@reduxjs/toolkit";

const person = {
    isLoading: false,
    isLoggedIn: false,
    isActive: false,
    data: []
}

const userSlice = createSlice({
    name: 'user',
    initialState: person,
    extraReducers(builder) {
        builder.addCase()
    }
})

export const userReducer = userSlice.reducer;