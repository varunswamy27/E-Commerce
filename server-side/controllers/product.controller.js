import Product from "../models/product.model";
import multer from 'multer';


// Image Upload 
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public')
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '_' + Date.now() + file.originalname)
    }
})


// Fetching Product 
export const getProduct = async (req, res) => {
    const fetchProducts = await Product.find({}).populate("categoryId subCategoryId", "categoryName subCategoryName")
        .then((data) => {
            if (data) {
                return res.status(200).json({
                    message: "Your Products List",
                    status: true,
                    data: data,
                })
            }
            else {
                return res.status(422).json({
                    message: "Cannot Find Products",
                    status: false,
                })
            }

        })
        .catch(error => {
            return res.status(422).json({
                message: "Problem Finding Products",
                status: false,
            })
        })
}


//Find One Product
export const getOneProduct = async (req, res) => {
    const fetchProducts = await Product.findById(req.params.id).populate("categoryId subCategoryId", "categoryName subCategoryName")
        .then((data) => {
            if (data) {
                return res.status(200).json({
                    message: "Your Product",
                    status: true,
                    data: data,
                })
            }
            else {
                return res.status(422).json({
                    message: "Cannot Find Product",
                    status: false,
                })
            }

        })
        .catch(error => {
            return res.status(422).json({
                message: "Problem Finding Product",
                status: false,
            })
        })
}


// Create New Product
// export const createProduct = async (req, res) => {
//     const { productName, productDescription, productShortDescription, productPrice, productPicture, categoryId, subCategoryId } = req.body;
//     if (!productName) {
//         return res.status(422).json({
//             message: "Enter Product Name",
//             status: false,
//         })
//     }
//     if (!productDescription) {
//         return res.status(422).json({
//             message: "Enter Product Description",
//             status: false,
//         })
//     }
//     if (!productShortDescription) {
//         return res.status(422).json({
//             message: "Enter Product Short-Description",
//             status: false,
//         })
//     }
//     if (!productPrice) {
//         return res.status(422).json({
//             message: "Enter Product Price",
//             status: false,
//         })
//     }
//     // if (!productPicture) {
//     //     return res.status(422).json({
//     //         message: "Enter SubCategory Description",
//     //         status: false,
//     //     })
//     // }
//     const productData = {
//         productName: productName,
//         productDescription: productDescription,
//         productShortDescription: productShortDescription,
//         productPrice: productPrice,
//         productPicture: productPicture,
//         categoryId: categoryId,
//         subCategoryId: subCategoryId,
//     }
//     const duplicateProduct = await Product.find({
//         productName: productName
//     })
//         .then(resp => {
//             if (resp.length !== 0) {
//                 return res.status(400).json({
//                     message: "Product Already Exists",
//                     status: false,
//                     data: productData,
//                 })
//             }
//             else {
//                 const insertProduct = Product.create(productData)
//                 return res.status(200).json({
//                     message: "Product Successfully Created",
//                     status: true,
//                     data: productData,
//                 })
//             }
//         })
//         .catch(err => {
//             return res.status(422).json({
//                 message: "Failed To Create Product",
//                 status: false,
//                 data: data,
//             })
//         })
// }
export const createProduct = async (req, res) => {
    const uploadImages = multer({ storage: storage }).single('public');
    uploadImages(req, res, async function (err) {

        const { productName, productDescription, productShortDescription, productPrice, categoryId, subCategoryId } = req.body;
        if (!productName) {
            return res.status(422).json({
                message: "Enter Product Name",
                status: false,
            })
        }
        if (!productDescription) {
            return res.status(422).json({
                message: "Enter Product Description",
                status: false,
            })
        }
        if (!productShortDescription) {
            return res.status(422).json({
                message: "Enter Product Short-Description",
                status: false,
            })
        }
        if (!productPrice) {
            return res.status(422).json({
                message: "Enter Product Price",
                status: false,
            })
        }
        // if (!productPicture) {
        //     return res.status(422).json({
        //         message: "Enter SubCategory Description",
        //         status: false,
        //     })
        // }
        const productData = {
            productName: productName,
            productDescription: productDescription,
            productShortDescription: productShortDescription,
            productPrice: productPrice,
            productPicture: 'http://localhost:3000/' + req.file.path,
            categoryId: categoryId,
            subCategoryId: subCategoryId,
        }

        const duplicateProduct = await Product.find({
            productName: productName
        })
            .then(resp => {
                if (resp.length !== 0) {
                    return res.status(400).json({
                        message: "Product Already Exists",
                        status: false,
                        data: productData,
                    })
                }
                else {
                    const insertProduct = Product.create(productData)
                    return res.status(200).json({
                        message: "Product Successfully Created",
                        status: true,
                        data: productData,
                    })
                }
            })
            .catch(err => {
                return res.status(422).json({
                    message: "Failed To Create Product",
                    status: false,
                    data: data,
                })
            })
    });
}


// Delete Product
export const deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, data) => {
        if (!req.params.id) {
            return res.status(400).json({
                message: "Enter Product ID",
                status: false,
            })
        }
        if (err) {
            return res.status(422).json({
                message: "Cannot Delete Product",
                status: false,
            })
        }
        return res.status(200).json({
            message: "Product Successfully Deleted",
            status: true,
            data: data,
        })
    })
}



// Update Product
export const updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
        if (!req.body) {
            return res.status(400).json({
                message: "Enter Product To Be Updated",
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
            message: "Updated Product",
            status: true,
            data: data,
        })
    })
}


// Sort Ascending Descending Product
export const sortProduct = async (req, res) => {
    const orderedProducts = await Product.find({}).sort({ productName: 1 })
        .then((data) => {
            if (data) {
                return res.status(200).json({
                    message: "Sorted Product List",
                    status: true,
                    data: data,
                })
            }
            else {
                return res.status(422).json({
                    message: "Failed To Sort Product",
                    status: false,
                    data: data,
                })
            }
        })
        .catch(error => {
            return res.status(422).json({
                message: "Problem Sorting",
                status: false,
                data: data,
            })
        })
}


// Filter Product Price
export const filterPriceProduct = (req, res) => {
    Product.find({ productPrice: { $lte: 10000 } }, (err, data) => {
        if (err) {
            return res.status(422).json({
                message: "Failed To Filter Product",
                status: false,
                data: data,
            })
        }
        return res.status(200).json({
            message: "Filtered Product List",
            status: true,
            data: data,
        })
    }).sort({ productPrice: 1 })
}