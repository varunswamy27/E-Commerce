import Category from "../models/category.model";


// Find Category
export const getCategory = async (req, res) => {
    const findCategory = await Category.find({}, (error, data) => {
        if (error) {
            return res.status(422).json({
                message: "No Categories Found",
                status: false,
            })
        }
        return res.status(200).json({
            message: "Your Categories List",
            status: true,
            data: data,
        })
    })
}

// Create A New Category
export const createCategory = async (req, res) => {
    const { categoryName, categoryDescription } = req.body;
    if (!categoryName) {
        return res.status(422).json({
            message: "Enter Category",
            status: false,
        })
    }
    if (!categoryDescription) {
        return res.status(422).json({
            message: "Enter Category Description",
            status: false,
        })
    }
    const categoryData = {
        categoryName: categoryName,
        categoryDescription: categoryDescription,
    }
    const duplicateCategory = await Category.find({
        categoryName: categoryName
    })
        .then(resp => {
            if (resp.length !== 0) {
                return res.status(400).json({
                    message: "Category Already Exists",
                    status: false,
                    data: categoryData,
                })
            }
            else {
                const insertCategory = Category.create(categoryData)
                return res.status(200).json({
                    message: "Category Successfully Created",
                    status: true,
                    data: categoryData,
                })
            }
        })
        .catch(err => {
            return res.status(422).json({
                message: "Failed To Create User",
                status: false,
                data: data,
            })
        })
}

