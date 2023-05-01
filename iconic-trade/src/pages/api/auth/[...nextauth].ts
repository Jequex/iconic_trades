import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId:
//         "184997089599-f9h5644h0bpgc2pbcil8jgb3hrkepk6k.apps.googleusercontent.com",
//       clientSecret: "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",
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),

//     CredentialsProvider({
//       name: "with email",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },

//       async authorize(credentials, req) {
//         // Add logic here to look up the user from the credentials supplied
//         const user = {
//           id: "1",
//           name: "J Smith",
//           email: "jsmith@example.com",
//           password: "12345",
//           username: "jondoe",
//         };

//         if (user.username === "jondoe" && user.password === "12345") {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],

//   callbacks: {
//     jwt: ({ user, token }) => {
//       if (user) {
//         token.id = user.id;
//       }

//       return token;
//     },
//     session: ({ token, session }) => {
//       if (token) {
//         session.id = token.id;
//       }

//       return session;
//     },
//   },

//   secret: "test",
//   jwt: {
//     secret: "test",
//     encryption: true,
//   },
// };

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "184997089599-f9h5644h0bpgc2pbcil8jgb3hrkepk6k.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const res = await fetch(
          "https://iconic-trades-backend.herokuapp.com/api/v1/users/loginUser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          }
        );

        const user = res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/sign-in",
  },
});
