import axios from "axios";

export const userApi = (username) => {
    const baseUrl = `https://api.github.com/users/`;
    let path = `${baseUrl}${username}`;
    return axios.get(path)
}

export const followingApi = (username, pageIndex, pageSize)=>{
    const baseUrl = `https://api.github.com/users/`;
    let path = `${baseUrl}${username}/following?page=${pageIndex}&per_page=${pageSize}`;
    return axios.get(path)}

