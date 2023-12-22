import express, { Router, Request, Response } from 'express'
import cors from 'cors';

const app = express()
const route = Router()

app.use(express.json())
app.use(cors())

route.get('/health', (req: Request, res: Response) => {
    const health = {
        "message": "Welcome to Express and PostgreSQL",
        "status": "success"
    }; 
    res.json(health)
})

route.get('/getAll', (req: Request, res: Response) => {
    const health = {
        "message": "Welcome to Express and PostgreSQL",
        "status": "success"
    }; 
    res.json(health)
})

app.use(route)

app.listen(3000, () => {
    console.log("Server Listening on PORT: 3000");
});
