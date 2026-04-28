import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // In a real application, you would connect to a database like PostgreSQL or MongoDB
    // and securely save the lead information here.
    console.log('SUCCESS: New Lead Captured from API:', { name, email, timestamp: new Date() });

    // Simulate network delay for realistic UI loading state
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json(
      { success: true, message: 'Thank you! Our advisor will contact you shortly.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
