const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok'
  });
});

app.get('/', (req, res) => {
  res.send('Vehicle Management API is running');
});

app.use('/api/v1/users', userRoutes);

// Error-handling middleware
app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).json({
    error: 'Internal server error'
  });
});

module.exports = app;