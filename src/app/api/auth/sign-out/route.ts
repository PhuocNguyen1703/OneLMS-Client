import authApiRequest from "@/apiRequests/auth";
import { HttpError } from "@/libs/http";
import { cookies } from "next/headers";

export const POST = async () => {
  const cookieStore = cookies();
  console.log("All cookies:", cookieStore.getAll());
  const accessToken = cookieStore.get("accessToken");

  if (!accessToken) {
    return Response.json(
      {
        status: 401,
        message: "Can not receive accessToken.",
      },
      { status: 401 }
    );
  }

  try {
    const result = await authApiRequest.signOutFromNextServerToServer(
      accessToken.value
    );
    // cookieStore.delete("accessToken");

    return Response.json(result.payload, {
      status: 200,
    });
  } catch (error) {
    if (error instanceof HttpError) {
      return Response.json(error.payload, { status: error.status });
    } else {
      return Response.json(
        { status: 500, message: "Internal server error." },
        { status: 500 }
      );
    }
  }
};
