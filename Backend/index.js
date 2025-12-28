const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// --- ☁️ MONGODB ATLAS CONNECTION ---
// REPLACE THIS STRING WITH YOUR OWN FROM ATLAS
// 1. Replace <password> with your actual database password
// 2. Replace 'myFirstDatabase' (or whatever is after .net/) with 'Test_DB'
const uri = "mongodb+srv://shanto:<password>@cluster0.xyz.mongodb.net/Test_DB?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => console.log('✅ Connected to MongoDB Atlas (Cloud)'))
  .catch(err => console.error('❌ Cloud Connection Error:', err));

// --- SCHEMA ---
// This must match your Atlas data exactly
const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String
}, { collection: 'Users' });

const User = mongoose.model('User', userSchema);

// --- API ENDPOINT ---
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    console.log("Data sent to client");
    res.json(users); // This sends the JSON to Postman/Browser
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});