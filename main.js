import { MongoClient } from "mongodb";
import express from "express";
const app = express();

// async function main() {
//     const uri = "mongodb://127.0.0.1:27017";
//     const client = new MongoClient(uri);

//     const db = client.db("mydb");
//     const collection = db.collection("message");

//     await collection.insertOne({message: "Practise of Backend program"});
//     console.log("Recorded Added");
// }

//main(); Recorded Added

async function addRecord(req, res) {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("mydb");
    const collection = db.collection("message");

    let insertData = { message: req.query.message || "Null Value" ,};
    await collection.insertOne(insertData);
    console.log("Recorded Added");

    await client.close();
    res.json({opr: "successfully added"})
}
http://localhost:4000/addRecord
app.get("/addRecord", addRecord);

//http://localhost:4000/
app.listen(4000);