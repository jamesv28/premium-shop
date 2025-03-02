"use client";
import { ShoppingCartIcon, UserIcon } from "lucide-react";
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EllipsisVerticalIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useTheme } from "next-themes";

const Menu = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCartIcon />
            Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon />
            Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden ">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVerticalIcon />
          </SheetTrigger>
          <SheetContent
            className={`flex flex-col align-start ${
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCartIcon /> Cart
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
