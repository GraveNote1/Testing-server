import "dotenv/config";
import { MongoClient } from "mongodb";

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    await client.db("mibd").collection("prueba").insertOne({ hola: "mundo" });
    console.log("Conectado e insertado correctamente");
  } finally {
    await client.close();
  }
}

main().catch(console.error);