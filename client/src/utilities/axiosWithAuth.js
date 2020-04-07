import axios from "axios";

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: "http://localhost:5000/api/",
        headers: {authorization: localStorage.getItem("token")}
    })
}