/*
 * @file: server index.ts
 * @Author: xiaohan kong
 * @Date: 2023-02-24
 * @LastEditors: xiaohan kong
 * @LastEditTime: 2023-02-24
 *
 * Copyright (c) 2023 by xiaohan kong, All Rights Reserved.
 */
import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const port = 6789;

// cors
app.use(cors());
// helmet
app.use(helmet());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

// route
app.get("/", (req, res) => {
  console.log(req.query);
  res.send("Hello, world.");
});

app.listen(port, () => {
  console.log(`Hello, world`);
});
