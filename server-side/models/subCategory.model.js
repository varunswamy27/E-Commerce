import mongoose from "mongoose";

const { Schema } = mongoose;

const subCategorySchema = new Schema({
    subCategoryName: {
        type: String,
        required: true,
    },
    subCategoryDescription: {
        type: String,
        required: true,
    },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
})

const SubCategory = mongoose.model("SubCategory", subCategorySchema);

export default SubCategory;
