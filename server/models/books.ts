import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

// create a model class
const BookSchema = new Schema
({
    Question: String,
    Description: String,
    OptionA: String,
    OptionB: String,
    OptionC: String,
    OptionD: String
},
{
  collection: "books"
});

const Model = mongoose.model('Book', BookSchema);
export default Model;
