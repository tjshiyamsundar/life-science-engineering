import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      mentorId,
      menteeId,
      scheduledAt,
      notes
    } = body;

    // Validate required fields
    if (!mentorId || !menteeId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if mentor exists
    const mentor = await db.mentorProfile.findUnique({
      where: { id: mentorId }
    });

    if (!mentor) {
      return NextResponse.json(
        { error: 'Mentor not found' },
        { status: 404 }
      );
    }

    // Check if mentee exists
    const mentee = await db.user.findUnique({
      where: { id: menteeId }
    });

    if (!mentee) {
      return NextResponse.json(
        { error: 'Mentee not found' },
        { status: 404 }
      );
    }

    // Create mentor session
    const session = await db.mentorSession.create({
      data: {
        mentorId,
        menteeId,
        scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
        notes: notes || null,
        status: 'pending'
      },
      include: {
        mentor: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true
              }
            }
          }
        },
        mentee: {
          select: {
            firstName: true,
            lastName: true
          }
        }
      }
    });

    return NextResponse.json({
      message: 'Mentor session requested successfully',
      session
    });

  } catch (error) {
    console.error('Error creating mentor session:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const role = searchParams.get('role'); // 'mentor' or 'mentee'
    const status = searchParams.get('status');

    if (!userId || !role) {
      return NextResponse.json(
        { error: 'Missing userId or role parameter' },
        { status: 400 }
      );
    }

    const where: any = {};
    
    if (role === 'mentor') {
      where.mentorId = userId;
    } else if (role === 'mentee') {
      where.menteeId = userId;
    }

    if (status) {
      where.status = status;
    }

    const sessions = await db.mentorSession.findMany({
      where,
      include: {
        mentor: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
                email: true
              }
            }
          }
        },
        mentee: {
          select: {
            firstName: true,
            lastName: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json({ sessions });

  } catch (error) {
    console.error('Error fetching mentor sessions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}