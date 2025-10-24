export interface AboutData {
  id: number;
  documentId: string;
  hero_title: string;
  hero_description: string;
  purpose: string;
  mission: string;
  vision: string;
  story: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  values: Value[];
}

export interface Value {
  id: number;
  title: string;
  description: string;
}

export interface AboutResponse {
  data: AboutData;
  meta: Record<string, unknown>;
}
