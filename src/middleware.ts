export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    // "/((?!register|api|login).*)",
    "/dashboard/:path*",
    "/new_project",
    "/projects/:path*",
  ],
};
