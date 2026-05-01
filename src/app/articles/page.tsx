import Link from "next/link";

export default function ArticlesPage() {
  const methodologyArticles = [
    { 
      title: "Предпринимательская картина мира", 
      desc: "Программный текст о школе уровней, деньгах как мере ценности и переходе от предметной раздробленности к действию.",
      url: "/articles/predprinimatelskaya-kartina-mira" 
    },
    { 
      title: "Закон Архимеда", 
      desc: "Физика как расчёт риска, груза, прибыли и предела, а не просто формула о теле в жидкости.",
      url: "/articles/zakon-arhimeda" 
    },
    { 
      title: "Раздел динамики", 
      desc: "Переосмысление динамики как языка движения, устойчивости, столкновений и потерь.",
      url: "/articles/dinamika" 
    },
    { 
      title: "Квадратные уравнения", 
      desc: "Алгебра как способ находить границы проекта, точки безубыточности и максимум результата.",
      url: "/articles/kvadratnye-uravneniya" 
    },
  ];

  const publicismArticles = [
    { title: "О природе стоимости", url: "#" },
    { title: "Философия языка", url: "#" },
    { title: "Исторические параллели", url: "#" },
  ];

  return (
    <div className="flex flex-col bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Статьи и методика</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Methodology */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100 flex items-center gap-3">
              <span className="bg-gray-100 text-gray-800 w-10 h-10 rounded-xl flex items-center justify-center">🏫</span>
              Методика преподавания
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Здесь собираются тексты, в которых физика и математика возвращаются к действию, риску, расчету, границе и предпринимательской логике.
            </p>
            <div className="space-y-4">
              {methodologyArticles.map((article, i) => (
                <Link key={i} href={article.url} className="block group bg-gray-50 hover:bg-gray-100 p-6 rounded-2xl transition-all border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    {article.desc}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-gray-400 group-hover:text-gray-900 transition-colors">
                    Читать статью <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Publicism */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100 flex items-center gap-3">
              <span className="bg-gray-100 text-gray-800 w-10 h-10 rounded-xl flex items-center justify-center">✒️</span>
              Публицистика
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Корпус текстов по экономике, истории, философии, теологии и герменевтике — самостоятельная авторская линия.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-10 rounded-3xl border border-dashed border-gray-200 text-center flex flex-col items-center justify-center">
                <p className="text-gray-400 font-medium italic">Раздел в очереди на наполнение</p>
                <p className="text-gray-400 text-sm mt-2">Скоро здесь появятся первые тексты по экономике и истории.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
