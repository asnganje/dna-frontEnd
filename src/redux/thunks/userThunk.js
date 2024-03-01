import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/dna"

const createUser = createAsyncThunk('user/createUser', async (user)=> {
    const url = `${baseUrl}/signup`
    try {
       await axios.post(url, user)
    } catch (error) {
        throw new Error(`User could not be created due to ${error}`)
    }
})

const loginUser = createAsyncThunk('user/loginUser', async (user, {rejectWithValue})=> {
    try {
        const url = `${baseUrl}/login`
        const { email, id, authenticationNumber} = user;
        let response
        if (email && authenticationNumber) {
            response = await axios.post(url, { email, authenticationNumber });            
        }

        if (id && authenticationNumber) {
            response = await axios.post(url, { id, authenticationNumber });            
        }

        if (response.data) {
            return response.data;
        } else {
            throw new Error(`Could not login user`);
        }

    } catch (error) {
        return rejectWithValue(error.response.data.msg);
    }
})

const modifyUser = createAsyncThunk('products/updateProduct', async(user)=> {

    const {id, ...rest} = user
    const url = `${baseUrl}/user?id=${id}`
    try {
        const response = await axios.patch(url, rest)
        return response.data.msg
    } catch (error) {
        throw new Error(`User could not be created due to ${error}`) 
    }
})

const removeUser = createAsyncThunk('products/removeProduct', async(userId)=> {
    const url = `${baseUrl}/user?id=${userId}`
    try {
        await axios.delete(url)
        return userId
    } catch (error) {
        throw new Error(`User could not be created due to ${error}`) 
    }
})

export {createUser, loginUser, modifyUser, removeUser}
