import { connectMongoDB } from "@/lib/mongodb";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import {Users} from "@/models/user";
import { NextResponse } from "next/server";
import { OAuth2Client } from 'google-auth-library';
import { UsersDetails } from "@/models/Userdetails";
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

import { generateTokens } from "../register/generateTokenUser";
const GOOGLE_AUTHORIZATION_URL =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    prompt: "consent",
    access_type: "offline",
    response_type: "code",
  });
/*
const getTokenFromYourAPIServer = async (user, account) => {
    let tokenFromBackend;
    await fetch(`api/auth/googleauth`, {
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
  */

  const gettokenfrombackend=async (user,account)=>{
    await connectMongoDB()
    const token=account.id_token;
    const email=user.email;
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    //const { email } = ticket.getPayload();
    const users = await Users.findOne({ email: email });
    console.log(users)
    const { accessToken, refreshToken } = await generateTokens(users);
    console.log("\n\n\n\n\n\n\n\n");
    console.log(accessToken);
    return accessToken;
    
    
  }

  const r=async(user,account)=>{
    await connectMongoDB();
            const{name,email}=user;
            const newUser = new Users({ name, email});
            newUser.save();
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
           await r(user,account);
          //return true;
        },
        */
        
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
                        return{ user, account };
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
        async signIn({ user, account }) {
            return true
          },
        
        async jwt({ token, user, account }) {
            //console.log("fdsbhajhfxdjjwrv",account)
            if (account && user) {
                return {
                  idToken: account.id_token,
                  accessToken: account.access_token,
                  accessTokenExpires: account.expires_at * 1000,
                  refreshToken: account.refresh_token,
                 accessTokenFromBackend: await gettokenfrombackend(user, account),
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
            console.log("Access token from backend",session.accessTokenBackend)
            session.error = token.error;
            session.idToken = token.idToken;
      if (token.accessTokenFromBackend) {
        return session;
      }
      return null;
          }
        
        

        
    },
    
};
async function refreshAccessToken(token) {
    try {
      const url =
        "https://oauth2.googleapis.com/token?" +
        new URLSearchParams({
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          grant_type: "refresh_token",
          refresh_token: token.refreshToken,
        });
  
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      });
  
      const refreshedTokens = await response.json();
  
      if (!response.ok) {
        throw refreshedTokens;
      }
  
      return {
        ...token,
        idToken: refreshedTokens.id_token,
        accessToken: refreshedTokens.access_token,
        accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
        refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
      };
    } catch (error) {
      console.error(error);
  
      return {
        ...token,
        error: "RefreshAccessTokenError",
      };
    }
  }

export default NextAuth(authOptions);

//export {handler as GET, handler as POST};