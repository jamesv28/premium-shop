"use client";
import { APP_NAME } from "@/lib/globals";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority={true}
      />
      <div className="p-6 rounded-lg shadow-md text-center w-1/3">
        <h1 className="text-bold mb-4 text-3xl">404 - Page Not Found</h1>
        <p className="text-destructive">
          The page you requested is not available.
        </p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
