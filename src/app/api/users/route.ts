import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      firstName,
      lastName,
      email,
      educationLevel,
      fieldOfStudy,
      careerInterests,
      experienceLevel,
      careerGoals
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !educationLevel || !fieldOfStudy || !careerInterests || !experienceLevel) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Create new user
    const user = await db.user.create({
      data: {
        firstName,
        lastName,
        email,
        educationLevel,
        fieldOfStudy,
        careerInterests: JSON.stringify(careerInterests),
        experienceLevel,
        careerGoals: careerGoals || null
      }
    });

    // Create form submission record
    await db.formSubmission.create({
      data: {
        type: 'join_community',
        data: JSON.stringify(body),
        status: 'new'
      }
    });

    return NextResponse.json({
      message: 'User created successfully',
      userId: user.id
    });

  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}