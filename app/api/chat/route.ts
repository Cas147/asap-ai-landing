import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, companyName, businessSchedule, services } =
      await request.json();

    const systemPrompt = `You are an AI assistant for ${companyName}. Here's the business information: COMPANY NAME: ${companyName} BUSINESS SCHEDULE: ${businessSchedule} SERVICES PROVIDED: ${services} Please respond to customer inquiries naturally and helpfully, using the business information provided above. Always refer to the company by name when appropriate. Keep responses concise and professional. If asked about hours, refer to the schedule. If asked about services, use the services information.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    return NextResponse.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
