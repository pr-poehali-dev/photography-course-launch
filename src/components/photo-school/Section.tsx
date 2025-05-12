
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  background?: "white" | "gray";
}

const Section = ({ 
  children, 
  className, 
  background = "white",
  ...props 
}: SectionProps) => {
  return (
    <section 
      className={cn(
        "py-20", 
        background === "gray" ? "bg-gray-50" : "bg-white",
        className
      )}
      {...props}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;
