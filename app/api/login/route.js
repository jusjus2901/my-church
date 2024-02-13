import db from '@/database/dbConnect'
import { NextResponse } from 'next/server'
//import bcrypt from 'bcryptjs'
import User from '@/database/model/User'

//export async function GET(req) { 
 //const searchParams = req.nextUrl.searchParams
 //const pwd = searchParams.get('pwd')
  //return NextResponse.json({ password: bcrypt.hashSync(pwd) })
//}

export async function POST(req) {
  await db()
  // TODO: login post
  const { username, password } = await req.json()

  if (username && password) {
    // PROCEED
    const result = await User.findOne({ username });
    if (result) {
      if (bcrypt.verify(password, result.password)) {
        return NextResponse.json({ success: { name: result.name, username: result.username }})
      } else {
        return NextResponse.json({ error: 'Wrong Password' }, 401)
      }
    } else {
      return NextResponse.json({ error: 'User does not exists' }, 401)
    }
  } else {
    return NextResponse.json({ error: 'Bad Request' }, 400)
  }

}