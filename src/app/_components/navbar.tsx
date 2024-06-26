import { UserButton, auth } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import MenuDropdown from "./menu-dropdown";
import NavLinks from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
  const { userId } = auth();

  return (
    <header className="border-b bg-card">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-20 items-center justify-between">
          <div className="flex gap-3 md:gap-4 items-center">
            <Link className="" href="/">
              <span className="sr-only">Home</span>
              <div className="w-16 h-16">
                <img
                  src={"/image/logo.png"}
                  alt="Kitsune logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>

            <Link href={"/search"} className="block text-muted-foreground">
              <Button variant="ghost" size="icon">
                <Search />
              </Button>
            </Link>
          </div>

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            {!userId ? (
              <div className="sm:flex sm:gap-4">
                <Link href="/sign-in">
                  <Button>Login</Button>
                </Link>

                <div className="hidden sm:flex">
                  <Link href={"/sign-up"}>
                    <Button variant={"secondary"}>Register</Button>
                  </Link>
                </div>
              </div>
            ) : (
              <UserButton afterSignOutUrl="/" />
            )}

            <a
              target="_blank"
              href="https://github.com/Brav3Trav3l3r/zen-anime"
              className="hidden md:block"
            >
              <FaGithub size={32} />
            </a>
            <ThemeToggle />

            <div className="block md:hidden">
              <MenuDropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
