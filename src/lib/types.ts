export type Portfolio = {
  id: string;
  title: string;
  category: string | null;
  thumbnail_url: string;
  images: string[];
  preview_description: string;
  detail_description: string;
  client_name: string | null;
  work_period: string | null;
  tech_stack: string[];
  external_link: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type Inquiry = {
  id: string;
  name: string;
  contact: string;
  message: string;
  attachment_urls: string[];
  status: "new" | "read" | "done";
  created_at: string;
};

export type InquiryStatus = Inquiry["status"];

export type Review = {
  id: number;
  clientName?: string;
  rawName: string;
  category: string;
  rating: number;
  date: string;
  badge?: string;
  content: string;
};
