export const ListPosts = () => {
  return (
    <div className="w-full md:w-[48%] bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="font-semibold text-gray-800">
          Publicações dos Usuários
        </h2>
        <button className="bg-primary text-white px-3 py-1 rounded hover:bg-primary-dark transition">
          Ver Todos
        </button>
      </header>
      <div className="p-3">
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded shadow">
            <h3 className="font-semibold text-gray-700">Post 1</h3>
            <p className="text-gray-600">Conteúdo do post 1...</p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow">
            <h3 className="font-semibold text-gray-700">Post 2</h3>
            <p className="text-gray-600">Conteúdo do post 2...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
