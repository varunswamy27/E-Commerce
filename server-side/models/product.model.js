import mongoose from "mongoose";


const { Schema } = mongoose;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productShortDescription: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productPicture: {
        type: String,
    },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
    subCategoryId: { type: Schema.Types.ObjectId, ref: "SubCategory" },

})

const Product = mongoose.model("Product", productSchema);

export default Product;