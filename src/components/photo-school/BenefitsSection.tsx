
import BenefitCard from "./BenefitCard";

const benefits = [
  {
    icon: "📸",
    title: "Понимание камеры и света",
    description: "Научитесь профессионально использовать технику и настраивать освещение для идеальных кадров."
  },
  {
    icon: "🎭",
    title: "Постановка кадров",
    description: "Освоите искусство композиции и научитесь работать с моделями для получения выразительных фотографий."
  },
  {
    icon: "✨",
    title: "Ретушь и обработка",
    description: "Изучите профессиональные приемы обработки фотографий, которые сделают ваши работы безупречными."
  },
  {
    icon: "🖼️",
    title: "Портфолио для клиентов",
    description: "Создадите впечатляющее портфолио, которое будет привлекать клиентов и выделит вас среди конкурентов."
  },
  {
    icon: "💰",
    title: "Навыки продаж",
    description: "Узнаете, как эффективно продавать свои услуги, устанавливать цены и вести переговоры с клиентами."
  },
  {
    icon: "🚀",
    title: "Запуск бизнеса",
    description: "Получите практические рекомендации по запуску и развитию собственного фотобизнеса с нуля."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Montserrat'] text-[#1A1F2C]">
          Что вы получите на обучении
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Практические навыки, которые помогут вам начать зарабатывать на фотографии
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon} 
              title={benefit.title} 
              description={benefit.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
