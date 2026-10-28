import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://fodi2592_db_user:8k110fNHlCYOuLLs@cluster0.n6klejv.mongodb.net/ExpenseFlow2',
    )
    .then(() => console.log('DB CONNECTED'));
};
