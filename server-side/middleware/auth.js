import jwt from "jsonwebtoken";
import UserInfo from "../models/user.model";


export const auth = async (req, res, next) => {
    try {
        const token = req.headers.Authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;
        if (token) {
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        }
        next()
    } catch (error) {
        console.log(error)
    }
}


export const isAdmin = async (req, res, next) => {
    req.user = JSON.parse(localStorage.getItem('profile'));
    if(user?.result?.isAdmin === false){
        return res.status(401).json({
            message: "Isnt Admin"
        })
    }
}