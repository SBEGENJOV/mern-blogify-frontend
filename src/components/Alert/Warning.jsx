import { Link } from "react-router-dom";

function Warning() {
  return (
    <div className="flex flex-col items-center justify-center bg-red-100 py-2">
      <div className="p-6 m-4 w-full max-w-md bg-white shadow-md rounded-md text-center">
        <p className="mb-4 text-lg text-gray-700">
         Daha fazla gönderiyi görüntülemek için bir hesap oluşturun veya giriş yapın
        </p>
        <Link to={"/register"}>
          <button className="mb-4 w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700">
            Hesap oluştur
          </button>
        </Link>
        <Link to={"/login"}>
          <button className="w-full px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-700">
            Giriş Yap
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Warning;
