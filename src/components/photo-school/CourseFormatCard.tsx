
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface CourseFeature {
  text: string;
}

interface CourseFormatCardProps {
  icon: string;
  title: string;
  description: string;
  features: CourseFeature[];
  buttonText: string;
}

const CourseFormatCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  buttonText 
}: CourseFormatCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 h-full flex flex-col">
      <CardHeader>
        <div className="text-4xl text-[#9b87f5] mb-3">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Icon name="Check" className="text-green-500 mr-2 mt-1 h-5 w-5" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseFormatCard;
