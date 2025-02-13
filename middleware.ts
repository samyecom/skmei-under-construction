// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for the home page, or static files like images, CSS, JS, etc.
  if (
    request.nextUrl.pathname === '/' || // Do not redirect the home page
    request.nextUrl.pathname.startsWith('/_next') || // Do not redirect Next.js assets
    request.nextUrl.pathname.startsWith('/favicon.ico') || // Do not redirect favicon
    request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|css|js|svg|ico)$/) // Do not redirect image files or assets
  ) {
    return NextResponse.next();
  }

  // Redirect all other requests to the home page
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'], // This matches all routes except for _next and favicon.ico
};
