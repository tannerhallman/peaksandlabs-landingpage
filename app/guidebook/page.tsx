"use client";

import { useEffect, useState, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Instagram,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function Booking() {
  const [activeSection, setActiveSection] = useState("how-to-use");

  const sections = [
    { id: "how-to-use", title: "How to Use the Van" },
    { id: "operations", title: "Operations" },
    { id: "other-notes", title: "Other Notes" },
  ];

  const handlePrevious = () => {
    const currentIndex = sections.findIndex(
      (section) => section.id === activeSection
    );
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    const currentIndex = sections.findIndex(
      (section) => section.id === activeSection
    );
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id);
    }
  };

  return (
    <div className='space-y-16 bg-background text-dark'>
      <AnimatedSection className='container mx-auto px-4 py-16'>
        <AnimatedText
          text='2018 Dodge Ram Promaster Campervan Guidebook'
          className='text-4xl font-bold text-primary mb-4'
        />
        <p className='text-xl mb-4'>
          Use this guide to learn about how to use the campervan
        </p>

        <div className='bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6'>
          <p className='font-bold'></p>
          <a
            href='/book'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline'>
            🔥 Tip: Book direct to save big!
          </a>
        </div>
        <Tabs
          value={activeSection}
          onValueChange={setActiveSection}
          className='w-full'>
          <TabsList className='grid w-full grid-cols-2 lg:grid-cols-4'>
            {sections.map((section) => (
              <TabsTrigger key={section.id} value={section.id}>
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className='mt-6 border rounded-lg p-6'>
            <ScrollArea className='h-[60vh]'>
              <TabsContent value='how-to-use'>
                <h2 className='text-2xl font-semibold mb-4'>How to Use the Van</h2>
                
                <h3 className='text-xl font-semibold mt-4 mb-2'>Fuel Type</h3>
                <p>
                  The van uses standard gasoline for both driving and heating. The heater is very efficient, but keep an eye on the gas level, especially in cold weather. The electrical system uses solar panels and batteries, which can be recharged by running the engine or using shore power.
                </p>

                <h3 className='text-xl font-semibold mt-4 mb-2'>Heater</h3>
                <p>
                  To use the heat, press the Webasto top button until it lights up red. Turn the dial to your desired temperature. Ensure the two floor vents are open.
                </p>

                <h3 className='text-xl font-semibold mt-4 mb-2'>Electricity</h3>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>Wall plug: Press the button above it until the green light comes on.</li>
                  <li>USB: Use the far right switch of the 3 switches.</li>
                  <li>Battery monitor above the fridge shows battery percentage and charging status.</li>
                  <li>The van charges via solar and by running the engine.</li>
                  <li>Shore Power: Use the green extension cord at campsites with power.</li>
                </ul>

                <h3 className='text-xl font-semibold mt-4 mb-2'>Ceiling Fans</h3>
                <p>
                  Two roof fans can be controlled by remotes. They have temperature gauges for automatic operation. Use them with the heater in winter to regulate temperature.
                </p>

                <h3 className='text-xl font-semibold mt-4 mb-2'>Shower</h3>
                <p>
                  Hot water should work automatically. Pull the shower door towards you to open from inside. Be mindful of water usage.
                </p>

                <h3 className='text-xl font-semibold mt-4 mb-2'>Fridge</h3>
                <p>
                  Powered by a horizontal switch above it. Keep it off when not in use.
                </p>

                <h3 className='text-xl font-semibold mt-4 mb-2'>Toilet</h3>
                <p>
                  Composting toilet with separate compartments for urine and stool. Follow instructions for proper use and emptying.
                </p>

                <h3 className='text-xl font-semibold mt-4 mb-2'>Stove</h3>
                <p>
                  Propane-powered 2-burner stove. Vent the van while cooking. Emergency shutoff valve is below the sink.
                </p>

                <h3 className='text-xl font-semibold mt-4 mb-2'>Sub-freezing Temperatures</h3>
                <p>
                  Turn on tank heaters to prevent freezing. Use the middle switch by the kitchen counter sliding door.
                </p>

                <h3 className='text-xl font-semibold mt-4 mb-2'>Water System</h3>
                <p>
                  Turn on the water pump for shower and sink use. Fresh water tank is in the trunk. Gray water tank is under the van. Follow instructions for filling and emptying.
                </p>

                <h3 className='text-xl font-semibold mt-4 mb-2'>Window Covers</h3>
                <p>
                  Magnetic covers for front windows are in the shelf above the driver's seat. Use black side out for stealth.
                </p>

                <h3 className='text-xl font-semibold mt-4 mb-2'>Secret Compartment</h3>
                <p>
                  Located above the bed. The 2nd from the top ceiling panel on the far right slides to reveal it.
                </p>

                <h3 className='text-xl font-semibold mt-4 mb-2'>Entertainment</h3>
                <p>
                  Bluetooth speaker and projector included. Use HDMI cable and iPhone adapter for the projector. Download media for off-grid use.
                </p>

                <h3 className='text-xl font-semibold mt-4 mb-2'>Key Fob Usage</h3>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>Top button: Unlock front doors</li>
                  <li>Middle button: Lock whole van</li>
                  <li>Bottom button: Unlock rear and side doors</li>
                  <li>Take care of the key as replacements are expensive</li>
                </ul>
              </TabsContent>
              <TabsContent value='operations'>
                <h2 className='text-2xl font-semibold mb-4'>Operations</h2>
                <h3 className='text-xl font-semibold mt-4 mb-2'>
                  Before your Trip
                </h3>
                <ol className='list-decimal pl-6 space-y-2'>
                  <li>
                    Verify yourself as a driver in rental app before your trip.
                  </li>
                  <li>
                    Download movies or shows on your phone for offline viewing with the
                    projector.
                  </li>
                  <li>Stock up on food and groceries.</li>
                  <li>Download offline maps for your travel area. We recommend the ioverlander.com app for dispersed camping spots</li>
                </ol>
                <h3 className='text-xl font-semibold mt-4 mb-2'>
                  During your Trip
                </h3>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    Turn on grey water tank heaters if temperature is below
                    40°F.
                  </li>
                  <li>The van runs on regular gasoline.</li>
                  <li>Turn on water pumps for sink and shower use.</li>
                  <li>
                    For heating, turn the dial on the wall and check for red
                    indicator lights.
                  </li>
                  <li>Contact us through Outdoorsy for any questions.</li>
                  <li>
                    Maintain at least 1/4 - 1/2 tank of gas for overnight
                    heating.
                  </li>
                  <li>Keep the van's battery level above 30%.</li>
                  <li>
                    Use window covers for stealth or insulation in winter.
                  </li>
                </ul>
                <h3 className='text-xl font-semibold mt-4 mb-2'>
                  After your Trip (returning the van)
                </h3>
                <p>
                  Please return the van in the condition you found it. Clean the
                  kitchen area and sweep up any messes. Two main requirements:
                </p>
                <ol className='list-decimal pl-6 space-y-2'>
                  <li>
                    Empty the urine bin at an RV park or campground (additional
                    fee if not emptied).
                  </li>
                  <li>
                    Fill the van back up fully with gasoline (refueling fee
                    applies if not filled).
                  </li>
                </ol>
              </TabsContent>
              <TabsContent value='other-notes'>
                <h2 className='text-2xl font-semibold mb-4'>Other Notes</h2>
                <h3 className='text-xl font-semibold mt-4 mb-2'>
                  Roadside emergencies & documents
                </h3>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    Your rental includes an insurance policy with roadside
                    assistance. Call 1-877-978-7222 for emergencies.
                  </li>
                  <li>
                    Electric tire pump, jumper cables, and a general roadside
                    kit are in the storage area.
                  </li>
                  <li>
                    The van's registration is above the driver side seat in the
                    mirror flap.
                  </li>
                </ul>
                <h3 className='text-xl font-semibold mt-4 mb-2'>
                  Included with your Rental
                </h3>
                <p>
                  See our <Link href='/amenities'>amenities guide</Link> for more details.
                </p>
              </TabsContent>
            </ScrollArea>
          </div>
        </Tabs>
        <div className='flex justify-between mt-6'>
          <Button
            onClick={handlePrevious}
            disabled={activeSection === sections[0].id}>
            <ChevronLeft className='w-4 h-4 mr-2' />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={activeSection === sections[sections.length - 1].id}>
            Next
            <ChevronRight className='w-4 h-4 ml-2' />
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
