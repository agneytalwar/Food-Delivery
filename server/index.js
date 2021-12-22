require("dotenv").config();
import express from "express";
const session = require("express-session");

import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config
import googleAuthConfig from "./config/google.config";

//Routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant/index";
import Food from "./API/Food/index";

//Database connection
import ConnectionDB from "./database/connection";
const zomato = express();

zomato.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);

//passport config
googleAuthConfig(passport);

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(cors());
zomato.use(helmet());
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get("/", (request, response) => {
  response.json({ message: "Server set-up successfully" });
});

zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);

zomato.listen(4000, () =>
  ConnectionDB()
    .then(() => console.log("Server is running!"))
    .catch((error) =>{
      console.log(error);
      console.log("Server is running but database connection failed")
    })
);
