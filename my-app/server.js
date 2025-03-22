require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Webhook endpoint
app.post("/webhook/tally", async (req, res) => {
  try {
    const responses = req.body; // Tally sends JSON data
    console.log("Received Tally response:", responses);

    // Insert data into the database
    for (const item of responses.answers) {
      const question = item.question.text;
      const answer = item.answer;

      await pool.query(
        "INSERT INTO tally_responses (question, answer) VALUES ($1, $2)",
        [question, answer]
      );
    }

    res.status(200).send("Webhook data saved successfully.");
  } catch (error) {
    console.error("Error processing webhook:", error);
    res.status(500).send("An error occurred.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
