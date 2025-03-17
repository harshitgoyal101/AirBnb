import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    const userId = cookieStore.get("session_user_id")?.value || null;
    const accessToken = cookieStore.get("session_access_token")?.value || null;

    return NextResponse.json({ userId, accessToken });
}
