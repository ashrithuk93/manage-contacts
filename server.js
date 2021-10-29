const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to DB
connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Conatcts API Running"));

// Define routes
app.use("/api/contacts", require("./routes/api/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Contacts server started on port ${PORT}`));
