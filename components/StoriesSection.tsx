import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    quote: `I didn’t think selling my bike was so easy, Zuto helped me from figuring out a quote to the final inspection. They even picked up the bike from my location`,
    name: "John Doe",
    details: "2017 Hero Karizma",
    image: "/stories.png",
  },
];

export function StoriesSection() {
  return (
    <main className="px-4 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Stories we love
          </h2>
        </div>

        <div className="mx-auto max-w-7xl">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="bg-white flex flex-col md:flex-row rounded-2xl border-2 border-[#DEDEDE]"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name} with motorcycle`}
                      className="w-110 h-110 object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left p-4">
                    <blockquote className="text-md mb-6 leading-relaxed text-[#222222]">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonial.details}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </main>
  );
}
