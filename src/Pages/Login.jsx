import sideImg from "../assets/images/login/login.svg";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div>
            <img src={sideImg} alt="Logo Banner" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm border border-gray-700">
          <form className="card-body">
            <h1 className="text-[40px] font-bold text-center text-gray-800">Login</h1>

            {/* Input box */}

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-800 font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className=" px-3 py-3 rounded-lg bg-transparent border-2 border-gray-200 text-gray-800 focus:outline-none"
                required
              />
             
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-800 font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="px-3 py-3 rounded-lg bg-transparent border-2 border-gray-200 text-gray-800 focus:outline-none"
                required
              />
              
            </div>
            <div className=" flex flex-col mt-4">
              <button className="bg-orange-600 py-3 rounded-lg text-white font-semibold text-xl hover:bg-orange-400">
                Login
              </button>
            </div>
            <label className="mt-3 text-gray-800">
              <a href="/signup">
                Don&apos;t have an account?{" "}
                <span className=" text-sm hover:underline text-orange-600 font-semibold">
                  Sign Up
                </span>
              </a>
            </label>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
