import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { param1, param2 }: { param1?: string; param2?: string } = body;
    console.log({ param1, param2 });
    if (!param1 || !param2) {
      return NextResponse.json(
        { error: "param1 and param2 are required" },
        { status: 400 }
      );
    }

    const redirectUrl = `http://localhost:3000/dashboard`;

    return NextResponse.redirect(redirectUrl, 301);
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
