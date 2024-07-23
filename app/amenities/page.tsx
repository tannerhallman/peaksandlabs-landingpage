'use client'

import AnimatedText from '../components/AnimatedText'
import AnimatedSection from '../components/AnimatedSection'
import Image from 'next/image'

export default function Amenities() {
  const amenities = {
    Bathroom: [
      'Inside shower', 'Toilet', 'Toilet paper', 'Bath towels', 'Toiletries', 'Hot water'
    ],
    Kitchen: [
      'Potable water', 'Refrigerator', 'Stove / range', 'Kitchen sink', 'Coffee maker',
      'Cooking basics', 'Pots and pans', 'Dishes and utensils'
    ],
    Climate: ['Ceiling fan', 'Heating', 'Air conditioning'],
    'Hookups and power': [
      'Water hookup', 'Electric hookup', 'Sewer hookup', 'Solar', 'Inverter'
    ],
    Other: ['Backup camera', 'TV / DVD', 'Radio', 'Extra storage'],
    'Trip readiness': [
      'Pillow, sheets, and blankets for each bed',
      'Cookware and utensils for your kitchen setup',
      'Bathroom essentials, such as soap, towels, and toilet paper'
    ]
  }

  return (
    <div className="space-y-16 bg-background text-dark">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/amenities-hero.jpg"
          alt="Campervan Amenities"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="relative z-10 text-center text-white bg-dark bg-opacity-50 p-8 rounded-lg">
          <AnimatedText 
            text="Campervan Amenities" 
            className="text-4xl font-bold mb-4"
          />
          <p className="text-xl">Everything you need for a comfortable journey</p>
        </div>
      </section>

      {/* Amenities List */}
      <AnimatedSection className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8">Our Comprehensive Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(amenities).map(([category, items]) => (
            <div key={category} className="bg-alternative p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-4">{category}</h3>
              <ul className="list-disc list-inside space-y-2">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Additional Information */}
      <AnimatedSection className="bg-alternative py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Fully Stocked Kitchen</h3>
              <p>Our kitchen is equipped with everything you need to prepare delicious meals on the road.</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Comfortable Living Space</h3>
              <p>Relax and unwind in our cozy living area, perfect for lounging after a day of adventure.</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Off-Grid Capabilities</h3>
              <p>With solar power and ample water storage, you can enjoy extended trips off the beaten path.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}