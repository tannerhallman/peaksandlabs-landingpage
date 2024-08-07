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
import { FaArrowRight, FaBed, FaCompass, FaDog, FaKitchenSet, FaMountain, FaTv } from "react-icons/fa6";

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
                    <FaArrowRight className='h-5 w-5' />
                  </Link>
                </div>
              </div>
              <div className='relative overflow-hidden rounded-xl'>
                <img
                  src='/opengraph-image.jpg'
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
                    campervan. Designed for comfort and adventure, it&apos;s the
                    perfect companion for your next road trip.
                  </p>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex items-center gap-2'>
                      <FaBed className='h-6 w-6 text-primary' />
                      <span>Sleeps 2</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FaKitchenSet className='h-6 w-6 text-primary' />
                      <span>Fully Equipped Kitchen</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FaTv className='h-6 w-6 text-primary' />
                      <span>Bathroom with Shower and Toilet</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FaCompass className='h-6 w-6 text-primary' />
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
                  <FaBed className='h-8 w-8 text-primary' />
                  <h3 className='text-lg font-bold'>Sleeping Accommodations</h3>
                  <p className='text-muted-foreground'>
                    Our campervan features a comfortable memory foam bed,
                    perfect for a good night&apos;s sleep after a day of
                    exploring.
                  </p>
                </div>
                <div className='bg-white rounded-xl p-4 md:p-6 lg:p-8 flex flex-col gap-4'>
                  <FaKitchenSet className='h-8 w-8 text-primary' />
                  <h3 className='text-lg font-bold'>Fully Equipped Kitchen</h3>
                  <p className='text-muted-foreground'>
                    Prepare delicious meals on the go with our campervan&apos;s
                    fully equipped kitchen, including a gas-powered range,
                    refrigerator & freezer, and all the necessary cookware.
                  </p>
                </div>
                <div className='bg-white rounded-xl p-4 md:p-6 lg:p-8 flex flex-col gap-4'>
                  <FaTv className='h-8 w-8 text-primary' />
                  <h3 className='text-lg font-bold'>Entertainment System</h3>
                  <p className='text-muted-foreground'>
                    Stay entertained during your travels with our
                    campervan&apos;s entertainment system, featuring a
                    projector, CarPlay & Android Auto, a portable speaker and
                    more.
                  </p>
                </div>
                <div className='bg-white rounded-xl p-4 md:p-6 lg:p-8 flex flex-col gap-4'>
                  <FaCompass className='h-8 w-8 text-primary' />
                  <h3 className='text-lg font-bold'>Off-Grid Capabilities</h3>
                  <p className='text-muted-foreground'>
                    Our campervan is equipped with solar panels and a powerful
                    battery system, allowing you to venture off the grid and
                    explore remote locations.
                  </p>
                </div>
                <div className='bg-white rounded-xl p-4 md:p-6 lg:p-8 flex flex-col gap-4'>
                  <FaDog className='h-8 w-8 text-primary' />
                  <h3 className='text-lg font-bold'>Pet-Friendly</h3>
                  <p className='text-muted-foreground'>
                    Bring your furry companions along for the adventure! Our
                    campervan is designed to accommodate pets, ensuring a
                    comfortable and enjoyable experience for all.
                  </p>
                </div>
                <div className='bg-white rounded-xl p-4 md:p-6 lg:p-8 flex flex-col gap-4'>
                  <FaMountain className='h-8 w-8 text-primary' />
                  <h3 className='text-lg font-bold'>Outdoor Gear Storage</h3>
                  <p className='text-muted-foreground'>
                    Store all your outdoor gear, from hiking equipment to
                    camping gear, in our campervan&apos;s ample storage space,
                    making it easy to embark on your next adventure.
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
                Have questions or need assistance? We&apos;re just a message
                away and we respond super quick!
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