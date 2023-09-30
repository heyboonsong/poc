import { createServer } from "./server";
import { log } from "logger";
import { MongoClient, ObjectId } from "mongodb";

const port = process.env.PORT || 3001;
const server = createServer();
const MONGO_URL = process.env.MONGO_URL || "mongodb://legacy:password_legacy@localhost:27017";
const mongoClient = new MongoClient(MONGO_URL);


server.get("/todos", async (req, res) => {
  try {
    await mongoClient.connect();
    const db = mongoClient.db("legacy");
    const todos = await db.collection("todos").find().toArray();
    res.status(200).json(todos);
  } catch (error) {
    log(error);
    res.status(500).json({ error: "something went wrong" });
  } finally {
    mongoClient.close();
  }
});

server.post("/todos", async (req, res) => {
  const { description } = req.body;
  try {
    await mongoClient.connect();
    const db = mongoClient.db("legacy");
    const todos = await db.collection("todos").insertOne({ description, done: false });
    res.status(200).json(todos);
  } catch (error) {
    log(error);
    res.status(500).json({ error: "something went wrong" });
  } finally {
    mongoClient.close();
  }
});

server.patch("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { done } = req.body;
  console.log(id, done);

  try {
    await mongoClient.connect();
    const db = mongoClient.db("legacy");
    const todos = await db.collection("todos").updateOne({ _id:  new ObjectId(id) }, { $set: { done } });
    res.status(200).json(todos);
  } catch (error) {
    log(error);
    res.status(500).json({ error: "something went wrong" });
  } finally {
    mongoClient.close();
  }
});

server.listen(port, () => {
  log(`api running on ${port}`);
});
