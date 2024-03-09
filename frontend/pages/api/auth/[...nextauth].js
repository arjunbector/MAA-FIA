import { connectMongoDB } from "@/lib/mongodb";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import {Users} from "@/models/user";
import { NextResponse } from "next/server";

const getTokenFromYourAPIServer = async (user, account) => {
    let tokenFromBackend;
    await fetch(`${process.env.NEXT_PUBLIC_SERVER}/auth/googleAuth`, {
      method: "POST",
      body: JSON.stringify({
        "token": account.id_token,
        "email": user.email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(data => {
        return data.json()
      })
      .then(data => {
        if (data.error?.statusCode) {
          return null;
        }
        tokenFromBackend = data.accessToken;
      })
    return tokenFromBackend;
  }
  
const authOptions={
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks:{
        /*
        async signIn({user,account}){
            const{name,email}=user;
            console.log("User",user)
            console.log("Account",account);
            if(account.provider==='google'){
                try{
                    await connectMongoDB()
                    const userExists=await Users.findOne({email});
                    console.log(userExists)
                    if(!userExists){
                        const res=await fetch("http://localhost:3001/api/register/register",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify({
                            name,email
                        })
                    })
                    if(res.ok){
                        return user;
                    }
                    }else{
                        console.log("User has already registerd");
                        return NextResponse.json({ message: "User has already registered", status: 200 });
                    }
                   

                    
                }catch(error){
                    console.log(error);
                }
            }
        },
        */
        async jwt({ token, user, account }) {
            console.log("fdsbhajhfxdjjwrv",account)
            if (account && user) {
                return {
                  idToken: account.id_token,
                  accessToken: account.access_token,
                  accessTokenExpires: account.expires_at * 1000,
                  refreshToken: account.refresh_token,
                  accessTokenFromBackend: await getTokenFromYourAPIServer(user, account),
                  user,
                };
              }
              if (Date.now() < token.accessTokenExpires) {
                return token;
              }
              // Access token has expired, try to update it
              return refreshAccessToken(token);
          },
          async session({ session, token, user }) {
            session.user = token.user;
      session.accessToken = token.accessToken;
      session.accessTokenBackend = token.accessTokenFromBackend;
      session.error = token.error;
      session.idToken = token.idToken;
      if (token.accessTokenFromBackend) {
        return session;
      }
      return null;
          }
        
        

        
    },
    
};

export default NextAuth(authOptions);

//export {handler as GET, handler as POST};