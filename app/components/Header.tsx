import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaCaravan } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";

export default function Header() {
  return (
    <header className='bg-[#f0f0f0] py-4 px-6 md:py-6 md:px-8 lg:py-8 lg:px-10'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2' prefetch={false}>
          <FaCaravan className='h-8 w-8 text-primary' />
          <span className='text-xl font-bold text-primary'>
            Peaks and Labs Campervans
          </span>
        </Link>
        <nav className='hidden md:flex items-center gap-6'>
          <Link
            href='/'
            className='text-sm font-medium hover:text-primary'
            prefetch={false}>
            Home
          </Link>
          <Link
            href='/campervan'
            className='text-sm font-medium hover:text-primary'
            prefetch={false}>
            Our Campervan
          </Link>
          <Link
            href='/amenities'
            className='text-sm font-medium hover:text-primary'
            prefetch={false}>
            Amenities
          </Link>
          <Link
            href='/booking'
            className='text-sm font-medium hover:text-primary'
            prefetch={false}>
            Booking
          </Link>
          <Link
            href='/support'
            className='text-sm font-medium hover:text-primary'
            prefetch={false}>
            Contact Us
          </Link>
        </nav>
        <Button asChild size='sm' className='hidden md:inline-flex'>
          <Link href='/booking'>Book Now</Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className='md:hidden'>
              <FaAlignJustify className='h-6 w-6' />
              <span className='sr-only'>Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='md:hidden'>
            <nav className='grid gap-4 p-4'>
              <Link
                href='/'
                className='text-lg font-medium hover:text-primary'
                prefetch={false}>
                Home
              </Link>
              <Link
                href='/campervan'
                className='text-lg font-medium hover:text-primary'
                prefetch={false}>
                Our Campervan
              </Link>
              <Link
                href='/amenities'
                className='text-lg font-medium hover:text-primary'
                prefetch={false}>
                Amenities
              </Link>
              <Link
                href='/booking'
                className='text-lg font-medium hover:text-primary'
                prefetch={false}>
                Booking
              </Link>
              <Link
                href='/support'
                className='text-lg font-medium hover:text-primary'
                prefetch={false}>
                Contact Us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
