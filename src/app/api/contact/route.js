import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
 
        const { name, message } = await request.json();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'opayaka0@gmail.com',
                pass: process.env.password,
            }
        })

        const mailOptions = {
            from: 'opayaka0@gmail.com',
            to: 'ayaka.takemoto@omegapoint.se',
            subject: "Boka TechMentor",
            html: `
            <h3>Boka TechMentor</h3>
            <li> Name: ${name}</li>
            <li> message: ${message}</li> 
            `
        }

        const sendMailPromise = () => {
            new Promise((resolve, reject) => {
                transport.sendMail(mailOptions, function(err) {
                    if(!err){
                        resolve('Email sent');

                    }
                    else {
                        reject(err.message);
                    }
                });
            });
        }

        try 
        {
            await sendMailPromise();
            return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
        }
        catch 
        {
            return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
        }   
}