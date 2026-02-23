import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alma Lírica - Refugio de Versos',
  description: 'Un espacio introspectivo para la calma y la poesía generativa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen relative">
        <div className="particles-bg" />
        {children}
      </body>
    </html>
  );
}
