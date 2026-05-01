import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="font-bold text-xl tracking-tight text-gray-900">Новый Круг</span>
            <p className="mt-4 text-gray-500 max-w-sm">
              Образовательный центр Давуда Зулумханова. Глубокое погружение в знания, практику и саморазвитие.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Навигация</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-500 hover:text-gray-900">Главная</Link></li>
              <li><Link href="/courses/algorithms" className="text-gray-500 hover:text-gray-900">Курсы</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Материалы</h3>
            <ul className="space-y-3">
              <li><Link href="/articles" className="text-gray-500 hover:text-gray-900">Статьи</Link></li>
              <li><Link href="/research" className="text-gray-500 hover:text-gray-900">Исследования</Link></li>
              <li><Link href="/books" className="text-gray-500 hover:text-gray-900">Книги</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Новый Круг. Все права защищены.</p>
          <a href="mailto:info@novykrug.com" className="hover:text-gray-900">info@novykrug.com</a>
        </div>
      </div>
    </footer>
  );
}
