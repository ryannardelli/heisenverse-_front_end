import { ListPosts } from "../ListPosts";
import { IoCreateOutline, IoEyeOutline, IoTrashOutline } from "react-icons/io5";

export const ListUsers = () => {
  return (
    <section className="antialiased bg-white text-gray-600 mt-20 mb-20 md:mb-0 lg:mb-0 px-4">
      <div className="flex flex-wrap justify-center gap-6">
        {/* Tabela Usuários */}
        <div className="w-full md:w-[48%] bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-800">Usuários</h2>
            <button className="bg-primary text-white px-3 py-1 rounded hover:bg-primary-dark transition">
              Ver Todos
            </button>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Nome</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Função</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Ações</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {/* Usuários */}
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                            width="40"
                            height="40"
                            alt="Alex Shatov"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          Alex Shatov
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">alexshatov@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-primary">
                        Membro
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex justify-center space-x-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <IoEyeOutline size={18} />
                        </button>
                        <button className="text-yellow-500 hover:text-yellow-700">
                          <IoCreateOutline size={18} />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <IoTrashOutline size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                            width="40"
                            height="40"
                            alt="Philip Harbach"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          Philip Harbach
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">philip.h@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-primary">
                        Membro
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex justify-center space-x-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <IoEyeOutline size={18} />
                        </button>
                        <button className="text-yellow-500 hover:text-yellow-700">
                          <IoCreateOutline size={18} />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <IoTrashOutline size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                            width="40"
                            height="40"
                            alt="Mirko Fisuk"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          Mirko Fisuk
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">mirkofisuk@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-primary">
                        Membro
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex justify-center space-x-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <IoEyeOutline size={18} />
                        </button>
                        <button className="text-yellow-500 hover:text-yellow-700">
                          <IoCreateOutline size={18} />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <IoTrashOutline size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                            width="40"
                            height="40"
                            alt="Olga Semklo"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          Olga Semklo
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">olga.s@cool.design</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-primary">
                        Membro
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex justify-center space-x-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <IoEyeOutline size={18} />
                        </button>
                        <button className="text-yellow-500 hover:text-yellow-700">
                          <IoCreateOutline size={18} />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <IoTrashOutline size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                            width="40"
                            height="40"
                            alt="Burak Long"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          Burak Long
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">longburak@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-primary">
                        Membro
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex justify-center space-x-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <IoEyeOutline size={18} />
                        </button>
                        <button className="text-yellow-500 hover:text-yellow-700">
                          <IoCreateOutline size={18} />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <IoTrashOutline size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Posts */}
        <ListPosts />
      </div>
    </section>
  );
};
