
import CourseFormatCard from "./CourseFormatCard";

const courseFormats = [
  {
    icon: "💻",
    title: "Онлайн-курс (запись)",
    description: "Учитесь в любое время, в удобном темпе",
    features: [
      { text: "Подходит новичкам" },
      { text: "Доступ 6 месяцев" },
      { text: "Занимайтесь в своем темпе" }
    ],
    buttonText: "Подробнее"
  },
  {
    icon: "🧑‍🏫",
    title: "Индивидуальное наставничество",
    description: "Персональный подход и внимание к вашему прогрессу",
    features: [
      { text: "Обучение 1 на 1" },
      { text: "Разбор портфолио" },
      { text: "Помощь в запуске" }
    ],
    buttonText: "Оставить заявку"
  },
  {
    icon: "👥",
    title: "Групповой интенсив",
    description: "Следующий поток: 10 июня 2025",
    features: [
      { text: "Zoom-сессии и домашние задания" },
      { text: "Общий чат для поддержки" },
      { text: "Ограничено: 15 мест" }
    ],
    buttonText: "Забронировать"
  },
  {
    icon: "🎓",
    title: "Мастер-классы",
    description: "Короткие интенсивные занятия по конкретным темам",
    features: [
      { text: "Ретушь / съёмка / свет" },
      { text: "Продолжительность: 2–3 часа" },
      { text: "Доступ к записи" }
    ],
    buttonText: "Посмотреть расписание"
  }
];

const CourseFormatsSection = () => {
  return (
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
          {courseFormats.map((format, index) => (
            <CourseFormatCard 
              key={index}
              icon={format.icon}
              title={format.title}
              description={format.description}
              features={format.features}
              buttonText={format.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFormatsSection;
