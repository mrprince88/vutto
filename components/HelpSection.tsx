import { Button } from "@/components/ui/button";

export function HelpSection() {
  return (
    <section className="px-4 py-8 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Need more help?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-4xl"
          >
            Mail us
          </Button>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-4xl">
            Talk to us on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
