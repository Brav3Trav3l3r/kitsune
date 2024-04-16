import { authMiddleware } from "@clerk/nextjs";
import { type NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   console.log("middleware ran");
//   return NextResponse.next();
// }

export default authMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: ["/", "/anime/:path*"],
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};
