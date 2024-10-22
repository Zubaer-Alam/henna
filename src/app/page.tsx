'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, Flower, Heart, Star, Sparkles } from 'lucide-react'

import { Button } from "@/components/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/sheet"
import { Card, CardContent } from "@/components/card"
import { LoadingScreen } from '@/components/loading-screen'

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#FDF7F2] text-[#4A3728] font-serif"
    >
      <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
        <div className="pr-4 max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/henna-logo.svg"
              alt="Faria's Henna Art Logo"
              width={100}
              height={100}
              className=""
            />
            {/* <span className="text-2xl font-bold text-[#8B6E5A]">Faria's Henna</span> */}
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#8B6E5A] transition-colors relative group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#8B6E5A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-6">
                {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg hover:text-[#8B6E5A] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <section id="home" className="py-32 px-4 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.h1
              {...fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            >
              Embrace the Art of Henna
            </motion.h1>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-white drop-shadow-md"
            >
              Adorn your body with intricate designs that tell your unique story
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#8B6E5A] text-white hover:bg-[#6D5746] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="#services">Explore Our Services</a>
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#4A3728]">About Henna Art</h2>
            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6 text-lg"
            >
              <motion.p variants={fadeInUp}>
                Henna, also known as Mehndi, is an ancient form of body art originating from the Indian subcontinent. It involves creating intricate patterns on the skin using a paste made from the powdered leaves of the henna plant.
              </motion.p>
              <motion.p variants={fadeInUp}>
                At Faria's Henna, we blend traditional techniques with modern designs to create stunning, personalized henna tattoos that reflect your individual style and cultural heritage.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-8 mt-12"
                variants={staggerChildren}
              >
                {[
                  { icon: Sparkles, title: "Artistic Excellence", description: "Years of experience in creating intricate designs" },
                  { icon: Heart, title: "Personalized Service", description: "Tailored designs to match your style and personality" },
                  { icon: Flower, title: "Natural Ingredients", description: "100% organic henna for safe and beautiful results" },
                ].map((item, index) => (
                  <motion.div 
                    key={item.title} 
                    className="text-center w-full sm:w-1/3"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <div className="bg-[#FDF7F2] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <item.icon className="w-12 h-12 text-[#8B6E5A] mx-auto mb-4" />
                      <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="py-24 px-4 bg-[#FDF7F2]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#4A3728]">Our Services</h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { name: "Bridal Henna", price: "800 TK", icon: Heart, description: "Elaborate designs for your special day" },
                { name: "Party Designs", price: "400 TK", icon: Star, description: "Stylish patterns for any celebration" },
                { name: "Traditional Patterns", price: "350 TK", icon: Flower, description: "Classic motifs with cultural significance" },
                { name: "Modern Fusion", price: "450 TK", icon: Sparkles, description: "Contemporary designs with a traditional twist" },
                { name: "Kids' Henna", price: "250 TK", icon: Star, description: "Fun and safe designs for little ones" },
                { name: "Henna Workshops", price: "1000 TK", icon: Sparkles, description: "Learn the art of henna application" },
              ].map((service, index) => (
                <motion.div
                  key={service.name}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 bg-white group-hover:bg-[#F5E6D3] transition-colors duration-300">
                      <service.icon className="w-12 h-12 text-[#8B6E5A] mb-4 mx-auto" />
                      <h3 className="text-xl font-semibold mb-2 text-[#4A3728] text-center">{service.name}</h3>
                      <p className="text-[#8B6E5A] text-center mb-4">{service.price}</p>
                      <p className="text-sm text-center text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="gallery" className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#4A3728]">Henna Gallery</h2>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[...Array(8)].map((_, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  className="group relative overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Henna+Design+${index + 1}`}
                    alt={`Henna Design ${index + 1}`}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-lg font-semibold">
                      View Design
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

          <section id="contact" className="py-24 px-4 bg-[#FDF7F2]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-[#4A3728]">
                Book Your Henna Session
              </h2>
              <p className="text-xl mb-8 text-[#4A3728]">
                Transform your special moments with our exquisite henna designs
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#8B6E5A] text-white hover:bg-[#6D5746] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="tel:+8801847554007">Call +8801847554007</a>
                </Button>
              </motion.div>
              <motion.div
                className="mt-12 flex justify-center space-x-6"
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {["Facebook", "Instagram", "Twitter"].map((social) => (
                  <motion.a
                    key={social}
                    variants={fadeInUp}
                    href="#"
                    className="text-[#8B6E5A] hover:text-[#6D5746] transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="bg-[#4A3728] text-white py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg">
              &copy; 2023 Faria's Henna. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Embracing tradition, celebrating beauty
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="#" className="text-sm hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:underline">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </motion.div>
  );
}
