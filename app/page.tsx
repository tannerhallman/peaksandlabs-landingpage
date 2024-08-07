'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import anime from 'animejs'
import AnimatedText from './components/AnimatedText'
import AnimatedSection from './components/AnimatedSection'
import HomeComponent from '@/app/components/Home'

export default function Home() {
  return <HomeComponent />;
}