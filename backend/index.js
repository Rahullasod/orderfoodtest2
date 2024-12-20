// const express = require('express')
// const app = express()
// const port = 5000
// const mongoDB = require('./db.js');
// mongoDB();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.use(express.json());
// app.use('/api', require("./Routes/CreateUser"));
// app.use('/api', require("./Routes/DisplayData"));
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const express = require('express');
const cors = require('cors');
const port = 5000;
const mongoDB = require('./db.js');

mongoDB();

const app = express();

// More flexible CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'https://orderfoodtest2.vercel.app'], // Add your Vercel domain here
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});