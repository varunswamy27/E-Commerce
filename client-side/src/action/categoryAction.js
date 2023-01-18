import axios from "axios";

const ROOT_URL = "http://localhost:3000/category";

export const getCategoryData = async () => {

    const request = await axios.get(ROOT_URL)
    const res = await request.status(200).json()
    return{
        type: "FETCH_CATEGORY",
        payload: res
    }
}