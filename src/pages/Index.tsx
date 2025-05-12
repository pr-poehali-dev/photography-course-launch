import HeroSection from "@/components/photo-school/HeroSection";
import CourseFormatsSection from "@/components/photo-school/CourseFormatsSection";
import BenefitsSection from "@/components/photo-school/BenefitsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Форматы обучения */}
      <CourseFormatsSection />

      {/* Что вы получите */}
      <BenefitsSection />
    </div>
  );
};

export default Index;
