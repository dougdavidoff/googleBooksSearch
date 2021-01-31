const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use.apply(express.static("client/build"));
}


app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactgooglebooks");

app.listen(PORT, () =? {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});