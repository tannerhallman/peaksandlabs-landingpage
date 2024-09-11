"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import AnimatedSection from "../components/AnimatedSection";

import { Button } from "@/components/ui/button";
import HeroCallToAction from "../components/HeroCallToAction";
import { FaBed, FaBicycle, FaBox, FaGasPump, FaKitchenSet, FaRuler, FaShower, FaSun, FaUsers } from "react-icons/fa6";
export default function Campervan() {
  return (
    <div className='space-y-16 bg-background text-dark'>
      <section className='relative h-[60vh] w-full overflow-hidden'>
        <img
          src='/campervan-hero.jpg'
          alt='Campervan exterior'
          className='h-full w-full object-cover object-center'
          width={1920}
          height={1080}
          style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        />
        <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 md:px-6'>
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight'>
            Our 2018 Dodge Ram Promaster
          </h1>
          <p className='max-w-md text-center text-lg md:text-xl mt-4'>
            Your home away from home on the open road.
          </p>
          <Link
            href='/book'
            className='mt-4 bg-primary px-8 py-3 rounded-lg text-xl hover:bg-opacity-90 transition-colors'>
            Book Now
          </Link>
        </div>
      </section>
      <Section />
      <HeroCallToAction />
    </div>
  );


  function Section() {
    return (
      <div className='flex flex-col'>
        <section className='container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-2'>
          <div className='grid gap-12'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Thoughtfully Designed for Adventure
              </h2>
              <div className='grid md:grid-cols-2 gap-8'>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <FaBed className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>
                      Comfortable Sleeping
                    </h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Our campervan features a cozy sleeping area with a
                    queen-size bed, perfect for a restful night&apos;s sleep
                    after a day of exploration.
                  </p>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <FaKitchenSet className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>
                      Fully Equipped Kitchen
                    </h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Prepare delicious meals on the go with our campervan&apos;s
                    well-stocked kitchen, complete with a two-burner stove,
                    refrigerator, and all the necessary cookware.
                  </p>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <FaShower className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>
                      Bathroom with Shower
                    </h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Stay refreshed with our campervan&apos;s built-in bathroom,
                    featuring a shower and toilet, ensuring your comfort during
                    your adventures.
                  </p>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <FaBox className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>
                      Ample Storage Space
                    </h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Our campervan offers generous storage space, allowing you to
                    bring all the essentials for your trip, from outdoor gear to
                    personal belongings.
                  </p>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <FaSun className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>Off-Grid Power</h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Stay connected and powered up with our campervan&apos;s
                    solar panels, providing a sustainable energy source for your
                    off-the-grid adventures.
                  </p>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <FaShower className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>Outdoor Shower</h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Refresh yourself after a day of hiking or swimming with our
                    campervan&apos;s convenient outdoor shower, perfect for
                    rinsing off in the great outdoors.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>Gallery</h2>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className='relative h-64'>
                    <Image
                      src={`/campervan-gallery-${i}.jpg`}
                      alt={`Campervan gallery image ${i}`}
                      layout='fill'
                      objectFit='cover'
                      className='rounded-lg object-cover aspect-[4/3]'
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Specifications
              </h2>
              <div className='grid md:grid-cols-2 gap-8'>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <FaRuler className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>Dimensions</h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Length: 20 ft, Width: 6.5 ft, Height: 9 ft (High-Roof)
                  </p>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <FaGasPump className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>Performance</h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Engine: 3.5L V6, Fuel Economy: 18-22 mpg, Gasoline: Standard
                  </p>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <FaUsers className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>Capacity</h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Sleeping Capacity: 2 people, Fresh Water: 21 gallons, Gray
                    Water: 21 gallons
                  </p>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <FaBicycle className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>Outdoor Gear</h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Optional Bike Rack, Firepit, Cornhole Boards, River Tubes...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}