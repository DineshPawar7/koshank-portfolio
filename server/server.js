const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PRIVYR_API_URL = process.env.PRIVYR_API_URL;
const API_KEY = process.env.PRIVYR_API_KEY;

// Sending contact form data in the Privyr CRM
app.post("/api/contact", async (req, res) => {
    try {
        const response = await axios.post(
            `${PRIVYR_API_URL}/contacts`,
            req.body,
            { headers: { Authorization: `Bearer ${API_KEY}` } }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
