import axios from "axios";

const api=axios.create({
    baseURL:import.meta.env.VITE_BASE_URL
})
export const getproduct=async()=>{
    const res = await api.get("/products/")
    console.log("BASE URL:", import.meta.env.VITE_BASE_URL);
    // console.log("Fetched Products:", res.data);
    return res.data;
}