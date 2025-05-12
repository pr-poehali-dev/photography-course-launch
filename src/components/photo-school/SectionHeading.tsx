
interface SectionHeadingProps {
  title: string;
  description?: string;
}

const SectionHeading = ({ title, description }: SectionHeadingProps) => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Montserrat'] text-[#1A1F2C]">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </>
  );
};

export default SectionHeading;
