import { Users } from "@/models/user";

const { OAuth2Client } = require("google-auth-library");

const UserToken = require("../../models/usertoken");



import { generateTokens } from "../register/generateTokenUser";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export default async function handler(req, res){
    

    
    const token = req.body.token;
    const emailFromClient = req.body.email;
    
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    if (!ticket) {
        console.log(ticket,"+++hit1");
        return next(
            new AppError(
                "Please SignOut and SignIn Again",
                401,
                errorCodes.INVALID_TOKEN
            )
        );
    }

    const { email } = ticket.getPayload();
    if (email !== emailFromClient) {
        console.log(ticket,"+++hit2");
        return next(
            new AppError(
                "Please SignOut and SignIn Again",
                401,
                errorCodes.INVALID_TOKEN
            )
        );
    }

    const user = await Users.findOne({ email: emailFromClient });
    /*
    if (!user) {
        await new User({
            email: emailFromClient,
            hasFilledDetails: false,
            firstName: null,
            lastName: null,
            regNo: null,
            mobileNumber: null,
            teamId: null,
        }).save();

        const user = await User.findOne({ email: emailFromClient });
        const { accessToken, refreshToken } = await generateTokens(user);

        return res.status(201).json({
            message: "User SignUp Succesfull",
            accessToken,
            refreshToken,
        });
    }
    */
    if(!user){
        res.status(404).json({
            message:"Registrations are closed."
        })
    }
    const { accessToken, refreshToken } = await generateTokens(user);
    console.log(accessToken);
    res.status(200).json({
        message: "Logged in sucessfully",
        accessToken,
        refreshToken,
    });
};

