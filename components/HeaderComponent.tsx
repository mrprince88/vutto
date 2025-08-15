"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { orbitron, poppins } from "@/lib/fonts";

export function Header() {
  const [selectedCity, setSelectedCity] = useState("Bangalore");
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div
            className={cn(
              "text-2xl font-bold text-[#D23757]",
              orbitron.className
            )}
          >
            Vutto
          </div>
          <div className="relative flex-1 max-w-md hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search by brand or model"
              className="pl-10 border-[#DEDEDE] rounded-full placeholder:text-[#B0B0B0]"
            />
          </div>
        </div>
        <div className="hidden md:block">
          <nav className={cn("flex items-center gap-6", poppins.className)}>
            <a href="#" className="text-red-500 font-bold">
              Buy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Sell
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Shortlists
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Profile
            </a>
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 text-gray-600 rounded-4xl border-2 py-1 px-4 focus:outline-none"
                onClick={() => setOpen((open) => !open)}
              >
                <span>{selectedCity}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {open && (
                <ul className="absolute left-0 mt-2 w-full bg-white border rounded shadow z-10">
                  {["Bangalore", "Mumbai", "Delhi"].map((city) => (
                    <li
                      key={city}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCity(city);
                        setOpen(false);
                      }}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-900">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 9742433546</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
