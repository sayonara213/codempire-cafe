import axios from "axios"
import { URL } from "../constants/auth.url"

export const login = async (data: any) => {
    try {
        const res = await axios.post(URL.LOGIN, data);
        if (res.data.access_token) {
            localStorage.setItem("user", JSON.stringify(res.data));
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
            localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const logout = () => {
    localStorage.removeItem("user");
}

export const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user.access_token;
}

export const getRole = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user.role;
}