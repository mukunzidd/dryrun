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

app.listen(process.env.PORT || 5000, () => {
  console.log('App listening on PORT 5k');
});

export default app;
