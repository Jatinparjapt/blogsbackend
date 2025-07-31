const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db/connections.js");
const userRoute = require("./routes/users/user.route.js")
const adminUser = require("./routes/adminUser/admin.user.route.js")
const superAdmin = require("./routes/admin/admin.route.js")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
connectDB();

app.use("/api/user", userRoute);
app.use("/api/admin-user", adminUser);
app.use("/api/super-admin-user", superAdmin);
app.get("/", (req, res) => {
  res.send("Hello from Node + MongoDB App on Fly.io!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
