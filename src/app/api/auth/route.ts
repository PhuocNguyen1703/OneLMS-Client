export const POST = async (request: Request) => {
  const body = await request.json();
  const accessToken = body.accessToken as string;

  if (!accessToken) {
    return Response.json({
      status: 400,
      message: "Can not receive accessToken.",
    });
  }

  return Response.json(body, {
    status: 200,
    headers: {
      "Set-Cookie": `accessToken=${accessToken}; Path=/; HttpOnly;SameSite=Lax; Secure`,
    },
  });
};
