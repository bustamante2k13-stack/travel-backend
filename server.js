const express = require('express');
const cors = require('cors');
const bookingRoutes = require('./routes/bookingRoutes');
require('dotenv').config(); // Load .env for local development

const app = express();
app.use(cors());
app.use(express.json());

// Route handler
app.use('/submit', bookingRoutes);

// Health check route (optional but helpful)
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Use Render's dynamic port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

