import express, {Express, Request, Response} from 'express'
import http from 'http'
import cors from 'cors'
import { Server } from 'socket.io'

const port = 3001;
const app: Express = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"] 
    }
})

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
  
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });
  
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
})

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express Plus Typescriptsss and more");
});

server.listen(port, ()=> {
    console.log(`now listening to ${port}`);
})