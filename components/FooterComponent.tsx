"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  const services = [
    "Buy used bikes",
    "Sell your bike",
    "Get instant quote",
    "Apply for loan",
    "Evaluate your bike",
    "Talk to expert",
  ];

  const companyLinks = [
    "About Zuto",
    "Blogs",
    "Privacy policy",
    "Careers",
    "Admin panel",
    "Terms of service",
  ];

  const popularSearches = [
    "Sell used bike",
    "Zuto used bikes",
    "Cheap bikes in Bangalore",
    "Suzuki",
    "Hero",
    "Bajaj",
    "Honda",
    "Royal Enfield",
  ];

  const socialIcons = [
    { name: "LinkedIn", icon: "/social1.svg" },
    { name: "Instagram", icon: "/social2.svg" },
    { name: "Facebook", icon: "/social3.svg" },
    { name: "Pinterest", icon: "/social4.svg" },
    { name: "Twitter", icon: "/social5.svg" },
    { name: "YouTube", icon: "/social6.svg" },
    { name: "Email", icon: "/social7.svg" },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Why choose Zuto?
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2"
            >
              {isExpanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="text-gray-600 leading-relaxed">
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur. Bibendum sed auctor
              elementum fringilla eget rhoncus. Aenean eget nunc gravida sit
              nibh habitant tincidunt nunc in. Dui odio molestie odio ut nec
              volutpat aliquam rhoncus enim.
            </p>

            {isExpanded && (
              <div className="space-y-4">
                <p>
                  Additional content about why Zuto is the best choice for your
                  bike needs. We provide comprehensive services, competitive
                  pricing, and excellent customer support.
                </p>
                <p>
                  Our platform connects buyers and sellers seamlessly, with
                  secure transactions and verified listings to ensure your peace
                  of mind.
                </p>
              </div>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:text-blue-700 font-medium mt-2"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Services
            </h4>
            <ul className="space-y-3 grid grid-cols-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Zuto</h4>
            <ul className="space-y-3 grid grid-cols-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Popular searches
            </h4>
            <ul className="space-y-3 grid grid-cols-2">
              {popularSearches.map((search, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {search}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Connect with us
            </h4>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label={social.name}
                >
                  <img src={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-600">©2024 Vutto</p>
          </div>

          <div className="w-full my-16">
            <div className="relative">
              <img
                src="/motorcycle.svg"
                alt="Person riding motorcycle"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
