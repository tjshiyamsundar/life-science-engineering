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
          flowcharts: {
            orderBy: {
              order: 'asc'
            }
          },
          resources: {
            where: {
              category: 'career'
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      icon,
      salaryRange,
      jobOutlook,
      keySkills,
      education
    } = body;

    // Validate required fields
    if (!title || !description || !icon || !salaryRange || !jobOutlook || !keySkills || !education) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if career path already exists
    const existingCareer = await db.careerPath.findUnique({
      where: { title }
    });

    if (existingCareer) {
      return NextResponse.json(
        { error: 'Career path with this title already exists' },
        { status: 400 }
      );
    }

    // Create career path
    const careerPath = await db.careerPath.create({
      data: {
        title,
        description,
        icon,
        salaryRange,
        jobOutlook,
        keySkills: JSON.stringify(keySkills),
        education
      }
    });

    return NextResponse.json({
      message: 'Career path created successfully',
      careerPath
    });

  } catch (error) {
    console.error('Error creating career path:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}