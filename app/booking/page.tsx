'use client'

import { useEffect, useRef } from 'react'
import AnimatedText from '../components/AnimatedText'
import AnimatedSection from '../components/AnimatedSection'
import Link from 'next/link'

export default function Booking() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.innerHTML = `
      window.addEventListener('message', rvngoMsg, false);
      function rvngoMsg(e) {
        const iframe = document.getElementById('rvngo_iframe') as HTMLIFrameElement;
        if (iframe) {
          iframe.height = e.data.height;
        }
      }
    `
    document.body.appendChild(script)
  }, [])

  return (
    <div className='space-y-16 bg-background text-dark'>
      <AnimatedSection className='container mx-auto px-4 py-16'>
        <AnimatedText
          text='Book Your Adventure'
          className='text-4xl font-bold text-primary mb-4'
        />
        <p className='text-xl mb-4'>
          Ready to hit the road? Use our easy booking system to reserve your
          campervan and start planning your journey.
        </p>

        <Link className='mb-2 text-sm' href='https://www.rvngo.com/rv-rentals/arvada-co/2018-dodge-ram-promaster-2500-campervan-rv-27945'>
          Open in a New Window
        </Link>

        <div className='bg-white p-8 rounded-lg shadow-md'>
          <iframe
            ref={iframeRef}
            id='rvngo_iframe'
            src='https://www.rvngo.com/iframe/listing/27945/full'
            style={{
              display: "block",
              border: "none",
              width: "100%",
              minHeight: "1000px",
            }}></iframe>
        </div>
      </AnimatedSection>
    </div>
  );
}