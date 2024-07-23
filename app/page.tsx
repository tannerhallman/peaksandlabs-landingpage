'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import anime from 'animejs'
import AnimatedText from './components/AnimatedText'
import AnimatedSection from './components/AnimatedSection'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      anime({
        targets: heroRef.current,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutExpo'
      })
    }
  }, [])

  return (
    <div className="space-y-16 bg-background text-dark">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center">
        <Image
          src="/hero-bg.jpg"
          alt="Campervan in nature"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="relative z-10 text-center text-white bg-dark bg-opacity-50 p-8 rounded-lg">
          <AnimatedText 
            text="Adventure Awaits with Peaks and Labs Campervan Co." 
            className="text-5xl font-bold mb-4"
          />
          <p className="text-xl mb-8">Experience the freedom of the open road in our fully-equipped 2018 Dodge Ram Promaster campervan.</p>
          <Link 
            href="/booking" 
            className="bg-primary text-white px-8 py-4 rounded-lg text-xl hover:bg-opacity-90 transition-colors"
          >
            Book Your Adventure
          </Link>
        </div>
      </section>

      {/* About Our Campervan */}
      <AnimatedSection className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-6">Our Campervan</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <Image
              src="/campervan.jpg"
              alt="Our Campervan"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">2018 Dodge Ram Promaster</h3>
            <p className="mb-4">Our fully-equipped campervan is perfect for your next adventure. With a comfortable interior and all the amenities you need, you'll have the freedom to explore in style.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Sleeps up to 2 adults comfortably</li>
              <li>Full kitchen with refrigerator, stove, and sink</li>
              <li>Bathroom with shower and toilet</li>
              <li>Solar power and hookups for extended trips</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Features */}
      <AnimatedSection className="bg-alternative py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Comfort on Wheels</h3>
              <p>Our campervan is designed for maximum comfort, ensuring you have a cozy home away from home.</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-secondary">All-Season Adventures</h3>
              <p>Equipped for both summer and winter trips, our van is perfect for year-round exploration.</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Easy Booking</h3>
              <p>Our simple online booking process makes it easy to plan your next getaway.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Meet the Owners */}
      <AnimatedSection className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Meet the Owners</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="text-center">
            <Image
              src="/owners.jpg"
              alt="Tanner and Allison"
              width={300}
              height={300}
              className="rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-secondary">Tanner & Allison</h3>
            <p className="max-w-md">We're passionate about travel and the great outdoors. Our goal is to share the joy of van life with fellow adventurers.</p>
          </div>
          <div className="text-center">
            <Image
              src="/dogs.jpg"
              alt="Boone and Berkely"
              width={300}
              height={300}
              className="rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-secondary">Boone & Berkely</h3>
            <p className="max-w-md">Our furry companions and unofficial mascots. They love adventure as much as we do!</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8">Book our campervan today and start exploring!</p>
          <Link 
            href="/booking" 
            className="bg-secondary text-white px-8 py-3 rounded-lg text-xl hover:bg-opacity-90 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}