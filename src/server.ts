import express, { Express, Request, Response } from 'express'


import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

interface ApiResponse {
    json: any;
  }

app.post('/apiresponse', async (req: Request, res: Response) => {
    const data = req.body
    console.log(data)

    res.send({ data });
});


app.get('/', async (req: Request, res: Response) => {
    res.send('apiresponse');
});

app.listen(4001, () => {
    console.log('Server started on port 4001');
});
