// Bounded
export type BoundedProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

// Title
export type TitleProps = {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
  size?: 'lg' | 'md' | 'sm';
};

// Paragraph
export type ParagraphProps = {
  as?: 'p';
  children: React.ReactNode;
  className?: string;
  variant?: 'full' | 'half';
};

// Subscription
export type SubscriptionProps = {
  email: string;
};

// Form state
export type FormStateProps = {
  status: 'success' | 'error';
  message: string;
};

// Page Tag
export type PageTagProps = {
  icon: React.ReactElement;
  title: string;
  className?: string;
};

// properties props
export type PropertiesProps = {
  searchParams: Promise<{
    query?: string;
    type?: string;
    listingType: 'rent' | 'sale';
    lowestFirst?: boolean;
    highestFirst?: boolean;
    page?: string;
  }>;
};

// property filter
export type PropertyFilterProps = {
  query: string;
  type: string;
};

// Service Card
export type ServiceCardProps = {
  icon: React.ReactElement;
  title: string;
  body: string;
};
