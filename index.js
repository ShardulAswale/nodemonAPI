const express = require('express');
const app = express();

app.use(express.json());

let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  // Add some sample data
];

// Read all items
app.get('/items', (req, res) => {
  res.json(data);
});

// Read a specific item
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find(item => item.id === id);
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

// Create a new item
app.post('/items', (req, res) => {
  const item = req.body;
  item.id = data.length + 1;
  data.push(item);
  res.json(item);
});

// Update an item
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  let item = data.find(item => item.id === id);
  if (!item) return res.status(404).send('Item not found');
  item.name = updatedItem.name;
  res.json(item);
});

// Delete an item
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter(item => item.id !== id);
  res.send(`Item with id ${id} deleted`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
