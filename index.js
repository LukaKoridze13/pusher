import express from "express";
import Pusher from "pusher";
import cors from "cors";
const app = express();
app.use(cors());
const pusher = new Pusher({
  appId: "1670645",
  key: "3e49024f62ba34248d16",
  secret: "c3b97896dc531dafd669",
  cluster: "ap2",
  useTLS: true,
});

app.get("/", (req, res) => {
  res.status(200).json("Server on");
});

app.post("/create", (req, res) => {
  const eventData = {
    message: "Hello from the server!",
  };
  pusher.trigger("create-ticket-channel", "create-ticket", eventData);
  res.status(200).json({ success: true, message: "Event broadcasted." });
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
