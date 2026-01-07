import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const mentorId = searchParams.get('id');
    const expertise = searchParams.get('expertise');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    if (mentorId) {
      // Get specific mentor with details
      const mentor = await db.mentorProfile.findUnique({
        where: { id: mentorId },
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true
            }
          },
          _count: {
            select: {
              mentorSessions: true
            }
          }
        }
      });

      if (!mentor) {
        return NextResponse.json(
          { error: 'Mentor not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ mentor });
    } else {
      // Get all mentors with optional filtering
      const where = expertise ? {
        expertise: {
          contains: expertise
        }
      } : {};

      const mentors = await db.mentorProfile.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true
            }
          },
          _count: {
            select: {
              mentorSessions: true
            }
          }
        },
        orderBy: {
          rating: 'desc'
        },
        take: limit,
        skip: offset
      });

      const total = await db.mentorProfile.count({ where });

      return NextResponse.json({
        mentors,
        total,
        hasMore: offset + limit < total
      });
    }

  } catch (error) {
    console.error('Error fetching mentors:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}