const express = require("express");
const { } = require("uuid");

const app = express();

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

});

app.listen(3333);