// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 
import { SMTPClient } from 'emailjs';
 
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler( req: NextApiRequest,
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
 
  
   client.send(
     {
       text: `Just for testing purpose`,
       from: process.env.mail,
       to: email,
       subject: 'testing emailjs',
      
     }
     )
   }
 catch(e){
   res.status(400).end(JSON.stringify({ message:"Error" }))
   return;
 }
 
 res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}