import React, { useEffect, useState } from "react"
import {
  Menu,
  X,
  ChevronRight,
  Code,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Brain,
  Building2,
  Factory,
  Briefcase,
  HeartHandshake,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  GraduationCap,
  Award,
  Users,
  Clock,
  Globe2,
} from "lucide-react"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: <Code size={32} />,
      title: "Custom Software Development",
      description: "Tailored solutions to meet your unique business needs",
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure services",
    },
    {
      icon: <Database size={32} />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
    },
    {
      icon: <Shield size={32} />,
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security measures",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
    },
    {
      icon: <Brain size={32} />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions for complex problems",
    },
  ]

  const founders = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      bio: "With 15+ years in tech leadership, Sarah drives innovation and strategic growth at Innocore. Her vision shapes our approach to delivering cutting-edge solutions.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "James Rodriguez",
      role: "CTO & Co-founder",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      bio: "James brings deep technical expertise and 12+ years of experience in software architecture. He leads our technical initiatives and innovation strategies.",
      social: { linkedin: "#", twitter: "#" },
    },
  ]

  const industries = [
    {
      icon: <Building2 size={32} />,
      name: "Finance",
      description: "Digital transformation for financial institutions",
    },
    {
      icon: <Factory size={32} />,
      name: "Manufacturing",
      description: "Smart manufacturing solutions and IoT integration",
    },
    { icon: <Briefcase size={32} />, name: "Enterprise", description: "Enterprise-grade software solutions" },
    {
      icon: <HeartHandshake size={32} />,
      name: "Healthcare",
      description: "Innovative healthcare technology solutions",
    },
    { icon: <GraduationCap size={32} />, name: "Education", description: "Innovative healthcare technology solutions" },
  ]

  const process = [
    { step: 1, title: "Discovery", description: "Understanding your needs and objectives" },
    { step: 2, title: "Strategy", description: "Developing a comprehensive solution plan" },
    { step: 3, title: "Development", description: "Building your solution with precision" },
    { step: 4, title: "Testing", description: "Ensuring quality and performance" },
    { step: 5, title: "Launch", description: "Deploying and supporting your solution" },
  ]
  const whyChooseUs = [
    {
      icon: <Award size={32} />,
      title: "Industry Excellence",
      description: "15+ years of proven expertise in delivering cutting-edge solutions",
      metric: "98% Client Satisfaction",
    },
    {
      icon: <Users size={32} />,
      title: "Expert Team",
      description: "Highly skilled professionals with diverse technical backgrounds",
      metric: "150+ Tech Experts",
    },
    {
      icon: <Clock size={32} />,
      title: "Timely Delivery",
      description: "Consistent track record of on-time project completion",
      metric: "95% On-Time Delivery",
    },
    {
      icon: <Globe2 size={32} />,
      title: "Global Reach",
      description: "Serving clients across multiple industries worldwide",
      metric: "20+ Countries",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-[#FF6B35]" />
              <span className="ml-2 text-xl font-bold text-white">Innocore</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-[#FF6B35]">
                Services
              </a>
              <a href="#about" className="text-gray-300 hover:text-[#FF6B35]">
                About
              </a>
              <a href="#team" className="text-gray-300 hover:text-[#FF6B35]">
                Team
              </a>
              <a
                href="#contact"
                className="bg-[#FF6B35] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
              >
                Contact Us
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-[#FF6B35]">
                Services
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-[#FF6B35]">
                About
              </a>
              <a href="#team" className="block px-3 py-2 text-gray-300 hover:text-[#FF6B35]">
                Team
              </a>
              <a href="#contact" className="block px-3 py-2 text-[#FF6B35]">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-br from-gray-900 via-orange-900 to-orange-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Transforming Ideas into
                <span className="gradient-text"> Digital Reality</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                We combine innovation with expertise to deliver cutting-edge technology solutions that drive your
                business forward.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-[#FF6B35] text-white rounded-md hover:bg-opacity-90 transition-all"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="Technology Innovation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400">Comprehensive solutions for your digital transformation journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600"
              >
                <div className="text-[#FF6B35] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="team" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Founders</h2>
            <p className="text-gray-400">The visionaries behind Innocore Tech Solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-white text-center mb-2">{founder.name}</h3>
                <p className="text-[#FF6B35] text-center mb-4">{founder.role}</p>
                <p className="text-gray-300 text-center mb-6">{founder.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={founder.social.linkedin} className="text-gray-400 hover:text-[#FF6B35]">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={founder.social.twitter} className="text-gray-400 hover:text-[#FF6B35]">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About Innocore</h2>

              {/* Mission Statement */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#FF6B35] mb-3">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses through innovative technology solutions that drive growth, efficiency, and
                  digital transformation, while delivering exceptional value to our clients and making a positive impact
                  on society.
                </p>
              </div>

              {/* Vision Statement */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#FF6B35] mb-3">Our Vision</h3>
                <p className="text-gray-300">
                  To be the global leader in transformative technology solutions, recognized for our innovation,
                  excellence, and commitment to creating sustainable digital futures for businesses worldwide.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#FF6B35] mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Innovation First</h3>
                    <p className="text-gray-300">Pushing boundaries with cutting-edge solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#FF6B35] mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Client Success</h3>
                    <p className="text-gray-300">Dedicated to delivering exceptional results</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#FF6B35] mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Global Impact</h3>
                    <p className="text-gray-300">Serving clients across 20+ countries</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-gray-400">Delivering specialized solutions across diverse sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-[#FF6B35] mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-orange-gradient">
        {" "}
        {/* Updated background class */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2> {/* Updated text color */}
            <p className="text-gray-100">Delivering excellence through innovation and expertise</p>{" "}
            {/* Updated text color */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-[#FF6B35] mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-[#FF6B35] font-bold text-lg">{item.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-400">A streamlined approach to delivering excellence</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold mb-4 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Rocket className="h-8 w-8 text-[#FF6B35]" />
                <span className="ml-2 text-xl font-bold">Innocore</span>
              </div>
              <p className="text-gray-400">Transforming businesses through innovative technology solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-gray-400 hover:text-white">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@innocore.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Tech Street, Innovation City</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-opacity-90 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Innocore Tech Solutions. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#FF6B35]">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B35]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B35]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B35]">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

