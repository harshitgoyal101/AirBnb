import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const { userId, accessToken, refreshToken } = await req.json();

        const cookieStore = await cookies();
        cookieStore.set("session_user_id", userId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // One week
            path: "/",
        });

        cookieStore.set("session_access_token", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60, // One hour
            path: "/",
        });

        cookieStore.set("session_refresh_token", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // One week
            path: "/",
        });

        return NextResponse.json({ success: true, userId });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Login failed" }, { status: 500 });
    }
}
