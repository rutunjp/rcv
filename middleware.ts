import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Get the pathname from the request
    const pathname = request.nextUrl.pathname

    // Hide both navbar and announcement banner for AI Demystified page
    if (pathname === '/ai-demystified') {
        const response = NextResponse.next()
        response.headers.set('x-hide-nav', 'true')
        return response
    }

    return NextResponse.next()
}

// Configure the paths that should trigger this middleware
export const config = {
    matcher: [
        '/ai-demystified',
        // Add other paths that need special handling
    ]
} 