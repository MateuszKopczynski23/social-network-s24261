import { NextRequest, NextResponse } from 'next/server';
import startsWith from 'lodash/startsWith';

const publicPaths = ['/login', '/register'];
const adminPaths = ['/admin'];

export function middleware(request: NextRequest) {
  const hashedUser = request.cookies.get('user')?.value || '';
  const { pathname } = request.nextUrl;

  if (!hashedUser && publicPaths.some((path) => startsWith(pathname, path))) {
    return NextResponse.next();
  }

  if (!hashedUser && !publicPaths.some((path) => startsWith(pathname, path))) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (hashedUser && publicPaths.some((path) => startsWith(pathname, path))) {
    return NextResponse.redirect(new URL('/user/home', request.url));
  }

  const user = JSON.parse(hashedUser);

  if (
    hashedUser &&
    adminPaths.some((path) => startsWith(pathname, path)) &&
    !user.isAdmin
  ) {
    return NextResponse.redirect(new URL('/user/home', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/user/:path*', '/admin/:path*', '/login', '/register'],
};
