const express = require("express");

const app = express();

const PORT = process.env.PORT || 7071;

app.use(express.static("public"));

app.listen(PORT, () => console.log(`Server created at: ${PORT}`));
