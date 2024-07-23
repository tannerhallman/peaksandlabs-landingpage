"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import AnimatedText from "../components/AnimatedText";

export default function Support() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      anime({
        targets: contentRef.current.children,
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(200),
        easing: "easeOutExpo",
      });
    }
  }, []);

  return (
    <div className='space-y-8'>
      <section className='text-gray-600 body-font bg-background text-dark'>
        <div
          className='container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section'
          id='contact-form'>
          <div className='md:w-1/3 w-full'>
            <h1 className='text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4'>
              Contact Us
            </h1>
            <p className='leading-relaxed text-xl text-gray-900'>
              We&apos;re here to assist you! If you have any questions or need
              assistance, please feel free to reach out to us.
              <br />
              <br />
              You can also email us at{" "}
              <a
                href='mailto:peaksandlabscampervanco@gmail.com'
                className='font-semibold border-b-4 border-green-400'>
                peaksandlabscampervanco@gmail.com
              </a>
            </p>
            <p className='leading-relaxed text-xl text-gray-900 mt-8'>
              Connect with us on social media:
            </p>
            <span className='inline-flex mt-6 justify-center sm:justify-start'>
              <a
                className='text-gray-500 hover:text-gray-900'
                href='http://instagram.com/peaksandlabscampervanco/'
                target='_blank'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-6 h-6'
                  viewBox='0 0 24 24'>
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                </svg>
              </a>
            </span>
          </div>
          <div className='md:w-2/3 w-full mt-10 md:mt-0 md:pl-28'>
            <h1 className='text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4'>
              Contact Form
            </h1>
            <form
              action='send-contact.php'
              method='post'
              id='submit-contact-form'>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label
                    htmlFor='name'
                    className='leading-7 py-4 text-lg text-gray-900'>
                    Your Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    className='w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out '
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label
                    htmlFor='email'
                    className='leading-7 py-4 text-lg text-gray-900'>
                    Your Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out '
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label
                    htmlFor='message'
                    className='leading-7 py-4 text-lg text-gray-900'>
                    Your Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    className='w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out '></textarea>
                </div>
              </div>
              <div className='p-2 w-full'>
                <button
                  type='submit'
                  className='bg-primary text-white px-8 py-4 rounded-lg text-xl hover:bg-opacity-90 transition-colors g-recaptcha'>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
