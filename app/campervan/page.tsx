'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedText from '../components/AnimatedText'
import AnimatedSection from '../components/AnimatedSection'

export default function Campervan() {
  return (
    <div className="space-y-16 bg-background text-dark">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/campervan-hero.jpg"
          alt="Our Campervan"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="relative z-10 text-center text-white bg-dark bg-opacity-50 p-8 rounded-lg">
          <AnimatedText 
            text="Our 2018 Dodge Ram Promaster" 
            className="text-4xl font-bold mb-4"
          />
          <p className="text-xl">Your home away from home on the open road</p>
        </div>
      </section>

      {/* Campervan Details */}
      <AnimatedSection className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8">Campervan Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-4">Interior</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Comfortable sleeping area for two adults</li>
              <li>Fully equipped kitchen with refrigerator, stove, and sink</li>
              <li>Bathroom with shower and toilet</li>
              <li>Plenty of storage space for all your gear</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-4">Exterior</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Solar panels for off-grid power</li>
              <li>Outdoor shower</li>
              <li>Bike rack</li>
              <li>Awning for shade and outdoor living</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Specifications */}
      <AnimatedSection className="bg-alternative py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Dimensions</h3>
              <p>Length: 19'6"</p>
              <p>Width: 6'3"</p>
              <p>Height: 8'1"</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Performance</h3>
              <p>Engine: 3.6L V6</p>
              <p>Fuel Efficiency: 18-22 mpg</p>
              <p>Fuel Tank: 24 gallons</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Capacity</h3>
              <p>Sleeps: 2 adults</p>
              <p>Fresh Water: 20 gallons</p>
              <p>Gray Water: 20 gallons</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery */}
      <AnimatedSection className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative h-64">
              <Image
                src={`/campervan-gallery-${i}.jpg`}
                alt={`Campervan gallery image ${i}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8">Book our campervan today and start your adventure!</p>
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