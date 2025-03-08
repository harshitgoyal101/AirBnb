import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
    const cookieStore = await cookies();

    cookieStore.set("session_user_id", "", { path: "/" });
    cookieStore.set("session_access_token", "", { path: "/" });
    cookieStore.set("session_refresh_token", "", { path: "/" });

    return NextResponse.json({ success: true });
}
