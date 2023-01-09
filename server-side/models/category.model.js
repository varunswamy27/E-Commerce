import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
    categoryDescription: {
        type: String,
    },
    // subCatId:{type:Schema.Types.ObjectId,ref:"SubCat"},

})

const Category = mongoose.model("Category", categorySchema);

export default Category;