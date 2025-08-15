import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          FAQs
        </h2>

        <Accordion type="single" collapsible className="space-y-2">
          <AccordionItem
            value="item-1"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-medium">
              How does Zutto pricing work?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Our pricing is transparent and competitive. We provide instant
              quotes based on market value and bike condition.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-medium">
              Are all your bikes Zutto certified?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes, all bikes go through our comprehensive certification process
              to ensure quality and reliability.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-medium">
              Does Zutto buy bikes that are registered outside Karnataka?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes, we buy bikes registered in other states. Our team handles all
              the paperwork for interstate transfers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-medium">
              How does Zutto determine the price?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              We use advanced algorithms considering market trends, bike
              condition, age, and mileage to determine fair pricing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-medium">
              Does Zutto take bikes on consignment?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Currently, we focus on direct purchases to provide immediate
              payment to sellers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-medium">
              What financing is available when I buy from Zutto with
              pre-approved financing?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              We partner with leading financial institutions to offer
              competitive loan rates and flexible payment options.
            </AccordionContent>
          </AccordionItem>
          <div />
        </Accordion>
      </div>
    </section>
  );
}
