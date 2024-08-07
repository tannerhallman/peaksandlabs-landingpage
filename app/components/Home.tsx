/**
 * v0 by Vercel.
 * @see https://v0.dev/t/A8xgMYKWvUa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "./AnimatedSection";
import HeroCallToAction from "./HeroCallToAction";

export default function Component() {
  return (
    <div className='flex flex-col min-h-dvh'>
      <main className='flex-1'>
        <AnimatedSection>
          <section className='bg-[#f0f0f0] py-12 md:py-16 lg:py-20 px-3 md:px-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16'>
              <div className='flex flex-col gap-4 md:gap-6 lg:gap-8'>
                <h1 className='text-3xl font-bold text-primary md:text-4xl lg:text-5xl'>
                  Discover the Joy of Vanlife with our campervan
                </h1>
                <p className='text-lg text-muted-foreground md:text-xl lg:text-2xl'>
                  Join us on the open road with our cozy and fully-equipped
                  campervan. Explore the great outdoors with your furry
                  companions by your side.
                </p>
                <div className='flex items-center gap-4'>
                  <Avatar className='w-12 h-12 border-2 border-primary'>
                    <AvatarImage src='/owners.jpg' alt='Owner' />
                    <AvatarFallback>T&A</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-medium'>Tanner and Allie</div>
                    <div className='text-sm text-muted-foreground'>
                      Located in Denver, Co
                    </div>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <Button asChild size='lg'>
                    <Link href='/booking'>Book Now</Link>
                  </Button>
                  <Link
                    href='/campervan'
                    className='inline-flex items-center gap-2 text-primary hover:underline'
                    prefetch={false}>
                    Learn More
                    <ArrowRightIcon className='h-5 w-5' />
                  </Link>
                </div>
              </div>
              <div className='relative overflow-hidden rounded-xl'>
                <img
                  src='/campervan.jpg'
                  alt='Campervan'
                  width={800}
                  height={600}
                  className='w-full h-full object-cover'
                  style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#f0f0f0] to-transparent' />
              </div>
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <section className='py-12 md:py-16 lg:py-20 px-3 md:px-12'>
            <div className='container mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16'>
                <div>
                  <h2 className='text-2xl font-bold text-primary mb-4 md:text-3xl lg:text-4xl'>
                    Our Campervan
                  </h2>
                  <p className='text-muted-foreground mb-8 md:text-lg lg:text-xl'>
                    Explore the great outdoors in our cozy and well-equipped
                    campervan. Designed for comfort and adventure, it's the
                    perfect companion for your next road trip.
                  </p>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex items-center gap-2'>
                      <BedIcon className='h-6 w-6 text-primary' />
                      <span>Sleeps 2</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CookingPotIcon className='h-6 w-6 text-primary' />
                      <span>Fully Equipped Kitchen</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <TvIcon className='h-6 w-6 text-primary' />
                      <span>Bathroom with Shower and Toilet</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CompassIcon className='h-6 w-6 text-primary' />
                      <span>Off-Grid Capabilities</span>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <img
                    src='/campervan-gallery-1.jpg'
                    alt='Campervan Interior'
                    width={400}
                    height={300}
                    className='w-full h-full object-cover rounded-xl'
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <img
                    src='/campervan-gallery-2.jpg'
                    alt='Campervan Interior'
                    width={400}
                    height={300}
                    className='w-full h-full object-cover rounded-xl'
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <img
                    src='/campervan-gallery-5.jpg'
                    alt='Campervan Exterior'
                    width={400}
                    height={300}
                    className='w-full h-full object-cover rounded-xl'
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <img
                    src='/campervan-gallery-6.jpg'
                    alt='Campervan Exterior'
                    width={400}
                    height={300}
                    className='w-full h-full object-cover rounded-xl'
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <section className='bg-[#f0f0f0] py-12 md:py-16 lg:py-20 px-3 md:px-12'>
            <div className='container mx-auto'>
              <h2 className='text-2xl font-bold text-primary mb-4 md:text-3xl lg:text-4xl'>
                Amenities
              </h2>
              <p className='text-muted-foreground mb-8 md:text-lg lg:text-xl'>
                Our campervan is equipped with everything you need for a
                comfortable and enjoyable road trip. Explore the features that
                make our van the perfect companion for your adventures.
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
                <div className='bg-white rounded-xl p-4 md:p-6 lg:p-8 flex flex-col gap-4'>
                  <BedIcon className='h-8 w-8 text-primary' />
                  <h3 className='text-lg font-bold'>Sleeping Accommodations</h3>
                  <p className='text-muted-foreground'>
                    Our campervan features a comfortable memory foam bed,
                    perfect for a good night's sleep after a day of exploring.
                  </p>
                </div>
                <div className='bg-white rounded-xl p-4 md:p-6 lg:p-8 flex flex-col gap-4'>
                  <CookingPotIcon className='h-8 w-8 text-primary' />
                  <h3 className='text-lg font-bold'>Fully Equipped Kitchen</h3>
                  <p className='text-muted-foreground'>
                    Prepare delicious meals on the go with our campervan's fully
                    equipped kitchen, including a gas-powered range,
                    refrigerator & freezer, and all the necessary cookware.
                  </p>
                </div>
                <div className='bg-white rounded-xl p-4 md:p-6 lg:p-8 flex flex-col gap-4'>
                  <TvIcon className='h-8 w-8 text-primary' />
                  <h3 className='text-lg font-bold'>Entertainment System</h3>
                  <p className='text-muted-foreground'>
                    Stay entertained during your travels with our campervan's
                    entertainment system, featuring a projector, CarPlay &
                    Android Auto, a portable speaker and more.
                  </p>
                </div>
                <div className='bg-white rounded-xl p-4 md:p-6 lg:p-8 flex flex-col gap-4'>
                  <CompassIcon className='h-8 w-8 text-primary' />
                  <h3 className='text-lg font-bold'>Off-Grid Capabilities</h3>
                  <p className='text-muted-foreground'>
                    Our campervan is equipped with solar panels and a powerful
                    battery system, allowing you to venture off the grid and
                    explore remote locations.
                  </p>
                </div>
                <div className='bg-white rounded-xl p-4 md:p-6 lg:p-8 flex flex-col gap-4'>
                  <DogIcon className='h-8 w-8 text-primary' />
                  <h3 className='text-lg font-bold'>Pet-Friendly</h3>
                  <p className='text-muted-foreground'>
                    Bring your furry companions along for the adventure! Our
                    campervan is designed to accommodate pets, ensuring a
                    comfortable and enjoyable experience for all.
                  </p>
                </div>
                <div className='bg-white rounded-xl p-4 md:p-6 lg:p-8 flex flex-col gap-4'>
                  <MountainIcon className='h-8 w-8 text-primary' />
                  <h3 className='text-lg font-bold'>Outdoor Gear Storage</h3>
                  <p className='text-muted-foreground'>
                    Store all your outdoor gear, from hiking equipment to
                    camping gear, in our campervan's ample storage space, making
                    it easy to embark on your next adventure.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
        <HeroCallToAction />
        <AnimatedSection>
          <section className='bg-[#f0f0f0] py-12 md:py-16 lg:py-20 px-3 md:px-12'>
            <div className='container mx-auto'>
              <h2 className='text-2xl font-bold text-primary mb-4 md:text-3xl lg:text-4xl'>
                Need something?
              </h2>
              <p className='text-muted-foreground mb-8 md:text-lg lg:text-xl'>
                Have questions or need assistance? We're just a message away and
                we respond super quick!
              </p>

              <Button asChild size='lg'>
                <Link href='/support'>Contact Us</Link>
              </Button>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
}

export function ArrowRightIcon(props) {
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
      <path d='M5 12h14' />
      <path d='m12 5 7 7-7 7' />
    </svg>
  );
}

export function BedIcon(props) {
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

export function CaravanIcon(props) {
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
      <rect width='4' height='4' x='2' y='9' />
      <rect width='4' height='10' x='10' y='9' />
      <path d='M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2' />
      <circle cx='8' cy='19' r='2' />
      <path d='M10 19h12v-2' />
    </svg>
  );
}

export function CompassIcon(props) {
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
      <path d='m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z' />
      <circle cx='12' cy='12' r='10' />
    </svg>
  );
}

export function CookingPotIcon(props) {
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
      <path d='M2 12h20' />
      <path d='M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8' />
      <path d='m4 8 16-4' />
      <path d='m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8' />
    </svg>
  );
}

export function DogIcon(props) {
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
      <path d='M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5' />
      <path d='M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5' />
      <path d='M8 14v.5' />
      <path d='M16 14v.5' />
      <path d='M11.25 16.25h1.5L12 17l-.75-.75Z' />
      <path d='M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306' />
    </svg>
  );
}

export function MenuIcon(props) {
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
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

export function MountainIcon(props) {
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
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  );
}

export function TvIcon(props) {
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
      <rect width='20' height='15' x='2' y='7' rx='2' ry='2' />
      <polyline points='17 2 12 7 7 2' />
    </svg>
  );
}
