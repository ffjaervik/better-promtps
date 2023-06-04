import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
//import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async sinIn({ profile }) {
    try {
      
    } catch {

    }
  },
});

export { handler as GET, handler as POST };
