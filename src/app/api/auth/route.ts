import { cookies } from "next/headers";

export const POST = async (request: Request) => {
  const body: { accessToken: string; refreshToken: string } =
    await request.json();
  const { accessToken, refreshToken } = body;

  if (!accessToken) {
    return Response.json({
      status: 400,
      message: "Can not receive accessToken.",
    });
  }

  const cookieStore = await cookies();

  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
  cookieStore.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return Response.json({ message: "Set cookie successfully." });
};
