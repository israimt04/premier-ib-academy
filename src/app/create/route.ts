import {NextResponse, NextRequest} from "next/server";
import {MongoClient} from "mongodb";

interface Data {
  name: string
  email: string;
  password: string;
  type: string;
}


export async function POST(req: NextRequest) {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  const db = client.db("test");
  const collection = db.collection("test");
  const data: Data = await req.json();

  if (await collection.findOne({email: data.email})) {
    await client.close();
    return NextResponse.json({
      "message": "Email already exists!"
    })
  }

  await collection.insertOne(data);
  await client.close();
  return NextResponse.json({
    "message": "Data Inserted!"
  })
}