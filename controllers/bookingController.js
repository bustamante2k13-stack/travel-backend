// backend/controllers/bookingController.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

exports.handleBooking = async (req, res) => {
  const { name, email } = req.body;

  try {
    await pool.query(
      'INSERT INTO bookings (name, email) VALUES ($1, $2)',
      [name, email]
    );
    console.log('Booking saved:', name, email);
    res.status(200).json({ message: 'Booking received!' });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};


