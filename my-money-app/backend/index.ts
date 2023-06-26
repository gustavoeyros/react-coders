import express from "express";
import { run } from "./db/conn";
import cors from "cors";
import BillingRoutes from './routes'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.use("/api", BillingRoutes);
run();
app.listen(3000, () => console.log("Running in 3000"));