"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"

interface NavItem {
  name: string
  href: string
  dropdownItems?: { name: string; href: string }[]
}

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
  className?: string
}

export function MobileSidebar({ isOpen, onClose, navItems, className }: MobileSidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleNavigation = (href: string) => {
    onClose() // Close sidebar first
    
    setTimeout(() => {
      if (pathname !== "/" && href.includes("#")) {
        // If we're not on homepage and trying to navigate to a section
        router.push("/")
        setTimeout(() => {
          const element = document.querySelector(href.replace("/#", "#"))
          element?.scrollIntoView({ behavior: "smooth" })
        }, 100)
      } else if (pathname !== "/" && !href.includes("#")) {
        router.push(href)
      } else {
        const element = document.querySelector(href.replace("/#", "#"))
        element?.scrollIntoView({ behavior: "smooth" })
      }
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className={`fixed right-0 top-0 bottom-0 bg-gray-900/95 backdrop-blur-md border-l 
              border-orange-500/20 shadow-2xl z-50 overflow-y-auto ${className}`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
                  <svg className="h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FF6B00" />
                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="#FF6B00" strokeWidth="2" />
                  </svg>
                  <span className="text-xl font-bold text-white">Innocore</span>
                </Link>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-orange-400 hover:bg-orange-500/10"
                  onClick={onClose}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <button
                      className="w-full flex items-center justify-between px-4 py-2 text-gray-300 hover:text-white 
                        hover:bg-orange-500/10 rounded-lg transition-colors"
                      onClick={() => {
                        if (item.dropdownItems) {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        } else {
                          handleNavigation(item.href)
                        }
                      }}
                    >
                      <span>{item.name}</span>
                      {item.dropdownItems && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {item.dropdownItems && activeDropdown === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden ml-4"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <button
                              key={dropdownItem.name}
                              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white 
                                hover:bg-orange-500/10 rounded-lg transition-colors"
                              onClick={() => handleNavigation(dropdownItem.href)}
                            >
                              {dropdownItem.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              <div className="mt-8">
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 
                    text-white rounded-full py-6 font-medium
                    shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]
                    border border-orange-400/20 backdrop-blur-sm
                    transition-all duration-300 ease-out"
                  onClick={() => {
                    onClose()
                    setTimeout(() => router.push("/contact"), 300)
                  }}
                >
                  Contact us
                </Button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

