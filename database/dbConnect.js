import mongoose from 'mongoose'
import * as models from './model'

const mongodb_uri = process.env.MONGODB_URI

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export default async function dbConnect(local = false) {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }
    cached.promise = mongoose.connect(!local && mongodb_uri ? mongodb_uri : 'mongodb://127.0.0.1:27017/church?retryWrites=true&w=majority', opts).then((mongoose) => {
      return mongoose
    })
  }
  try {
    console.log("Connecting to database...")
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    console.log('Error connecting to MongoDB:', e.message)
    if (local) {
      throw e
    }
  } finally {
    if (!local && !cached.conn) {
      // Retry connection after a delay
      console.log('Retrying local database connection...')
      return dbConnect(true)
    }
  }
  
  console.log("connected to database")
  return cached.conn
}
