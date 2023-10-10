import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../models";
import { dataUserType } from "../models";

export const authUser = createAsyncThunk(
    'auth/authUser',
    async function({username, password}:UserType, {rejectWithValue, dispatch}) {
        try {
            const user:UserType = {
                "username": username,
                "password": password
            }

            const response = await fetch('http://46.138.247.234:8000/api/auth/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            console.log(response)

            if (!response.ok) {
                throw new Error('Не удалось добавить пользователя')
            }


            const data:dataUserType = await response.json()
            dispatch(auth(data.token))
            
        } catch (error:any) {
            return rejectWithValue(error.message)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: ''
    },
    reducers: {
        auth(state, action:PayloadAction<any>) {
            state.token = action.payload
        }
    }
})


export const { auth } = authSlice.actions
export default authSlice.reducer