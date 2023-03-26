import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import Routes from './server/route.js';
import Connection from './database/db.js';

const app = express();
dotenv.config();
app.use(cors());
app.use("/", Routes)
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);

const PORT = '8080';

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));