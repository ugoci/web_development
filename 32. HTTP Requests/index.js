import express from "express";
const app = express();
const port = 3000;

//Get method to get information from a location. The forward slash is what you use to identify the endpoint
app.get("/", (req, res) => {   //the path here is the homepage as a forward slash
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is yoda</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +0011223344556</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
