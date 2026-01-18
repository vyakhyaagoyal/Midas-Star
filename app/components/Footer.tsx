import { MessageCircle, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(34,197,94,0.12),transparent_60%)]" />

      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image src='/midas_star_logo2.png' alt="Midas Star Logo" width={150} height={50}
            className="mb-4" />

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Empowering businesses with innovative solutions.
              <br />
              Let's create something amazing together.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5 text-white/70">
                  <MessageCircle className="w-4 h-4 hover:text-white cursor-pointer" />
              <Instagram className="w-4 h-4 hover:text-white cursor-pointer" />
              <Linkedin className="w-4 h-4 hover:text-white cursor-pointer" />
              <Twitter className="w-4 h-4 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-sm font-medium mb-4">Sitemap</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">
                Website Development
              </li>
              <li className="hover:text-white cursor-pointer">CRM Service</li>
              <li className="hover:text-white cursor-pointer">
                Real Estate API
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">
                contact@midasstar.com
              </li>
              <li className="hover:text-white cursor-pointer">
                +12345678912
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-white/50">
          ©2025 Midas Star. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
