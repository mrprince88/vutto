"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SuccessModal } from "./SuccessModal";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="px-4 py-16 bg-[#F5F8FE]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column for desktop, full width for mobile */}
        <div className="w-full">
          {/* Mobile title */}
          <h1
            className="block lg:hidden text-4xl font-bold mb-8 leading-tight text-center"
            style={{ color: "#DE3B5C" }}
          >
            Sell your bike at the best price in Delhi
          </h1>

          {/* Desktop title */}
          <h1 className="hidden lg:block text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Want to sell
            <br />
            your bike?
          </h1>

          {/* Hero SVG for mobile only */}
          <div className="block lg:hidden mb-8">
            <img
              src="/hero.svg"
              alt="Bike selling illustration"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <div className=" bg-white rounded-full flex items-center justify-center relative h-14 w-14 p-1">
                <img src="/list1.svg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Instant Online Quote
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className=" bg-white rounded-full flex items-center justify-center relative h-14 w-14 p-1">
                <img src="/list2.svg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Hassle-Free Inspection
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className=" bg-white rounded-full flex items-center justify-center relative h-14 w-14 p-1">
                <img src="/list3.svg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Seamless Ownership Transfer
                </h3>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const phoneInput = (
                  form.elements.namedItem("phone") as HTMLInputElement
                ).value;

                if (phoneInput.length === 0) {
                  return;
                }
                setIsModalOpen(true);
              }}
            >
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="border border-gray-300 rounded-full px-6 py-2 w-full lg:w-1/2 mb-6 block bg-white placeholder:text-gray-500 placeholder:text-center"
              />

              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full w-full lg:w-1/2 cursor-pointer">
                Get the best quote for you
              </Button>
            </form>
          </div>
        </div>

        {/* Hero SVG for desktop only */}
        <div className="hidden lg:block relative">
          <img
            src="/hero.svg"
            alt="Bike selling illustration"
            className="w-full h-auto"
          />
        </div>

        <SuccessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
