'use client'

import React from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import type { LucideIcon } from 'lucide-react'
import { Link2 } from 'lucide-react'

import { siteConfig } from '@/lib/site.config'

// Maps a social link label to an icon. Unknown labels fall back to Link2.
const socialIconByLabel: Record<string, IconType | LucideIcon> = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
}

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])
  const socialLinks = siteConfig.social.filter((s) => s.href)
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-4 md:px-6 lg:px-8">
        {/* Column 1: About */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">{siteConfig.name}</h3>
          <p className="text-[16px] font-[400] text-gray-300 leading-relaxed" id="lato-font">
            {siteConfig.tagline}
          </p>
          <p className="text-[15px] font-[400] text-gray-400 leading-relaxed" id="lato-font">
            {siteConfig.shortDescription}
          </p>
        </div>

        {/* Column 2: Quick Links + Legal */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Quick Links</h3>

          <ul className="space-y-2 text-sm" id="lato-font">
            {[
              { name: 'Home', href: '/#hero' },
              { name: 'About', href: '/#about' },
              { name: 'Skills', href: '/#skills' },
              { name: 'Experience', href: '/#experience' },
              { name: 'FAQ', href: '/#faq' },
              { name: 'Contact', href: '/#team' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <h4 className="text-[28px] text-white">Legal</h4>
            <ul className="space-y-1 text-sm" id="lato-font">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Cookie Policy', href: '/cookie-policy' },
                { name: 'Terms of Service', href: '/terms-of-service' },
                {
                  name: 'Vulnerability Disclosure Policy',
                  href: '/vulnerability-disclosure-policy',
                },
                { name: 'Security Acknowledgements', href: '/security-acknowledgements' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Contact */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Contact</h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">Email</p>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="font-[500] text-[15px] hover:text-cyan-400 transition-colors break-all"
                  id="aria-font"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {socialLinks.map(({ href, label }) => {
                const Icon = socialIconByLabel[label] ?? Link2
                return (
                  <a
                    key={`${label}-${href}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="mt-12 py-6 px-4 border-t border-gray-800 text-center text-[18px] font-[500] w-full"
        id="aria-font"
      >
        <p>© {currentYear} J. Douglas Works. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
