import '@/app/ui/global.css';
import { inter } from '@/app/ui/font';
import { blackOps } from '@/app/ui/font'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${blackOps.variable} antialiased`}>{children}</body>
    </html>
  );
}
