
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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

      {/* Форматы обучения */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Montserrat'] text-[#1A1F2C]">
            Выберите свой формат обучения
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Мы предлагаем разные форматы для разных целей и возможностей. 
            Выберите тот, который подходит именно вам.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Онлайн-курс */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 h-full flex flex-col">
              <CardHeader>
                <div className="text-4xl text-[#9b87f5] mb-3">💻</div>
                <CardTitle>Онлайн-курс (запись)</CardTitle>
                <CardDescription>Учитесь в любое время, в удобном темпе</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1 h-5 w-5" />
                    <span>Подходит новичкам</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1 h-5 w-5" />
                    <span>Доступ 6 месяцев</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1 h-5 w-5" />
                    <span>Занимайтесь в своем темпе</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                  Подробнее
                </Button>
              </CardFooter>
            </Card>

            {/* Индивидуальное наставничество */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 h-full flex flex-col">
              <CardHeader>
                <div className="text-4xl text-[#9b87f5] mb-3">🧑‍🏫</div>
                <CardTitle>Индивидуальное наставничество</CardTitle>
                <CardDescription>Персональный подход и внимание к вашему прогрессу</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1 h-5 w-5" />
                    <span>Обучение 1 на 1</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1 h-5 w-5" />
                    <span>Разбор портфолио</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1 h-5 w-5" />
                    <span>Помощь в запуске</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                  Оставить заявку
                </Button>
              </CardFooter>
            </Card>

            {/* Групповой интенсив */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 h-full flex flex-col">
              <CardHeader>
                <div className="text-4xl text-[#9b87f5] mb-3">👥</div>
                <CardTitle>Групповой интенсив</CardTitle>
                <CardDescription>Следующий поток: 10 июня 2025</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1 h-5 w-5" />
                    <span>Zoom-сессии и домашние задания</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1 h-5 w-5" />
                    <span>Общий чат для поддержки</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1 h-5 w-5" />
                    <span>Ограничено: 15 мест</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                  Забронировать
                </Button>
              </CardFooter>
            </Card>

            {/* Мастер-классы */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 h-full flex flex-col">
              <CardHeader>
                <div className="text-4xl text-[#9b87f5] mb-3">🎓</div>
                <CardTitle>Мастер-классы</CardTitle>
                <CardDescription>Короткие интенсивные занятия по конкретным темам</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1 h-5 w-5" />
                    <span>Ретушь / съёмка / свет</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1 h-5 w-5" />
                    <span>Продолжительность: 2–3 часа</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1 h-5 w-5" />
                    <span>Доступ к записи</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                  Посмотреть расписание
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Что вы получите */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Montserrat'] text-[#1A1F2C]">
            Что вы получите на обучении
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Практические навыки, которые помогут вам начать зарабатывать на фотографии
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl text-[#9b87f5] mb-3">📸</div>
              <h3 className="text-xl font-semibold mb-2">Понимание камеры и света</h3>
              <p className="text-gray-600">Научитесь профессионально использовать технику и настраивать освещение для идеальных кадров.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl text-[#9b87f5] mb-3">🎭</div>
              <h3 className="text-xl font-semibold mb-2">Постановка кадров</h3>
              <p className="text-gray-600">Освоите искусство композиции и научитесь работать с моделями для получения выразительных фотографий.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl text-[#9b87f5] mb-3">✨</div>
              <h3 className="text-xl font-semibold mb-2">Ретушь и обработка</h3>
              <p className="text-gray-600">Изучите профессиональные приемы обработки фотографий, которые сделают ваши работы безупречными.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl text-[#9b87f5] mb-3">🖼️</div>
              <h3 className="text-xl font-semibold mb-2">Портфолио для клиентов</h3>
              <p className="text-gray-600">Создадите впечатляющее портфолио, которое будет привлекать клиентов и выделит вас среди конкурентов.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl text-[#9b87f5] mb-3">💰</div>
              <h3 className="text-xl font-semibold mb-2">Навыки продаж</h3>
              <p className="text-gray-600">Узнаете, как эффективно продавать свои услуги, устанавливать цены и вести переговоры с клиентами.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl text-[#9b87f5] mb-3">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Запуск бизнеса</h3>
              <p className="text-gray-600">Получите практические рекомендации по запуску и развитию собственного фотобизнеса с нуля.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
