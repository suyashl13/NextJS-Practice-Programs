import { connect } from "@/db_config/config";
import { getIdFromJwtToken } from "@/helper/jwt_helper";
import User from "@/models/user_model";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
  try {
    const userId: string = getIdFromJwtToken(req);

    const reqUser = await User.findOne({ _id: userId }).select("-password");

    return NextResponse.json({
      message: "user found",
      data: reqUser,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
