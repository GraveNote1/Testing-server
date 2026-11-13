import mongoose from "mongoose"

const connectMongoDb = async (uri) => {
  try {
    await mongoose.connect(uri)
    console.log("Conectado a MongoDb")
  } catch (error) {
    console.error("No se pudo conectar a MongoDb:", error.message)
    process.exit(1)
  }
}

export { connectMongoDb }