"use client";

import AnimatedText from "../components/AnimatedText";
import AnimatedSection from "../components/AnimatedSection";
import Image from "next/image";

import {
  FaBed,
  FaBoltLightning,
  FaBottleDroplet,
  FaCompass,
  FaDog,
  FaKitchenSet,
  FaMountain,
  FaMusic,
  FaSpoon,
  FaTv,
  FaBottleWater,
  FaBolt,
  FaRegSun,
  FaPlugCircleBolt,
  FaCamera,
  FaDisplay,
  FaApple,
  FaAlignJustify,
  FaRegSnowflake,
  FaShower,
  FaToilet,
  FaToiletPaper,
  FaToolbox,
  FaSink,
  FaWater,
  FaMattressPillow,
  FaBox,
  FaFan,
} from "react-icons/fa6";
import HeroCallToAction from "../components/HeroCallToAction";

const amenities = {
  Bathroom: [
    {
      name: "Indoor Shower",
      icon: <FaShower className='w-6 h-6 text-primary' />,
    },
    {
      name: "Full Toilet",
      icon: <FaToilet className='w-6 h-6 text-primary' />,
    },
    {
      name: "Toiletries",
      icon: <FaToolbox className='w-6 h-6 text-primary' />,
    },
  ],
  Kitchen: [
    {
      name: "2-Burner Stovetop",
      icon: <FaBox className='w-6 h-6 text-primary' />,
    },
    {
      name: "Refrigerator & Freezer",
      icon: <FaRegSnowflake className='w-6 h-6 text-primary' />,
    },
    {
      name: "Kitchen sink",
      icon: <FaSink className='w-6 h-6 text-primary' />,
    },
    {
      name: "Potable water",
      icon: <FaWater className='w-6 h-6 text-primary' />,
    },

    {
      name: "French Press",
      icon: <FaKitchenSet className='w-6 h-6 text-primary' />,
    },
    {
      name: "Dishes and utensils",
      icon: <FaSpoon className='w-6 h-6 text-primary' />,
    },
    {
      name: "Pots and pans",
      icon: <FaKitchenSet className='w-6 h-6 text-primary' />,
    },
    {
      name: "Other Cooking basics",
      icon: <FaBottleDroplet className='w-6 h-6 text-primary' />,
    },
  ],
  Climate: [
    {
      name: "Temp-controlled Heat",
      icon: <FaRegSun className='w-6 h-6 text-primary' />,
    },
    {
      name: "2 Ceiling fans",
      icon: <FaFan className='w-6 h-6 text-primary' />,
    },
    {
      name: "Excellent Insulation",
      icon: <FaRegSnowflake className='w-6 h-6 text-primary' />,
    },
  ],
  "Hookups and power": [
    {
      name: "Water hookup",
      icon: <FaBottleWater className='w-6 h-6 text-primary' />,
    },
    {
      name: "Electric hookup",
      icon: <FaBolt className='w-6 h-6 text-primary' />,
    },
    {
      name: "Grey Water hookup",
      icon: <FaWater className='w-6 h-6 text-primary' />,
    },
    {
      name: "Solar Panels",
      icon: <FaRegSun className='w-6 h-6 text-primary' />,
    },
    {
      name: "120V Outlet Plugs",
      icon: <FaPlugCircleBolt className='w-6 h-6 text-primary' />,
    },
  ],
  Other: [
    {
      name: "Projector",
      icon: <FaDisplay className='w-6 h-6 text-primary' />,
    },
    {
      name: "CarPlay / Android Auto",
      icon: <FaApple className='w-6 h-6 text-primary' />,
    },
    {
      name: "JBL Portable Speaker",
      icon: <FaMusic className='w-6 h-6 text-primary' />,
    },
    {
      name: "Backup camera",
      icon: <FaCamera className='w-6 h-6 text-primary' />,
    },
    {
      name: "Extra storage",
      icon: <FaAlignJustify className='w-6 h-6 text-primary' />,
    },
  ],
  "Trip readiness": [
    {
      name: "Pillow, sheets, and blankets for each bed camera",
      icon: <FaMattressPillow className='w-6 h-6 text-primary' />,
    },
    {
      name: "Cookware and utensils for your kitchen setup",
      icon: <FaSpoon className='w-6 h-6 text-primary' />,
    },
    {
      name: "Bathroom essentials, such as soap, towels, and toilet paper",
      icon: <FaToiletPaper className='w-6 h-6 text-primary' />,
    },
    {
      name: "Battery Jumper, Snow Socks, etc",
      icon: <FaBoltLightning className='w-6 h-6 text-primary' />,
    },
  ],
};
export default function Amenities() {
  return (
    <div className='bg-background text-dark'>
      {/* Hero Section */}
      <section className='relative h-[50vh] flex items-center justify-center'>
        <Image
          src='/amenities-hero.jpg'
          alt='Campervan Amenities'
          layout='fill'
          objectFit='cover'
          className='absolute z-0'
        />
        <div className='relative z-10 text-center text-white bg-dark bg-opacity-50 p-8 rounded-lg'>
          <AnimatedText
            text='Campervan Amenities'
            className='text-4xl font-bold mb-4 text-3xl font-bold md:text-4xl lg:text-5xl'
          />
          <p className='text-xl'>
            Everything you need for a comfortable journey
          </p>
        </div>
      </section>
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
                  Our campervan features a comfortable memory foam bed, perfect
                  for a good night&apos;s sleep after a day of exploring.
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
                  Stay entertained during your travels with our campervan&apos;s
                  entertainment system, featuring a projector, CarPlay & Android
                  Auto, a portable speaker and more.
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
                  Store all your outdoor gear, from hiking equipment to camping
                  gear, in our campervan&apos;s ample storage space, making it
                  easy to embark on your next adventure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      {/* Amenities List */}
      <AnimatedSection>
        <AmenitiesList />
      </AnimatedSection>
      <HeroCallToAction />
    </div>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/R9F7CQyLAIg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
function AmenitiesList() {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-primary mb-8 sm:mb-12 lg:mb-16'>
        Full List
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16'>
        {Object.entries(amenities).map(([category, items], index) => (
          <div key={index}>
            <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-4'>
              {category.toString()}
            </h2>
            <ul className='space-y-2'>
              {items.map((item, index) => (
                <li key={index} className='flex items-center space-x-3'>
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
