import jwt from "jsonwebtoken";
import UserInfo from "../models/user.model";


export const isAuthorized = (req, res, next) => {
	if (req.headers && req.headers.authorization) {
		var parts = req.headers.authorization.split(" ");
		if (parts.length == 2) {
			var scheme = parts[0];
			var credentials = parts[1];
			var token = credentials

			var decoded = jwt.verify(token, 'test');
			console.log(decoded, 'decoded');
			if (decoded && decoded.id) {
				req.user = decoded;
				next()
			} else {
				return res.json(401, { err: "Invalid token" });
			}
		} else {
			return res.json(401, { err: "Format is Authorization: Bearer [token]" });
		}
	} else {
		return res.status(401).json({
			status: false,
			message: 'Authorization token is required'
		})
	}
}


// export const auth = async (req, res, next) => {
//     try {
//         const token = req.headers.Authorization.split(" ")[1];
//         console.log(token);
//         const isCustomAuth = token.length < 500;
//         let decodedData;
//         if (token) {
//             decodedData = jwt.verify(token, 'test');

//             req.userId = decodedData?.id;
//         }
//         next()
//     } catch (error) {
//         console.log(error)
//     }
// }


// export const isAdmin = async (req, res, next) => {
//     req.user = JSON.parse(localStorage.getItem('profile'));
//     if(user?.result?.isAdmin === false){
//         return res.status(401).json({
//             message: "Isnt Admin"
//         })
//     }
// }