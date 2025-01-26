"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { SpotlightSection } from "./ui/spotlight-section"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (href: string) => {
    if (pathname !== "/" && href.includes("#")) {
      // If we're not on homepage and trying to navigate to a section
      router.push("/")
      setTimeout(() => {
      const element = document.querySelector(href.replace("/#", "#"))
        element?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else if (pathname !== "/" && !href.includes("#")) {
      // If we're not on homepage and navigating to a different page
        router.push(href)
    } else {
      // If we're on homepage
      const element = document.querySelector(href.replace("/#", "#"))
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/innocoretech",
      icon: Facebook,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/innocoretech",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/innocoretech",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/innocoretech",
      icon: Instagram,
    },
  ]

  const quickLinks = [
    { name: "Services", href: "/#services" },
    { name: "About Us", href: "/#about" },
    { name: "Team", href: "/#team" },
    { name: "Industries", href: "/#industries" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <SpotlightSection fill="#ff6600" className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <svg className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FF6B00" />
                <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="#FF6B00" strokeWidth="2" />
              </svg>
              <span className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                Innocore
              </span>
            </Link>
            <p className="text-gray-300">Empowering businesses with innovative technology solutions.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-all p-2 rounded-full 
                    hover:bg-orange-500/10 group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <motion.div
                    className="absolute inset-0 bg-orange-500/10 rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <social.icon className="h-5 w-5 relative z-10 transition-all duration-300 
                    group-hover:rotate-6 group-hover:scale-110" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-400 hover:text-orange-500 transition-all px-2 py-1 rounded-lg
                      hover:bg-orange-500/10 relative group"
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full 
                      transition-all duration-300" />
                  </motion.button>
              </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <span>Davao City, Davao Philippines, 80000</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <span>0976 562 4995 / 09615528107</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 group">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1 group-hover:rotate-6 transition-transform" />
                <motion.a 
                  href="mailto:innocoretechsolutions@gmail.com"
                  className="hover:text-orange-500 transition-colors"
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                >
                  innocoretechsolutions@gmail.com
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Newsletter - Optional */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and insights.</p>
            {/* Add newsletter form if needed */}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Innocore Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </SpotlightSection>
  )
}

