const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://zobayedict05:kcolbYJYT3zMsdaA@cluster0.tegygzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    
    await client.connect();
    console.log(
      "Database is connected to MongoDB!"
    );
  } finally {
    
   
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Route is Working");
});

app.listen(port, (req, res) => {
  console.log("App is listening on Port : ", port);
});
