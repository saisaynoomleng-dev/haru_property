import type { Metadata } from 'next';
import './globals.css';
import { objectivity } from '@/lib/fonts';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: {
    template: '%s | Haru Property',
    default: 'Haru Property',
  },
  description:
    'Haru Property is a Real State Agency Company based in United States with hundreds of listings for both sale and rent from the agents. Users can also post a property for listing with both paid and free features and free access to all listings.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={objectivity.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
