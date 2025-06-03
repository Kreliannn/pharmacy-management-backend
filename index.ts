import express,{ Request, Response } from 'express';
import mongoose from 'mongoose';
import routes from "./routes/route"
import cors from "cors"


const app = express();
const port = 5000;
  
app.use(express.json());
app.use(cors()); 
app.use(routes)

mongoose.connect("mongodb://localhost:27017/pharmacy")

app.get('/', async (request: Request, response: Response) => {
  response.send("working...........")
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
