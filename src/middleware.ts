import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/anime")) {
    return NextResponse.redirect(new URL("/anime/21", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/anime"],
};
