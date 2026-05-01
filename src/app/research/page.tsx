export default function ResearchPage() {
  const researches = [
    { title: "Теория когнитивного резонанса", status: "Опубликовано", category: "Методика и Физика" },
    { title: "Структурный анализ школьной программы", status: "В работе", category: "Образование" },
    { title: "Герменевтика исторических текстов", status: "Черновик", category: "Философия" },
  ];

  return (
    <div className="flex flex-col bg-gray-50 pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Исследования</h1>
        <p className="text-xl text-gray-600 mb-16">
          Отдельная полка для research-текстов: образование и методика, экономика и право, философия, теология и герменевтика.
        </p>
        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {researches.map((item, i) => (
              <div key={i} className="p-8 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Опубликовано' ? 'bg-green-100 text-green-800' :
                    item.status === 'В работе' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.status}
                  </span>
                  <button className="text-gray-400 hover:text-gray-900 transition-colors" title="Скачать PDF (скоро)">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
