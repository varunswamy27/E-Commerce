import jwt from "jsonwebtoken";


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