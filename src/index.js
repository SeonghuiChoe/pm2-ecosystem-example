const app = require('express')();

app.use('/', (req, res) => {
  res.status(200).json({
    msg: 'hello',
  });
});

app.listen(5050, () => {
  // eslint-disable-next-line no-console
  console.log('app started');
});
