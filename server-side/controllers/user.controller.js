import UserInfo from "../models/user.model";

export const getUser = async (req, res) => {
  const userDetails = await UserInfo.find({}, function (error, data) {
    if (error) {
      return res.status(422).json({
        message: "User Not Found",
        status: false,
      });
    }
    return res.status(200).json({
      message: "Your User Info",
      data: data,
      status: true,
    });
  });
};

// export const createUser = async (req, res) => {
//   const { firstName, lastName, email, password, phoneNumber } = req.body;
//   let userData = {
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     password: password,
//     phoneNumber: phoneNumber,
//   };
//   let userInfo = await UserInfo.create(userData, function (err, data) {
//     if (err) {
//       return res.status(500).json({
//         message: "Cannot Add User",
//         data: data,
//         status: false,
//       });
//     }
//     return res.status(200).json({
//       message: "New User Added",
//       data: data,
//       status: true,
//     });
//   });
// };


export const createUser = async (req, res) => {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    let userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    };
    let userInfo = await UserInfo.find(userData);
    if(userInfo){
        return res.status(422).json({
            message:"User Already Exist",
            status: false,
        })
    }
    else{
        let userCreate = await UserInfo.create(userData);
        return res.status(200).json({
            message: "Added New User",
            data: userCreate,
            status: true,
        })
    }
  };
