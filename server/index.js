import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = `mongodb+srv://Admin-naman:${process.env.PASSWORD}@cluster0.abawy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running`)))
  .catch((error) => console.log(`${error}`));

mongoose.set('useFindAndModify', false);