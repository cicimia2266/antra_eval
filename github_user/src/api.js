import axios from "axios";

const baseUrl = `https://api.github.com/users/`
export const userAPI = (username) =>{
    let path = `${baseUrl}${username}`;
    return axios.get(path);
}

//https://api.github.com/users/$%7BUSERNAME%7D

export const followingAPI = (username, pageIndex, pageSize) => {
    let path = `${baseUrl}${username}/following?page=${pageIndex}&per_page=${pageSize}`;
    return axios.get(path);
}

//https://api.github.com/users/$%7BUSERNAME%7D/following?page=${pageIndex}&per_page=${pageSize}