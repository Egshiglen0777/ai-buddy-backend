const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Allow frontend to hit this
app.use(express.json()); // Parse JSON bodies

app.post("/chat", (req, res) => {
  const userInput = req.body.user_input;
  if (!userInput) {
    return res.status(400).json({ detail: "No input, little buddy!" });
  }

  // Placeholder AI response (replace this with real AI later if you want)
  const aiResponse = `Hey cutie pie! You said "${userInput}"—so cool! 😊 What’s next?`;
  res.json({ response: aiResponse });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
