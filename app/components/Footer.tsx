import { MessageCircle, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Subtle glow */}
      <div
        className="absolute inset-0 -z-10
        bg-[radial-gradient(ellipse_at_left,rgba(var(--brand-primary),0.12),transparent_60%)]"
      />

      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">

          {/* Brand – Left */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Image
              src="/midas_star_logo2.png"
              alt="Midas Star Logo"
              width={150}
              height={50}
              className="object-contain"
            />

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Empowering businesses with innovative solutions.
              <br />
              Let's create something amazing together.
            </p>

            <div className="flex items-center gap-4 text-white/70">
            <Link href="#">
            <MessageCircle className="w-5 h-5 hover:text-white transition cursor-pointer" />
            </Link>
              <Link href="#">
              <Instagram className="w-5 h-5 hover:text-white transition cursor-pointer" />
              </Link>
              <Link href="#">
              <Linkedin className="w-5 h-5 hover:text-white transition cursor-pointer" />
              </Link>
              <Link href="#">
              <Twitter className="w-5 h-5 hover:text-white transition cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Sitemap – Slightly right of center */}
          <div className="md:col-span-1 md:col-start-3 flex flex-col gap-4">
            <h4 className="text-lg font-medium">Sitemap</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white transition cursor-pointer">Home</li>
              <li className="hover:text-white transition cursor-pointer">
                Website Development
              </li>
              <li className="hover:text-white transition cursor-pointer">
                CRM Service
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Real Estate API
              </li>
            </ul>
          </div>

          {/* Contact – Right aligned */}
          <div className="md:col-span-1 md:col-start-5 flex flex-col gap-4">
            <h4 className="text-lg font-medium">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white transition cursor-pointer">
                contact@midasstar.com
              </li>
              <li className="hover:text-white transition cursor-pointer">
                +12345678912
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-white/50">
          © 2025 Midas Star. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
