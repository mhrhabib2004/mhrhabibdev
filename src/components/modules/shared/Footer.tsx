"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t py-8 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
        
        {/* CTA Button */}
        <Button variant="link" size="sm" className="text-primary" asChild>
          <Link href="/contact">
            Get in touch →
          </Link>
        </Button>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground text-center">
          © {currentYear} Md. Habibur Rahman Habib. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
