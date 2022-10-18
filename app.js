const express = require("express");
const path = require("path");
const app = express();

const host = "localhost";
const port = process.env.PORT || 8000;
let count = 0;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
	res.send("hello world");

	console.log(req.query);
});

// app.get("/test", (req, res) => {
// 	res.send("hello world");

// 	console.log(req.query);
// });

app.get("/api", (req, res) => {
	res.json({ count });
});

app.post("/api", (req, res) => {
	++count;
	res.json({ count });
});

app.use(express.static("public"));

app.listen(port, host, () => {
	console.log(`visit http://${host}:${port}`);
});
