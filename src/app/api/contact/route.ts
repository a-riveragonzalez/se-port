import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing environment variables: GMAIL_USER or GMAIL_APP_PASSWORD');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create transporter using the Gmail service
    // const transporter = nodemailer.createTransport({
    //   service: "Gmail",
    //   auth: {
    //     user: process.env.GMAIL_USER,
    //     pass: process.env.GMAIL_APP_PASSWORD,
    //   },
    // });

    console.log("GMAIL_USER length:", process.env.GMAIL_USER?.length);
    console.log("GMAIL_APP_PASSWORD set:", !!process.env.GMAIL_APP_PASSWORD);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Configure mail options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'arelyrivera1996@gmail.com',  // Your email address
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #ccc; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <strong>Message:</strong>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Send email using nodemailer transporter
    const info = await transporter.sendMail(mailOptions);
    
    console.log("Email sent: " + info.response);
    
    return NextResponse.json(
      { message: 'Email sent successfully', info: info.response },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // More detailed error response
    if (error instanceof Error) {
      return NextResponse.json(
        { 
          error: 'Failed to send email', 
          details: error.message,
          stack: process.env.NODE_ENV === 'development' ? error.stack : undefined 
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to send email', details: 'Unknown error occurred' },
      { status: 500 } 
    );
  }
}