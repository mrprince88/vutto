"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative bg-white rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-white stroke-[3]" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Thank you!</h2>
          <p className="text-gray-600 text-base">
            Our expert will get in touch with you soon.
          </p>
        </div>

        <Button
          onClick={onClose}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full text-base font-medium"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
