export default function BooksPage() {
  const books = [
    {
      title: "Простая математика",
      desc: "Фундаментальный подход к изучению математики без зубрежки. Понимание сути.",
      color: "bg-blue-900"
    },
    {
      title: "Элементарная экономика",
      desc: "Экономические законы через призму здравого смысла и человеческой деятельности.",
      color: "bg-green-900"
    },
    {
      title: "Праксиология",
      desc: "Наука о человеческой деятельности. Теория выбора и мотивации.",
      color: "bg-orange-900"
    }
  ];

  return (
    <div className="flex flex-col bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Книги</h1>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Авторские материалы в формате книг и цифровых изданий. Для тех, кто хочет видеть корпус работ как единую полку.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {books.map((book, i) => (
            <div key={i} className="flex flex-col text-left group">
              <div className={`aspect-[3/4] ${book.color} rounded-2xl mb-6 shadow-xl relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center p-8 text-center border border-gray-200/20`}>
                <div className="absolute top-0 left-0 w-8 h-full bg-black/20" />
                <h3 className="text-2xl font-bold text-white relative z-10 leading-tight">{book.title}</h3>
                <p className="text-white/60 mt-4 font-medium tracking-widest text-sm uppercase">Давуд Зулумханов</p>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{book.desc}</p>
              <button className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition-colors self-start">
                Скоро в продаже
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
