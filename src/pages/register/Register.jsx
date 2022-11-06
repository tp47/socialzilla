import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="h-screen bg-purple-200 flex items-center justify-center">
      <div className="flex flex-row-reverse w-3/4 bg-white rounded-xl h-4/6 overflow-hidden">
        <div className="flex-1 w-full h-full bg-cover bg-center bg-[url(https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinyrgb&w=1600)]">
          <div className="w-full h-full p-10 bg-gradient-to-b from-purple-900/50 to-cyan-900/50 flex flex-col gap-8 text-white ">
            <h1 className="text-6xl">Socialzilla</h1>
            <p>
              Elit aliquid omnis cupiditate eius fugiat consectetur eius? Porro
              adipisci pariatur temporibus labore quasi Quia voluptas ea fuga a
              unde
            </p>
            <span className="text-lg">Есть учетная запись?</span>
            <Link to="/login">
              <button className="w-1/2 p-3 border-none bg-white text-purple-900 cursor-pointer">
                Авторизация
              </button>
            </Link>
          </div>
        </div>
        <div className="p-8 gap-4 flex flex-col flex-1 justify-center">
          <h1 className="text-gray-500 font-bold text-xl">Регистрация</h1>
          <form className="flex flex-col gap-7" action="">
            <input
              className="border-b-gray-300 border-b-2 py-3 px-3"
              type="text"
              placeholder="Имя пользователя"
            />
            <input
              className="border-b-gray-300 border-b-2 py-3 px-3"
              type="email"
              placeholder="Адрес электронной почты"
            />
            <input
              className="border-b-gray-300 border-b-2 py-3 px-3"
              type="password"
              placeholder="Пароль"
            />
            <input
              className="border-b-gray-300 border-b-2 py-3 px-3"
              type="text"
              placeholder="Имя"
            />
            <button className="w-1/2 cursor-pointer text-white border-none p-3 bg-purple-600">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;