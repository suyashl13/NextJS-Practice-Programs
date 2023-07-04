import { connect } from "@/db_config/config";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/user_model";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;

    // Check Request
    console.log(reqBody);

    // Check if user already exists.
    const user = await User.findOne();

    if (!user)
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );

    const salt: string = await bcrypt.genSalt(10);
    const hashedPassword: string = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      hashedPassword,
    });

    return NextResponse.json({
      success: true,
      user: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

connect();
