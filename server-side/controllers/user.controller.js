import UserInfo from "../models/user.model";
import UserRole from "../models/userRole.model";
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


// FETCH ALL USERS
export const getUser = async (req, res) => {
  const userDetails = await UserInfo.find({}).populate("userRole")
    .then((data) => {
      if (data) {
        return res.status(200).json({
          message: "Your User List",
          status: true,
          data: data,
        })
      }
      else {
        return res.status(422).json({
          message: "Cannot Find User",
          status: false,
        })
      }

    })
    .catch(error => {
      return res.status(422).json({
        message: "Problem Finding User",
        status: false,
      })
    })
};


// CREATE A NEW USER/SIGNUP
export const createUser = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  if (!firstName || !lastName || !email || !password || !phoneNumber) {
    return res.status(400).json({
      message: "Enter all fields",
      status: false,
    })
  }
  try {
    const existingUser = await UserInfo.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        message: "User Email Already Exist",
        status: false,
      })
    }
    else {
      const hashedPassword = await bycrypt.hash(password, 5);
      let userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        phoneNumber: phoneNumber,
      };
      const result = await UserInfo.create(userData);
      return res.status(200).json({
        message: "SignUp Successful",
        result,
        status: true,
      });
    }
  }
  catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
      status: false,
    })
  }
};


// LOGIN USER
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserInfo.findOne({ email })
    if (!existingUser) {
      return res.status(404).json({
        message: "User Doesn't Exist",
        status: false,
      })
    }
    // const isPasswordCorrect = await UserInfo.findOne({ password })
    const isPasswordCorrect = await bycrypt.compare(password, existingUser.password)
    if (!isPasswordCorrect) {
      return res.status(404).json({
        message: "Invalid Credentials",
        status: false,
      })
    }
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', {})
    return res.status(200).json({
      message: "Login Successful",
      data: existingUser,
      status: true,
      token: token
    })
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
      status: false,
    })
  }
}


// USERROLE FETCH
export const getRoles = async (req, res) => {
  const userRoleDetails = await UserRole.find({})
    .then((data) => {
      if (data) {
        return res.status(200).json({
          message: "Your User Role List",
          status: true,
          data: data,
        })
      }
      else {
        return res.status(422).json({
          message: "Cannot Find UserRole",
          status: false,
        })
      }

    })
    .catch(error => {
      return res.status(422).json({
        message: "Problem Finding User Role",
        status: false,
      })
    })
}

export const createUserRole = async (req, res) => {
  const createUserRole = await UserRole.create(req.body)
    .then(resp => {
      return res.status(200).json({
        message: "UserRole Successfully Created",
        status: true,
        data: createUserRole,
      })
        .catch(err => {
          return res.status(422).json({
            message: "Failed To Create UserRole",
            status: false,
            data: data,
          })
        })
    })
}