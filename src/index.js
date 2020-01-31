const express = require("express");
const words = require("./routes/words");

const port = process.env.WORDS_PORT ? process.env.WORDS_PORT : 3000;

const app = express();
app.use(express.json())

app.post("/words", (req, res) => {
  const body = req.body;

  const result = words({
    rule: body.rule,
    text: body.text
  });

  res.json(result);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
