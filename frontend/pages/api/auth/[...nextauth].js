import { connectMongoDB } from "@/lib/mongodb";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import {Users} from "@/models/user";
import { NextResponse } from "next/server";


const authOptions={
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks:{
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
        }

        
    }
};

export default NextAuth(authOptions);

//export {handler as GET, handler as POST};