const express = require("express");
const app = express();
const port = 3088;

app.get("/words", (req, res) => {
  res.json({ sessionId: 10 });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
