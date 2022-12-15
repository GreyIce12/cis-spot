 
import { SMTPClient } from 'emailjs';
 
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest,
    res: NextApiResponse) {
 
 const {email}=req.body;
 // console.log(process.env)
 
 const client = new SMTPClient({
   user: process.env.mail,
   password: process.env.password,
   host: 'smtp.gmail.com',
   ssl:true
 });
 
 try{
 
  
 const message = await client.sendAsync({
    text: `Just for testing purpose`,
   from : process.env.mail as string,
   to: email,
   subject: 'testing emailjs'
,
});
 }
 catch(e){
   res.status(400).end(JSON.stringify({ message:"Error" }))
   return;
 }
 
 res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}