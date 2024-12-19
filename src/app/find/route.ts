import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

interface GetData {
  email: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: GetData = await req.json();
    const client = new MongoClient("mongodb://localhost:27017");
    await client.connect();
    const db = client.db("test");
    const collection = db.collection("test");
    const user = await collection.findOne({ email: body.email }, { projection: { name: 1, email: 1, type: 1 } });
    await client.close();

    if (user) {
      return NextResponse.json({
        name: user.name,
        email: user.email,
        type: user.type
      });
    } else {
      return NextResponse.json({
        message: "User not found!"
      }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({
      message: "An error occurred",
    }, { status: 500 });
  }
}