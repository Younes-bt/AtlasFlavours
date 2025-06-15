import { Button } from "@/components/ui/button";
import welcomeImage from "@/assets/Welcom.png";

const Hero = () => {
  return (
    <section className="relative w-full bg-background moroccan-pattern min-h-screen flex items-center">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-16 md:py-24 lg:py-32">
        {/* Image on the left */}
        <div className="order-1 md:order-none">
          <img
            src={welcomeImage}
            alt="Traditional Moroccan dish"
            className="rounded-xl m-auto object-center w-100% h-100% max-h-[500px]"
          />
        </div>

        {/* Text & CTA on the right */}
        <div className="flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-gradient">
            Taste the Essence of Morocco
          </h1>
          <p className="text-lg md:text-xl mb-6 text-muted-foreground max-w-prose">
            Authentic Moroccan cuisine crafted with passion in the heart of Sweden. Immerse
            yourself in vibrant flavors, warm hospitality, and an unforgettable dining
            experience.
          </p>
          <Button size="lg" className="px-8 py-4 text-lg">
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 