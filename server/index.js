require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";

//Routes
import Auth from "./API/Auth";

//Database connection
import ConnectionDB from "./database/connection";
const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(cors());
zomato.use(helmet());

zomato.get("/", (request, response) => {
  response.json({ message: "Server set-up successfully" });
});

zomato.use("/auth",Auth);

zomato.listen(4000, () =>
  ConnectionDB()
    .then(() => console.log("Server is running!"))
    .catch(() => console.log("Server is running but database connection failed"))
);
