import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/NK_logo.png" alt="Новый Круг" width={40} height={40} className="object-contain" />
              <span className="font-bold text-xl tracking-tight text-gray-900">Новый Круг</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/courses/algorithms" className="text-gray-600 hover:text-gray-900 transition-colors">Курсы</Link>
            <Link href="/articles" className="text-gray-600 hover:text-gray-900 transition-colors">Статьи</Link>
            <Link href="/research" className="text-gray-600 hover:text-gray-900 transition-colors">Исследования</Link>
            <Link href="/books" className="text-gray-600 hover:text-gray-900 transition-colors">Книги</Link>
          </div>
          <div className="hidden md:flex">
            <Link href="/courses/algorithms" className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Начать обучение
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
