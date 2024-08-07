"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import AnimatedSection from "../components/AnimatedSection";

import { Button } from "@/components/ui/button";
import HeroCallToAction from "../components/HeroCallToAction";
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
            href='/booking'
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
                    <BedIcon className='w-8 h-8' />
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
                    <UtensilsIcon className='w-8 h-8' />
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
                    <ShowerHeadIcon className='w-8 h-8' />
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
                    <StoreIcon className='w-8 h-8' />
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
                    <SunIcon className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>Off-Grid Power</h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Stay connected and powered up with our campervan&apos;s solar
                    panels, providing a sustainable energy source for your
                    off-the-grid adventures.
                  </p>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <ShowerHeadIcon className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>Outdoor Shower</h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Refresh yourself after a day of hiking or swimming with our
                    campervan&apos;s convenient outdoor shower, perfect for rinsing
                    off in the great outdoors.
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
                    <RulerIcon className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>Dimensions</h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Length: 20 ft, Width: 6.5 ft, Height: 9 ft (High-Roof)
                  </p>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <FuelIcon className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>Performance</h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Engine: 3.5L V6, Fuel Economy: 18-22 mpg, Gasoline: Standard
                  </p>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <UsersIcon className='w-8 h-8' />
                    <h3 className='text-xl font-semibold'>Capacity</h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Sleeping Capacity: 2 people, Fresh Water: 21 gallons, Gray
                    Water: 21 gallons
                  </p>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <BikeIcon className='w-8 h-8' />
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

function BedIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M2 4v16' />
      <path d='M2 8h18a2 2 0 0 1 2 2v10' />
      <path d='M2 17h20' />
      <path d='M6 8v9' />
    </svg>
  );
}

function BikeIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <circle cx='18.5' cy='17.5' r='3.5' />
      <circle cx='5.5' cy='17.5' r='3.5' />
      <circle cx='15' cy='5' r='1' />
      <path d='M12 17.5V14l-3-3 4-3 2 3h2' />
    </svg>
  );
}

function FuelIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <line x1='3' x2='15' y1='22' y2='22' />
      <line x1='4' x2='14' y1='9' y2='9' />
      <path d='M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18' />
      <path d='M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5' />
    </svg>
  );
}

function RulerIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z' />
      <path d='m14.5 12.5 2-2' />
      <path d='m11.5 9.5 2-2' />
      <path d='m8.5 6.5 2-2' />
      <path d='m17.5 15.5 2-2' />
    </svg>
  );
}

function ShowerHeadIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='m4 4 2.5 2.5' />
      <path d='M13.5 6.5a4.95 4.95 0 0 0-7 7' />
      <path d='M15 5 5 15' />
      <path d='M14 17v.01' />
      <path d='M10 16v.01' />
      <path d='M13 13v.01' />
      <path d='M16 10v.01' />
      <path d='M11 20v.01' />
      <path d='M17 14v.01' />
      <path d='M20 11v.01' />
    </svg>
  );
}

function StoreIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7' />
      <path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' />
      <path d='M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4' />
      <path d='M2 7h20' />
      <path d='M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7' />
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <circle cx='12' cy='12' r='4' />
      <path d='M12 2v2' />
      <path d='M12 20v2' />
      <path d='m4.93 4.93 1.41 1.41' />
      <path d='m17.66 17.66 1.41 1.41' />
      <path d='M2 12h2' />
      <path d='M20 12h2' />
      <path d='m6.34 17.66-1.41 1.41' />
      <path d='m19.07 4.93-1.41 1.41' />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
      <circle cx='9' cy='7' r='4' />
      <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    </svg>
  );
}

function UtensilsIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2' />
      <path d='M7 2v20' />
      <path d='M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7' />
    </svg>
  );
}
