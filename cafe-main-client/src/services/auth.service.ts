import axios from "axios"

import { URL } from "../constants/auth.url"
import { setToken } from "./storage.service";

export const login = async (data: any) => {
    try {
        const res = await axios.post(URL.LOGIN, data);
        if (res.data.access_token) {
            setToken(res.data)
        }
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const register = async (data: any) => {
    try {
        const res = await axios.post(URL.REGISTER, data);
        if (res.data.access_token) {
            setToken(res.data)
        }
        return res.data;
    } catch (err) {
        console.log(err);
    }
}