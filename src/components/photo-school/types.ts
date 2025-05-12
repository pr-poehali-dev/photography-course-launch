
export interface CourseFeature {
  text: string;
}

export interface CourseFormat {
  icon: string;
  title: string;
  description: string;
  features: CourseFeature[];
  buttonText: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}
