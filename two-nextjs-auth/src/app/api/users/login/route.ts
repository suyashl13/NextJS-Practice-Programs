import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Usr from "@/models/user_model";
import jsonwebtoken from "jsonwebtoken";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Get Request Params
    const body = await req.json();
    const { email, password } = body;

    // Find if yser exists in database
    const loginUser = await Usr.findOne({ email: email });

    if (loginUser === null) {
      return NextResponse.json(
        {
          success: false,
          error: "The user with associated email does not exists.",
        },
        { status: 400 }
      );
    }

    const isValidPassword: boolean = await bcrypt.compare(
      password,
      loginUser.password
    );

    if (isValidPassword === false) {
      return NextResponse.json(
        {
          success: false,
          error: "Provided password is incorrect.",
        },
        { status: 400 }
      );
    }

    // Create token data
    const tokenData = {
      id: loginUser._id,
      username: loginUser.username,
      email: loginUser.email,
    };

    // Create token
    const jwt = await jsonwebtoken.sign(
      tokenData,
      process.env["TOKEN_SECRET"] as string,
      { expiresIn: "1d" }
    );

    // Create token and send.
    const res = NextResponse.json({
      message: "Loggedin successfully",
      success: true,
    });
    res.cookies.set("token", jwt, { secure: true });
    return res;
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
