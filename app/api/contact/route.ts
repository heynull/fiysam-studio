import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    { error: 'Contact form delivery is not configured yet. Please check back later.' },
    { status: 503 }
  );
}
