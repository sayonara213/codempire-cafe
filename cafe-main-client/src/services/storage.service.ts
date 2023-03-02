export const removeToken = () => {
    localStorage.removeItem("user");
}

export const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user.access_token;
}

export const setToken = (user: any) => {
    localStorage.setItem("user", JSON.stringify(user));
}

export const getRole = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user.role;
}