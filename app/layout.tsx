import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Barbearia Prime | Corte com personalidade', description: 'Site demonstrativo de barbearia com serviços, profissionais e pré-agendamento.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
