import axios from "axios";

// const ROOT_URL = "http://localhost:3000/category";

export const getCategoryData = async (categories) => {

    return {
        type: "FETCH_CATEGORY",
        payload: categories
    }
}