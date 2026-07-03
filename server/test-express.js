const express = require('express');
const app = express();
const router = express.Router();
router.post('/register', (req, res) => res.send('ROUTER'));
app.use('/api/auth', router);
app.post('/api/auth/register', (req, res) => res.send('DIRECT'));
app.listen(3000, async () => {
  const res = await fetch('http://localhost:3000/api/auth/register', { method: 'POST' });
  const text = await res.text();
  console.log('RESULT:', text);
  process.exit(0);
});
