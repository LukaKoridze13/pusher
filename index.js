const express = require("express");
const Pusher = require("pusher");
const cors = require("cors");
const app = express();
app.use(cors());
const pusher = new Pusher({
  appId: "1670645",
  key: "3e49024f62ba34248d16",
  secret: "c3b97896dc531dafd669",
  cluster: "ap2",
  useTLS: true,
});

app.post("/broadcast-event", (req, res) => {
  const eventData = {
    message: "Hello from the server!",
  };
  pusher.trigger("create-ticket-channel", "create-event", eventData);
  res.status(200).json({ success: true, message: "Event broadcasted." });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
