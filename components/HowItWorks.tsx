import { MessageSquare, Shield, Award } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#DE3B5C]">How it works</h2>
        <p className="text-gray-600 mb-12">
          Own Your Motorcycle in 3 Simple Steps
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex gap-4 items-center">
            <div className=" bg-[#3478F50D] rounded-full flex items-center justify-center h-20 w-20 p-3">
              <img src="/how1.svg" />
            </div>
            <div className="flex flex-col text-start">
              <h3 className="font-semibold text-gray-900">Instant quote</h3>
              <p className="text-gray-600 text-sm">
                Browse our curated collection
              </p>
            </div>
          </div>

          <div className="flex gap-4 text-center">
            <div className="flex gap-4 items-center">
              <div className="bg-[#3478F50D] rounded-full flex items-center justify-center relative h-20 w-20 p-3">
                <img src="/how2.svg" />
              </div>
              <div className="flex flex-col text-start">
                <h3 className="font-semibold text-gray-900">
                  Free doorstep evaluation
                </h3>
                <p className="text-gray-600 text-sm">
                  Explore our store inventory at your convenience
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-center">
            <div className="flex gap-4 items-center">
              <div className="bg-[#3478F50D] rounded-full flex items-center justify-center relative h-20 w-20 p-3">
                <img src="/how3.svg" />
              </div>
              <div className="flex flex-col text-start">
                <h3 className="flex flex-col text-start">Get paid instantly</h3>
                <p className="text-gray-600 text-sm">
                  Hassle-free purchase and <br />
                  ownership transfer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
