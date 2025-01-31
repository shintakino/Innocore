"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import { NeonText } from "@/components/NeonText"

const team = [
  {
    name: "KENNY WALTER DIOLOLA",
    role: "Founder",
    image: "/placeholder.svg?height=600&width=400",
    linkedin: "https://www.linkedin.com/in/kenny-walter-diolola-288180172/?originalSubdomain=ph",
    twitter: "https://twitter.com/kennydiolola",
    github: "https://github.com/KennyNeutron"
  },
  {
    name: "KRISLER LEE TADEO",
    role: "FOUNDER",
    image: "/placeholder.svg?height=600&width=400",
    linkedin: "https://www.linkedin.com/in/krisler-lee-tadeo/",
    twitter: "https://twitter.com/krisler_tadeo",
    github: "https://github.com/krisler-lee"
  },
  {
    name: "David Kim",
    role: "Project Manager",
    image: "/placeholder.svg?height=600&width=400",
    linkedin: "https://www.linkedin.com/in/david-kim/",
    twitter: "https://twitter.com/david_kim",
    github: "https://github.com/david_kim"
  },
]

export default function Team() {
  return (
    <section className="relative section-background py-24 sm:py-32" id="team">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Gradient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-orange-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
          <NeonText>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-4"
            >
              Meet With Our Team Member
            </motion.h2>
          </NeonText>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Our Measure Your Success By The Number Of Personal And Professional Milestones You Accomplish With Our
            System.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="translate-y-4 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex justify-center space-x-4 mb-4">
                      {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors">
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors">
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-orange-400">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
