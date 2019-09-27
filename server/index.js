import express from 'express';

const app = express();
const users = [
  {
    id: 1,
    name: 'John',
    job: 'carpenter',
  },
  {
    id: 2,
    name: 'Jill',
    job: 'carpenter',
  },
  {
    id: 3,
    name: 'Jake',
    job: 'carpenter',
  },
];
app.get('/status', (req, res) => {
  res.send({ message: 'API running...' });
});

app.get('/users', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Success',
    data: users,
  });
});

app.listen(3000, () => {
  console.log('App listening on PORT 3k');
});

export default app;
