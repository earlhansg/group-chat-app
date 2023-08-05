import express, {Express, Request, Response} from 'express'

const port = 3001;
const app: Express = express();


app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express Plus Typescriptsss and more");
});

app.listen(port, ()=> {
    console.log(`now listening to ${port}`);
})