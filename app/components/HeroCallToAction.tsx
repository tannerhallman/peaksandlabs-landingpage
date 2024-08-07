import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function HeroCallToAction() {
  return (
    <AnimatedSection className='bg-primary text-white py-16'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-4xl font-bold mb-4'>Ready to Hit the Road?</h2>
        <p className='text-xl mb-8'>
          Book our campervan today and start your adventure!
        </p>
        <Link
          href='/booking'
          className='bg-white text-primary px-8 py-3 rounded-lg text-xl hover:bg-opacity-90 transition-colors'>
          Book Now
        </Link>
      </div>
    </AnimatedSection>
  );
}
