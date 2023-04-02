import express from "express";
const app = express();
const port = 3600;

app.get("/", (reg, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log("Server running on port: " + port);
})