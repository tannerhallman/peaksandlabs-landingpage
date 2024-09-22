
"use client";

import { useState, useRef, useMemo } from "react";
import AnimatedText from "../components/AnimatedText";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";
import { ExternalLink, Search, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Guidebook() {
  const [openSection, setOpenSection] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const accordionRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      id: "how-to-use",
      title: "How to Use the Van",
      subsections: [
        { id: "fuel-type", title: "Fuel Type" },
        { id: "heater", title: "Heater" },
        { id: "electricity", title: "Electricity" },
        { id: "ceiling-fans", title: "Ceiling Fans" },
        { id: "shower", title: "Shower" },
        { id: "fridge", title: "Fridge" },
        { id: "toilet", title: "Toilet" },
        { id: "stove", title: "Stove" },
        { id: "sub-freezing", title: "Sub-freezing Temperatures" },
        { id: "water-system", title: "Water System" },
        { id: "window-covers", title: "Window Covers" },
        { id: "secret-compartment", title: "Secret Compartment" },
        { id: "entertainment", title: "Entertainment" },
        { id: "key-fob", title: "Key Fob Usage" },
      ],
    },
    {
      id: "operations",
      title: "Operations",
      subsections: [
        { id: "before-trip", title: "Before your Trip" },
        { id: "during-trip", title: "During your Trip" },
        { id: "after-trip", title: "After your Trip" },
      ],
    },
    {
      id: "other-notes",
      title: "Other Notes",
      subsections: [
        { id: "roadside-emergencies", title: "Roadside Emergencies & Documents" },
        { id: "included-rental", title: "Included with your Rental" },
      ],
    },
  ];

  const filteredSections = useMemo(() => {
    if (!searchQuery) return sections;
    
    return sections.map(section => ({
      ...section,
      subsections: section.subsections.filter(subsection =>
        subsection.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(section => 
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) || section.subsections.length > 0
    );
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  const scrollToSection = (sectionId: string, subsectionId?: string) => {
    setOpenSection(sectionId);
    setTimeout(() => {
      const element = document.getElementById(subsectionId || sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Small delay to allow accordion to open
  };

  const TableOfContents = () => (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {filteredSections.map((section) => (
          <li key={section.id}>
            <a 
              href={`#${section.id}`} 
              className="text-primary hover:underline"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
            >
              {section.title}
            </a>
            <ul className="pl-4 mt-2 space-y-1">
              {section.subsections.map((subsection) => (
                <li key={subsection.id}>
                  <a 
                    href={`#${subsection.id}`} 
                    className="text-primary hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section.id, subsection.id);
                    }}
                  >
                    {subsection.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );

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

        <div className='bg-green-100 border-l-4 border-green-500 p-4 mb-6'>
          <a
            href='/book'
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary hover:underline flex items-center'>
            🔥 Tip: Book direct to save big! <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="mb-6 relative">
          <Input
            type="text"
            placeholder="Search the guidebook..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-24"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              Clear <X className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        {searchQuery && (
          <div className="mb-4 p-2 bg-yellow-100 border-l-4 border-yellow-500 flex justify-between items-center">
            <p>Showing filtered results for: &quot;{searchQuery}&quot;</p>
            <Button variant="outline" size="sm" onClick={clearSearch}>
              Show Full Guidebook
            </Button>
          </div>
        )}

        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <ScrollArea className=" lg:h-auto">
              <TableOfContents />
            </ScrollArea>
          </div>

          <div className="lg:w-2/3">
            <ScrollArea className="h-[70vh]">
              <Accordion 
                type="single" 
                collapsible 
                className="w-full" 
                value={openSection} 
                onValueChange={setOpenSection}
                ref={accordionRef}
              >
                {filteredSections.map((section) => (
                  <AccordionItem key={section.id} value={section.id}>
                    <AccordionTrigger id={section.id}>{section.title}</AccordionTrigger>
                    <AccordionContent>
                      {section.subsections.map((subsection) => (
                        <div key={subsection.id} className="mb-6">
                          <h3 id={subsection.id} className="text-xl font-semibold mt-4 mb-2">{subsection.title}</h3>
                          {/* Content for each subsection goes here */}
                          {subsection.id === "fuel-type" && (
                            <p>
                              The van uses standard gasoline for both driving and heating. The heater is very efficient, but keep an eye on the gas level, especially in cold weather. The electrical system uses solar panels and batteries, which can be recharged by running the engine or using shore power.
                            </p>
                          )}
                          {subsection.id === "heater" && (
                            <p>
                              To use the heat, press the Webasto top button until it lights up red. Turn the dial to your desired temperature. Ensure the two floor vents are open.
                            </p>
                          )}
                          {subsection.id === "electricity" && (
                            <ul className='list-disc pl-6 space-y-2'>
                              <li>Wall plug: Press the button above it until the green light comes on.</li>
                              <li>USB: Use the far right switch of the 3 switches.</li>
                              <li>Battery monitor above the fridge shows battery percentage and charging status.</li>
                              <li>The van charges via solar and by running the engine.</li>
                              <li>Shore Power: Use the green extension cord at campsites with power.</li>
                            </ul>
                          )}
                          {subsection.id === "ceiling-fans" && (
                            <p>
                              Two roof fans can be controlled by remotes. They have temperature gauges for automatic operation. Use them with the heater in winter to regulate temperature.
                            </p>
                          )}
                          {subsection.id === "shower" && (
                            <p>
                              Hot water should work automatically. Pull the shower door towards you to open from inside. Be mindful of water usage.
                            </p>
                          )}
                          {subsection.id === "fridge" && (
                            <p>
                              Powered by a horizontal switch above it. Keep it off when not in use.
                            </p>
                          )}
                          {subsection.id === "toilet" && (
                            <p>
                              Composting toilet with separate compartments for urine and stool. Follow instructions for proper use and emptying.
                            </p>
                          )}
                          {subsection.id === "stove" && (
                            <p>
                              Propane-powered 2-burner stove. Vent the van while cooking. Emergency shutoff valve is below the sink.
                            </p>
                          )}
                          {subsection.id === "sub-freezing" && (
                            <p>
                              Turn on tank heaters to prevent freezing. Use the middle switch by the kitchen counter sliding door.
                            </p>
                          )}
                          {subsection.id === "water-system" && (
                            <p>
                              Turn on the water pump for shower and sink use. Fresh water tank is in the trunk. Gray water tank is under the van. Follow instructions for filling and emptying.
                            </p>
                          )}
                          {subsection.id === "window-covers" && (
                            <p>
                              Magnetic covers for front windows are in the shelf above the driver&apos;s seat. Use black side out for stealth.
                            </p>
                          )}
                          {subsection.id === "secret-compartment" && (
                            <p>
                              Located above the bed. The 2nd from the top ceiling panel on the far right slides to reveal it.
                            </p>
                          )}
                          {subsection.id === "entertainment" && (
                            <p>
                              Bluetooth speaker and projector included. Use HDMI cable and iPhone adapter for the projector. Download media for off-grid use.
                            </p>
                          )}
                          {subsection.id === "key-fob" && (
                            <ul className='list-disc pl-6 space-y-2'>
                              <li>Top button: Unlock front doors</li>
                              <li>Middle button: Lock whole van</li>
                              <li>Bottom button: Unlock rear and side doors</li>
                              <li>Take care of the key as replacements are expensive</li>
                            </ul>
                          )}
                          {subsection.id === "before-trip" && (
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
                          )}
                          {subsection.id === "during-trip" && (
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
                              <li>Keep the van&apos;s battery level above 30%.</li>
                              <li>
                                Use window covers for stealth or insulation in winter.
                              </li>
                            </ul>
                          )}
                          {subsection.id === "after-trip" && (
                            <>
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
                            </>
                          )}
                          {subsection.id === "roadside-emergencies" && (
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
                                The van&apos;s registration is above the driver side seat in the
                                mirror flap.
                              </li>
                            </ul>
                          )}
                          {subsection.id === "included-rental" && (
                            <p>
                              See our <Link href='/amenities'>amenities guide</Link> for more details.
                            </p>
                          )}
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollArea>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
