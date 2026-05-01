import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-800 font-medium text-sm mb-6">
                Образовательный центр
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Погружение в <br/>
                <span className="text-gray-400">глубокие знания</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Авторская методика Давуда Зулумханова. Изучайте математику, физику и алгоритмы мышления через понимание фундаментальных принципов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses/algorithms" className="px-8 py-4 rounded-full bg-gray-900 text-white font-medium text-center hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20">
                  Посмотреть курсы
                </Link>
                <Link href="#about" className="px-8 py-4 rounded-full bg-white text-gray-900 font-medium text-center hover:bg-gray-50 border border-gray-200 transition-all">
                  Подробнее об авторе
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 relative shadow-2xl">
                <Image 
                  src="/davud zulumkhanov.JPG" 
                  alt="Давуд Зулумханов" 
                  fill 
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <p className="font-bold text-3xl text-gray-900">10+</p>
                <p className="text-gray-500 font-medium">Лет опыта в образовании</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">О методике и авторе</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              «Незнание не довод, невежество не аргумент». Классическое образование, адаптированное под современные реалии. Мы учим не просто запоминать формулы, а понимать суть процессов.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Фундаментальность</h3>
              <p className="text-gray-600">Глубокое погружение в предмет. От основ до сложных абстракций и теорий.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002 2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Системное мышление</h3>
              <p className="text-gray-600">Развиваем способность видеть связи между разными дисциплинами и явлениями.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Практика и ИИ</h3>
              <p className="text-gray-600">Использование передовых технологий: AI-ассистенты, тренажеры и голосовой ввод.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Популярные направления</h2>
              <p className="text-gray-600">Выберите курс, который подходит именно вам.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/courses/algorithms" className="group block bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all border border-gray-100">
              <div className="aspect-[16/9] relative bg-gray-200 overflow-hidden">
                <Image src="/3KIMG_1058.jpg" alt="Алгоритмы мышления" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-800 text-xs font-medium mb-4">
                  Онлайн-курс
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Алгоритмы мышления и познания</h3>
                <p className="text-gray-600 mb-6">
                  Фундаментальный курс для развития критического и системного мышления. Раскройте тайны работы мозга.
                </p>
                <div className="flex items-center text-gray-900 font-medium">
                  Подробнее 
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

            <div className="flex flex-col justify-between space-y-8">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Математика и Физика</h3>
                <p className="text-gray-600 mb-6">
                  Подготовка, глубокое изучение и решение олимпиадных задач.
                </p>
                <span className="text-gray-400 font-medium">В разработке</span>
              </div>
              
              <div className="bg-gray-900 rounded-3xl p-8 text-white h-full flex flex-col justify-center relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3">Тренажер</h3>
                  <p className="text-gray-400 mb-6">
                    Интерактивное обучение с голосовым управлением и проверкой ИИ.
                  </p>
                  <span className="text-gray-400 font-medium">В разработке</span>
                </div>
                {/* Decoration */}
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-gray-800 rounded-tl-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
