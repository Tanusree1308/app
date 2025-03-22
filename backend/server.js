const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = "mongodb+srv://gaddamtanusree20:tanu@clustercrud.6mdyk.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCRUD";

mongoose.connect(uri)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Item Schema
const Item = mongoose.model('Item', new mongoose.Schema({ name: String }));

// Routes
app.get('/items', async (req, res) => res.json(await Item.find()));
app.post('/items', async (req, res) => res.json(await Item.create(req.body)));
app.put('/items/:id', async (req, res) => res.json(await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })));
app.delete('/items/:id', async (req, res) => res.json(await Item.findByIdAndDelete(req.params.id)));

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
