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
