import express from 'express';
import { handleRequest } from './handleRequest';

const app = express();

app.get('/', handleRequest);

// app.get("/", (req,res)=>{
//   res.status(200).send({status:"run"})
// });


app.listen(3002, () => console.log('Server running on port 3002'));