import path from 'path';
import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, '../', 'build')));

app.get('/', (req, res) => {
  res.setHeader('content-type', 'text/html');
  res.status(200).sendFile(path.resolve(__dirname, '../', 'build', 'index.html'));
});

const port = process.env.PORT || 4040;

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`)
});
