import axios from "axios"

export default axios.create({
    baseURL: "https://memoriesbackend123.herokuapp.com/",
    withCredentials: true,
})