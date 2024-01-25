import { Schema, models, model } from 'mongoose'

const UserSchema = new Schema({
  username: {
    type: String,
    unique: [true, 'Username already exists! Please use another username'],
    required: [true, 'Username is required']
  },
  email: {
    type: String,
    unique: [true, 'Email been taken'],
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  name: {
    type: String,
    required: true
  }
})

export default models.User || model('User', UserSchema)