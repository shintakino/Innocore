import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const RESEND_API_KEY = 're_Ygb75tZG_KG4daytYTwLqCCKzNyJUfXMc'

interface ContactForm {
  firstName: string
  lastName: string
  email: string
  message: string
}

export async function POST(request: Request) {
  try {
    const data: ContactForm = await request.json()
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="
          margin: 0;
          padding: 0;
          background-color: #f6f9fc;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        ">
          <table width="100%" cellpadding="0" cellspacing="0" style="
            background-color: #f6f9fc;
            padding: 40px 20px;
          ">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="
                  background-color: #ffffff;
                  border-radius: 10px;
                  overflow: hidden;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                ">
                  <!-- Header -->
                  <tr>
                    <td style="
                      background: linear-gradient(135deg, #ff6b00 0%, #ff8533 100%);
                      padding: 40px 40px;
                      text-align: center;
                    ">
                      <h1 style="
                        color: #ffffff;
                        margin: 0;
                        font-size: 24px;
                        font-weight: 600;
                      ">New Contact Form Submission</h1>
                      <p style="
                        color: rgba(255, 255, 255, 0.9);
                        margin: 10px 0 0 0;
                        font-size: 16px;
                      ">${currentDate}</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <!-- Sender Info -->
                        <tr>
                          <td style="padding-bottom: 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="
                              background-color: #f8fafc;
                              border-radius: 8px;
                              padding: 20px;
                            ">
                              <tr>
                                <td>
                                  <h2 style="
                                    margin: 0 0 15px 0;
                                    color: #ff6b00;
                                    font-size: 18px;
                                    font-weight: 600;
                                  ">Sender Information</h2>
                                  <p style="
                                    margin: 5px 0;
                                    font-size: 16px;
                                    line-height: 1.5;
                                  "><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                                  <p style="
                                    margin: 5px 0;
                                    font-size: 16px;
                                    line-height: 1.5;
                                  "><strong>Email:</strong> ${data.email}</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <!-- Message -->
                        <tr>
                          <td style="padding-bottom: 30px;">
                            <h2 style="
                              margin: 0 0 15px 0;
                              color: #ff6b00;
                              font-size: 18px;
                              font-weight: 600;
                            ">Message</h2>
                            <div style="
                              background-color: #f8fafc;
                              border-radius: 8px;
                              padding: 20px;
                              font-size: 16px;
                              line-height: 1.6;
                              color: #4a5568;
                            ">
                              ${data.message.replace(/\n/g, '<br>')}
                            </div>
                          </td>
                        </tr>

                        <!-- Reply Button -->
                        <tr>
                          <td>
                            <a href="mailto:${data.email}" style="
                              display: inline-block;
                              background: linear-gradient(135deg, #ff6b00 0%, #ff8533 100%);
                              color: #ffffff;
                              text-decoration: none;
                              padding: 12px 25px;
                              border-radius: 25px;
                              font-size: 16px;
                              font-weight: 500;
                              box-shadow: 0 4px 6px rgba(255, 107, 0, 0.2);
                            ">Reply to ${data.firstName}</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="
                      background-color: #f8fafc;
                      padding: 20px 40px;
                      text-align: center;
                      border-top: 1px solid #e2e8f0;
                    ">
                      <p style="
                        margin: 0;
                        color: #718096;
                        font-size: 14px;
                      ">© ${new Date().getFullYear()} Innocore Tech Solutions. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Innocore Tech Solutions <onboarding@resend.dev>',
        to: 'innocoretechsolutions@gmail.com',
        subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
        html: emailHtml,
      })
    })

    if (res.ok) {
      const responseData = await res.json()
      return NextResponse.json({ success: true, data: responseData })
    } else {
      const error = await res.text()
      return NextResponse.json({ success: false, error }, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}