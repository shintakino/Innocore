"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import { MobileSidebar } from "./MobileSidebar"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

const navItems = [
  {
    name: "About",
    href: "/#about",
    dropdownItems: [
      { name: "Mission", href: "/#mission" },
      { name: "Vision", href: "/#vision" },
      { name: "Team", href: "/#team" },
      { name: "Why Choose Us", href: "/#why-choose-us" },
    ],
  },
  { name: "Services", href: "/#services" },
  { name: "Industries", href: "/#industries" },
  { name: "Process", href: "/#process" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (pathname !== "/") {
      router.push(href)
    } else {
      const element = document.querySelector(href.replace("/#", "#"))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMobileSidebarOpen(false)
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <header
          className={`
            mx-auto rounded-full transition-all duration-300 backdrop-blur-md
            ${isScrolled ? "bg-gray-900/95 shadow-lg shadow-black/10" : "bg-gray-900/70"}
            border border-gray-800/50
            max-w-7xl
          `}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center space-x-2 group">
                  <motion.svg 
                    className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <motion.path 
                      d="M12 2L2 7L12 12L22 7L12 2Z" 
                      fill="#FF6B00"
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.path 
                      d="M2 17L12 22L22 17M2 12L12 17L22 12" 
                      stroke="#FF6B00" 
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </motion.svg>
                  <span className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    Innocore
                  </span>
                </Link>
              </div>

              <nav className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative px-3"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-orange-400 
                        transition-colors py-2 relative group"
                      onClick={(e) => handleNavigation(e, item.href)}
                    >
                      <span>{item.name}</span>
                      {item.dropdownItems && (
                        <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      )}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 
                        transition-transform duration-300 origin-left" />
                    </Link>

                    {item.dropdownItems && activeDropdown === item.name && (
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-48 rounded-xl bg-gray-900/95 backdrop-blur-md 
                            border border-orange-500/20 shadow-lg shadow-orange-500/10 py-2"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-orange-500/10 hover:text-white 
                                transition-colors relative group"
                              onClick={(e) => handleNavigation(e, dropdownItem.href)}
                            >
                              <span className="relative z-10">{dropdownItem.name}</span>
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                layoutId="highlight"
                              />
                            </Link>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 
                      text-white rounded-full px-6 py-2 font-medium
                      shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]
                      border border-orange-400/20 backdrop-blur-sm
                      transition-all duration-300 ease-out
                      group relative overflow-hidden"
                    onClick={() => router.push("/contact")}
                  >
                    <span className="relative z-10">Contact us</span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                      bg-gradient-to-r from-orange-500/10 via-orange-500/20 to-orange-500/10" 
                    />
                  </Button>
                </motion.div>
              </div>

              <div className="flex md:hidden">
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-colors"
                  onClick={() => setIsMobileSidebarOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <MobileSidebar 
        isOpen={isMobileSidebarOpen} 
        onClose={() => setIsMobileSidebarOpen(false)} 
        navItems={navItems}
        className="w-[35vw] min-w-[280px]"
      />
    </>
  )
}

