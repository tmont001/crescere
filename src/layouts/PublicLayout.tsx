import type { ReactNode } from 'react';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

interface PublicLayoutProps {
  children: ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-paper">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
