import http from "@/libs/http";

const authApiRequest = {
  signIn: (body: any) => http.post("/auth/login", body),
  auth: (body: { accessToken: string }) =>
    http.post("/api/auth", body, {
      baseUrl: "",
    }),
};

export default authApiRequest;
