import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company } = body;

    // Validate inputs
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required.' },
        { status: 400 }
      );
    }

    // In a real application, you would save this to a database here.
    // For this mock, we simply log the data.
    console.log('Lead captured:', { name, email, company, timestamp: new Date() });

    return NextResponse.json(
      { message: 'Lead captured successfully', data: { name, email, company } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
