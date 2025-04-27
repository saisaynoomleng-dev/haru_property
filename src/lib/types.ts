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
