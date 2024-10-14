import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        // validate credentials
        // get user

        user = {
          id: "1",
          name: "rabbit",
          email: "rabbit@gmail.com",
        };

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          // throw new Error("User not found.");

          console.log("Invalid credentials");
          return null;
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
});
