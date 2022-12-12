import { Link } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";

function Login() {
  return (
    <div className="flex items-start justify-start bg-purple-200 sm:items-center sm:justify-center sm:h-screen">
      <div className="flex flex-col overflow-hidden bg-white sm:flex-row sm:w-3/4 sm:rounded-xl sm:h-4/6">
        <div className="flex-1 w-full h-full bg-cover bg-center bg-[url(https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinyrgb&w=1600)]">
          <div className="flex flex-col w-full h-full p-10 text-white bg-gradient-to-b from-purple-900/50 to-cyan-900/50 gap-8">
            <h1 className="text-6xl">Socialzilla</h1>
            <p>
              Elit aliquid omnis cupiditate eius fugiat consectetur eius? Porro
              adipisci pariatur temporibus labore quasi Quia voluptas ea fuga a
              unde
            </p>
            <span className="text-lg">Нет учетной записи?</span>
            <Link to="/register">
              <button className="w-1/2 p-3 text-purple-900 bg-white border-none cursor-pointer">
                Регистрация
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center flex-1 order-first p-10 gap-4 overflow-y-auto">
          <h1 className="text-xl font-bold text-gray-500">Авторизация</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
