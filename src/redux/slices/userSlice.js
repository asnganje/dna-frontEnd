import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser, modifyUser, removeUser } from "../thunks/userThunk";

const person = {
    isLoading: false,
    isLoggedIn: false,
    isActive: false,
    data: [],
    bool: false,
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: person,
    extraReducers(builder) {
        builder.addCase(createUser.pending, (state)=> {
            state.isLoading = true;
        }),
        builder.addCase(createUser.fulfilled, (state)=> {
            state.isLoading = false;
            state.isActive = true;
        }),
        builder.addCase(createUser.rejected, (state, action)=> {
            state.error = action.payload
            state.isLoading = false;
        }),
        builder.addCase(loginUser.pending, (state)=> {
            state.isLoading = true;
        }),
        builder.addCase(loginUser.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.data.push(action.payload)
        }),
        builder.addCase(modifyUser.pending, (state)=> {
            state.isLoading = true
        }),
        builder.addCase(modifyUser.fulfilled, (state)=> {
            state.isLoading = false
            state.bool = true
        }),
        builder.addCase(modifyUser.rejected, (state)=> {
            state.isLoading = false
        }),
        builder.addCase(removeUser.pending, (state)=> {
            state.isLoading = false
        }),
        builder.addCase(removeUser.fulfilled, (state)=> {
            state.isLoading = false;
            state.isActive = true;
        }),
        builder.addCase(removeUser.rejected, (state)=> {
            state.isLoading = false;
        })
    }
})
export const userReducer = userSlice.reducer;