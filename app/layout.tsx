import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'АристократЪ — гастробар в центре Уфы', description: 'Гастробар «АристократЪ»: авторская кухня, коктейли и живая музыка. г. Уфа, улица Ленина, 75.', icons: {icon:'/favicon.svg'} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ru"><head><link rel="stylesheet" href="/assets/fonts.css"/></head><body>{children}</body></html>}
