import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const careerId = searchParams.get('id');

    if (careerId) {
      // Get specific career path with details
      const careerPath = await db.careerPath.findUnique({
        where: { id: careerId },
        include: {
          resources: true,
          flowcharts: {
            orderBy: {
              order: 'asc'
            }
          }
        }
      });

      if (!careerPath) {
        return NextResponse.json(
          { error: 'Career path not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ careerPath });
    } else {
      // Get all career paths
      const careerPaths = await db.careerPath.findMany({
        include: {
          _count: {
            select: {
              resources: true,
              flowcharts: true
            }
          }
        },
        orderBy: {
          title: 'asc'
        }
      });

      return NextResponse.json({ careerPaths });
    }

  } catch (error) {
    console.error('Error fetching career paths:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}