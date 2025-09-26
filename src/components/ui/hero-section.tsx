import { Button } from "@/components/ui/button";
import restaurantHero from "@/assets/restaurant-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${restaurantHero})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
          كل ونام
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
          طعم أصيل من قلب المطبخ العربي
        </p>
        <p className="text-lg md:text-xl mb-12 text-white/80 leading-relaxed">
          استمتع بأشهى الأطباق العربية التقليدية في أجواء مريحة ومميزة
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-warm text-white border-0 hover:scale-105 transition-transform shadow-warm px-8 py-6 text-lg"
          >
            اطلع على القائمة
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-6 text-lg"
          >
            احجز طاولة
          </Button>
        </div>
      </div>
    </section>
  );
};