import Image from "next/image";
import Link from "next/link";

export default function CoursePage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Course Hero */}
      <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-800 font-medium text-sm mb-6">
            Онлайн-курс философии и логики
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Алгоритмы мышления <br/>и познания
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Фундаментальный курс для развития критического и системного мышления. Путь к истине через абстрагирование.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-lg">
              Начать обучение
            </button>
            <button className="px-8 py-4 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-50 border border-gray-200 transition-colors">
              Смотреть программу
            </button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Развитие мышления</h3>
              <p className="text-gray-600">Фокус на развитии способности думать, анализировать информацию, выявлять логические ошибки и делать обоснованные выводы.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Сложные системы</h3>
              <p className="text-gray-600">Научитесь видеть закономерности в сложных системах, таких как экономика, социальные структуры и когнитивные процессы.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Практическое применение</h3>
              <p className="text-gray-600">Каждый урок содержит практические задания для закрепления полученных знаний. Работа с абстрактными понятиями в реальной жизни.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Программа курса</h2>
          
          <div className="space-y-6">
            {[
              { num: "I", lessons: "Уроки 1-4", title: "Основы абстрактного мышления, счёт и формулы", desc: "Введение в базовые логические концепции и основы количественного анализа." },
              { num: "II", lessons: "Уроки 5-9", title: "Человеческая деятельность, экономика и когнитивные процессы", desc: "Анализ принятия решений и поведенческой экономики." },
              { num: "III", lessons: "Уроки 10-14", title: "Теория когнитивного резонанса и природа сознания", desc: "Глубокое погружение в механизмы работы человеческого восприятия." },
              { num: "IV", lessons: "Уроки 15-17", title: "Теория всего и путь к истине через абстрагирование", desc: "Интеграция полученных знаний в единую картину мира." }
            ].map((module, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                <div className="md:w-24 flex-shrink-0">
                  <span className="text-5xl font-light text-gray-300">{module.num}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{module.lessons}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">{module.title}</h3>
                  <p className="text-gray-600">{module.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - AI & Tech */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-white overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm mb-6">
                Инновации в обучении
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Интегрированный <br/>AI-помощник
              </h2>
              <ul className="space-y-4 mb-10 text-gray-300 text-lg">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Генерация индивидуальных вопросов
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Голосовой ввод ответов для удобства
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Text-to-Speech озвучка материалов
                </li>
              </ul>
            </div>
            
            <div className="absolute right-0 bottom-0 opacity-20 md:opacity-100 pointer-events-none translate-x-1/4 translate-y-1/4">
              <div className="w-[500px] h-[500px] rounded-full border border-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-[300px] h-[300px] rounded-full border border-white/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-[100px] h-[100px] rounded-full bg-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
