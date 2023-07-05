import { connect } from "@/db_config/config";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Usr from "@/models/user_model";


connect();


export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;

    // Check Request
    console.log(reqBody);

    // Check if user already exists.
    const user = await Usr.findOne({ username: username });

    if (user !== null) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt: string = await bcrypt.genSalt(10);
    const hashedPassword: string = await bcrypt.hash(password, salt);

    console.log(hashedPassword);

    const newUser = new Usr({
      username: username,
      email: email,
      password: hashedPassword,
    });



    await newUser.save();
    return NextResponse.json({
      success: true,
      user: newUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
