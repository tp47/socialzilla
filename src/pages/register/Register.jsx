import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex items-start justify-start bg-purple-200 sm:items-center sm:justify-center sm:h-screen">
      <div className="flex flex-col overflow-hidden bg-white sm:flex-row sm:w-3/4 sm:rounded-xl sm:h-4/6">
        <div className="flex-1 w-full h-full bg-cover bg-center bg-[url(https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinyrgb&w=1600)]">
          <div className="flex flex-col w-full h-full p-10 text-white bg-gradient-to-b from-purple-900/50 to-cyan-900/50 gap-8">
            <h1 className="text-6xl">Socialzilla</h1>
            <p>
              Elit aliquid omnis cupiditate eius fugiat consectetur eius? Porro
              adipisci pariatur temporibus labore quasi Quia voluptas ea fuga a
              unde
            </p>
            <span className="text-lg">Есть учетная запись?</span>
            <Link to="/login">
              <button className="w-full p-3 text-purple-900 bg-white border-none cursor-pointer sm:w-1/2">
                Авторизация
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center flex-1 order-first p-8 gap-4 sm:order-none">
          <h1 className="text-xl font-bold text-gray-500">Регистрация</h1>
          <form className="flex flex-col gap-7" action="">
            <input
              className="px-3 py-3 border-b-2 border-b-gray-300"
              type="text"
              placeholder="Имя пользователя"
            />
            <input
              className="px-3 py-3 border-b-2 border-b-gray-300"
              type="email"
              placeholder="Адрес электронной почты"
            />
            <input
              className="px-3 py-3 border-b-2 border-b-gray-300"
              type="password"
              placeholder="Пароль"
            />
            <input
              className="px-3 py-3 border-b-2 border-b-gray-300"
              type="text"
              placeholder="Имя"
            />
            <button className="w-full p-3 text-white bg-purple-600 border-none cursor-pointer sm:w-1/2">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
