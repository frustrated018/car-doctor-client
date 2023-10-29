import { useContext } from "react";
import sideImg from "../assets/images/login/login.svg";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {

  const {createUser} = useContext(AuthContext)

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Submit button clicked", email, password, name);

    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.log(error))
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div>
            <img src={sideImg} alt="Logo Banner" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm border border-gray-700">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="font-bold text-center text-neutral-700 text-[40px]">
                Sign Up
              </h1>

              {/* Input box */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-800 font-semibold">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className=" px-3 py-3 rounded-lg bg-transparent border-2 border-gray-200 text-gray-800 focus:outline-none"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-800 font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="Password"
                  className="px-3 py-3 rounded-lg bg-transparent border-2 border-gray-200 text-gray-800 focus:outline-none"
                  required
                />
              </div>

              <div className=" flex flex-col mt-4">
                <input
                  type="submit"
                  value="Sign Up"
                  className="bg-orange-600 py-3 rounded-lg text-white font-semibold text-xl hover:bg-orange-400"
                />
              </div>
              <label className="mt-3 text-gray-800">
                <a href="/login">
                  Already have an account?{" "}
                  <span className=" text-sm hover:underline text-orange-600 font-semibold">
                    Login
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

export default SignUp;
