import { NextResponse } from 'next/server'

export function middleware(request) {
  // Check if user is authenticated
  const authToken = request.cookies.get('acts-auth')
  const isAuthPage = request.nextUrl.pathname === '/auth'
  
  // If not authenticated and not on auth page, redirect to auth
  if (!authToken && !isAuthPage) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth'
    return NextResponse.redirect(url)
  }
  
  // If authenticated and on auth page, redirect to home
  if (authToken && isAuthPage) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}