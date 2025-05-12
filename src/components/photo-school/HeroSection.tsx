
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C]/80 to-[#1A1F2C]/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070" 
          alt="Фотограф за работой" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Montserrat'] leading-tight mb-4">
            Научись зарабатывать на фотографии — от первых шагов до уверенного дохода
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-['Open_Sans'] mb-8">
            Программы обучения от действующего фотографа с 8-летним опытом
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              Посмотреть форматы обучения
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Получить бесплатный урок
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
