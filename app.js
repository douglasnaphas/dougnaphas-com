var express = require("express");
var app = express();

app.get("/kleenex", () => {
  return res.redirect(
    301,
    "https://docs.google.com/presentation/d/1KnfT8yb825nH4mXQ7E-iypnjumT6pP7SQ3ix6f-fUE4/edit?usp=sharing"
  );
});

app.get("/", function (req, res) {
  return res.send({
    Output: "This is dougnaphas.com",
  });
});

app.post("/", function (req, res) {
  return res.send({
    Output: "This is dougnaphas.com",
  });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
