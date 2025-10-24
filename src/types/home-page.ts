export interface Media {
  id?: number;
  documentId?: string;
  name?: string;
  alternativeText: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: Record<string, unknown> | null;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url: string;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: Record<string, unknown> | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface Need {
  id?: number;
  title?: string;
  description?: string;
  btn_text?: string;
  icon?: string; // e.g. "GraduationCap", "TrendingUp"
}

export interface Reason {
  id?: number;
  title: string;
  description?: string;
  image?: Media;
}

export interface Feature {
  id: number;
  text: string;
}

export interface Course {
  id: number;
  documentId: string;
  title: string;
  duration: string;
  certification: string;
  description: string | null;
  price: string;
  highlight: boolean;
  isPro: boolean;
  buttonText: string;
  plan: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  features: Feature[];
}

export interface Analytic
  extends Omit<
    Course,
    | "duration"
    | "certification"
    | "description"
    | "buttonText"
    | "plan"
    | "isPro"
  > {
  btn_text: string;
  analyticDescription: string;
}

export interface Consultation {
  id?: number;
  documentId?: string;
  title?: string;
  description?: string | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface Service {
  id?: number;
  header?: string;
  title?: string;
  description?: string;
  btn_text?: string;
  icon?: string;
  image?: Media;
  analytics?: Analytic[];
  courses?: Course[];
  consultations?: Consultation[];
}

export interface Testimonial {
  id?: number;
  quote?: string;
  author?: string;
}

export interface HomeData {
  id?: number;
  documentId?: string;
  hero_title?: string;
  hero_description?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  needs?: Need[];
  reasons?: Reason[];
  services?: Service[];
  testimonials?: Testimonial[];
}

export interface HomeResponse {
  data?: HomeData;
  meta?: Record<string, unknown>;
}
