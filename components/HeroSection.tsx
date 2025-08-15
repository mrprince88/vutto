import { Button } from "@/components/ui/button";
import { Shield, Clock, RefreshCw } from "lucide-react";

export function HeroSection() {
  return (
    <section className="px-4 py-16 bg-[#F5F8FE]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Want to sell
            <br />
            your bike?
          </h1>

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
            <input
              type="text"
              placeholder="Enter your phone number"
              className="border border-gray-300 rounded-full px-6 py-2 w-full lg:w-1/2 mb-6 block bg-white placeholder:text-gray-500"
            />

            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full">
              GET INSTANT QUOTE NOW
            </Button>
          </div>
        </div>

        <div className="relative">
          <img
            src="/hero.svg"
            alt="Bike selling illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
