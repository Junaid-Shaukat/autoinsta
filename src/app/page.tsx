'use client'

import Link from "next/link"
import { useState, useEffect } from 'react'
import Image from "next/image"
import { Instagram, MessageCircle, BarChart3, Workflow, ArrowRight, Check, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function LandingPage() {


  // Define the image data array
const imageData = [
  { src: "/image1.jpg", alt: "Automated DM responses" },
  { src: "/image2.jpg", alt: "Engagement analytics dashboard" },
  { src: "/image3.jpg", alt: "Custom workflow builder" },
  { src: "/image4.jpg", alt: "Integration with Instagram" },
]

// Define the features data array
const featuresData = [
  {
    icon: MessageCircle,
    title: "Smart DM Automation",
    description: "Automatically respond to DMs with customizable templates and intelligent workflows.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverBgColor: "hover:bg-blue-200",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Track engagement metrics and get actionable insights to optimize your strategy.",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
    hoverBgColor: "hover:bg-indigo-200",
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description: "Create personalized automation workflows that match your engagement style.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    hoverBgColor: "hover:bg-purple-200",
  },
]

   const pricingPlans = [
    {
      title: "Basic Plan",
      description: "Perfect for small businesses",
      price: "$19/mo",
      features: [
        "Up to 1,000 automated DMs",
        "Basic analytics dashboard",
        "5 custom templates"
      ]
    },
    {
      title: "Pro Plan",
      description: "For growing businesses",
      price: "$29/mo",
      features: [
        "Unlimited automated DMs",
        "Advanced analytics & reporting",
        "Unlimited templates",
        "Priority support"
      ]
    }
  ];
  
const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]


const [activeSection, setActiveSection] = useState('')
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    const sections = navLinks.map(link => document.querySelector(link.href))
    const scrollPosition = window.scrollY + 100 // Offset for the navbar height

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i] as HTMLElement
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(navLinks[i].href)
        break
      }
    }
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

  

  return (
    <div className="flex flex-col min-h-screen bg-white">
   <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-b from-white via-white/80 to-white/0 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">AutoInsta</span>
          </Link>
          
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium hover:text-primary transition-colors relative py-2
                    ${activeSection === link.href ? 'text-primary' : 'text-gray-600'}
                    group`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ease-out
                    ${activeSection === link.href ? 'scale-x-100' : 'scale-x-0'}
                    group-hover:scale-x-100`}
                  />
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" >
            <Link href="/dashboard">Login</Link>
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/dashboard">Sign Up</Link>


            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <nav className="flex flex-col px-4 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium py-3 hover:text-primary transition-colors
                    ${activeSection === link.href ? 'text-primary' : 'text-gray-600'}`}
                  onClick={(e) => {
                    handleLinkClick(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 py-3">
                <Button   size="sm"> 
                  <Link href="/dashboard">Login</Link>
                  </Button>
                <Button  size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/signup">Sign up</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>

    <main className="flex-1  pt-5 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] grid-rows-[repeat(auto-fill,minmax(20px,1fr))] opacity-10 transition-opacity duration-300 ease-in-out hover:opacity-20">
        {[...Array(1000)].map((_, i) => (
          
          <div key={i} className="border-[0.5px] border-gray-200" />
        ))}
      </div>
      <section className="w-full py-20 md:py-32 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-6 max-w-[800px]">
              <div className="mx-auto border rounded-lg cursor-pointer p-6 bg-white/50 backdrop-blur-sm">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl group">
                  <span className="bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                    Automate Your Instagram Engagement Effortlessly
                  </span>
                </h1>
              </div>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Transform the way you connect with your audience on Instagram. With AutoInsta, streamline your DMs and comments to boost engagement and save valuable time.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white transform transition-transform hover:-translate-y-1 group w-auto" 
                  size="lg"
                >
                 <Link href="/signup">Get Started</Link>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-blue-600 text-blue-600 transform transition-transform hover:-translate-y-1 hover:bg-blue-50 "
                >
                  Try for Free
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl">
              {imageData.map((image, index) => (
                <div
                  key={index}
                  className="w-[calc(25%-16px)] aspect-square relative overflow-hidden rounded-3xl bg-gray-100 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section id="features" className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 px-6 md:px-10 lg:grid-cols-3">
            {featuresData.map((feature, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 text-center">
                <div className={`p-3 rounded-2xl ${feature.bgColor} transition-all duration-300 ease-in-out ${feature.hoverBgColor} hover:scale-110`}>
                  <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

    
      <main className="flex-1">
        <section id="pricing" className="w-full py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className="relative overflow-hidden flex flex-col">
                  <div>
                    <CardHeader>
                      <CardTitle>{plan.title}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold mb-6">{plan.price}</div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="mr-2 h-5 w-5 text-green-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                  <CardFooter className="mt-auto">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Got questions? We've got answers.
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is AutoInsta safe to use?</AccordionTrigger>
                  <AccordionContent>
                    Yes! AutoInsta follows all of Instagram's guidelines and best practices for automation. We use official
                    APIs and maintain strict security standards to protect your account.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does the DM automation work?</AccordionTrigger>
                  <AccordionContent>
                    AutoInsta uses smart templates and triggers to automatically respond to DMs based on keywords and user
                    behavior. You have full control over all responses and automation rules.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I try AutoInsta for free?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 14-day free trial with full access to all features. No credit card required to get started.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-gray-50">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center">
              <Instagram className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl ml-2">AutoInsta</span>
            </div>
            <nav className="flex gap-8">
              <Link className="text-sm hover:text-blue-600 transition-colors" href="#">
                About
              </Link>
              <Link className="text-sm hover:text-blue-600 transition-colors" href="#">
                Features
              </Link>
              <Link className="text-sm hover:text-blue-600 transition-colors" href="#">
                Pricing
              </Link>
              <Link className="text-sm hover:text-blue-600 transition-colors" href="#">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500">
              © 2024 AutoInsta. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link className="text-sm text-gray-500 hover:text-blue-600 transition-colors" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm text-gray-500 hover:text-blue-600 transition-colors" href="#">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

