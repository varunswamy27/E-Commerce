import SubCategory from "../models/subCategory.model";


// Fetch Sub Category
export const fetchSubCategory = (req, res) => {
    SubCategory.find({}, (err, data) => {
        if (err) {
            return res.status(400).json({
                message: "Cannot Find SubCategories",
                status: false,
            })
        }
        return res.status(200).json({
            message: "Your Sub Categories List",
            status: true,
            data: data,
        })
    }).populate("categoryId", "categoryName")
}


// Find by Category Id
export const fetchSubCategoryByCategory = (req, res) => {
    SubCategory.find({ "categoryId": req.params.id })
        .then(resp => {
            return res.status(200).json({
                message: "SubCategory List",
                status: true,
                data: resp
            })
        })
        .catch(err => {
            return res.status(422).json({
                message: "Failed To Find SubCategory",
                status: false,
                data: err,
            })
        })
}


// Create New Sub Category
export const createSubCategory = async (req, res) => {
    const { subCategoryName, subCategoryDescription, categoryId } = req.body;
    if (!subCategoryName) {
        return res.status(422).json({
            message: "Enter SubCategory",
            status: false,
        })
    }
    if (!subCategoryDescription) {
        return res.status(422).json({
            message: "Enter SubCategory Description",
            status: false,
        })
    }
    const subCategoryData = {
        subCategoryName: subCategoryName,
        subCategoryDescription: subCategoryDescription,
        categoryId: categoryId,
    }
    const duplicateSubCategory = await SubCategory.find({
        subCategoryName: subCategoryName
    })
        .then(resp => {
            if (resp.length !== 0) {
                return res.status(400).json({
                    message: "SubCategory Already Exists",
                    status: false,
                    data: subCategoryData,
                })
            }
            else {
                const insertCategory = SubCategory.create(subCategoryData)
                return res.status(200).json({
                    message: "SubCategory Successfully Created",
                    status: true,
                    data: subCategoryData,
                })
            }
        })
        .catch(err => {
            return res.status(422).json({
                message: "Failed To Create SubCategory",
                status: false,
                data: data,
            })
        })
}



// Update Category
export const updateSubCategory = (req, res) => {
    SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
        if (!req.body) {
            return res.status(400).json({
                message: "Enter SubCategory To Be Updated",
                status: false,
            })
        }
        if (err) {
            return res.status(400).json({
                message: "Problem Updating",
                status: false,
            })
        }
        return res.status(200).json({
            message: "Updated SubCategory",
            status: true,
            data: data,
        })
    })
}

// Delete SubCategory
export const deleteSubCategory = async (req, res) => {
    try {
        const removeSubCategory = await SubCategory.findByIdAndDelete(req.params.id);
        const removeProduct = await Product.deleteMany({ "subCategoryId": req.params.id })
        res.status(200).json({
            message: "SubCategory Deleted",
            status: true,
            data: { removeSubCategory, removeProduct }
        })
    } catch (error) {
        return res.status(400).json({
            message: "Cannot Delete SubCategory",
            status: false,
            data: error
        })
    }
}