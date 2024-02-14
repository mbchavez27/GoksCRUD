import dlsu from "../assets/dlsu.png";

const SignUp = () => {
  return (
    <>
      <div className="h-screen flex flex-col  items-center justify-center font-openSans">
        <div className="border-1 rounded-lg bg-emerald-900	shadow-lg shadow-black mb-20">
          <div className=" border-1 rounded-lg pt-4 pb-6 flex flex-col justify-center bg-emerald-800">
            <div className="flex justify-center">
              <img className="size-16 mt-4 mb-4" src={dlsu} alt="DLSU Logo" />
            </div>
            <h1 className="flex justify-center mt-2 mb-4 font-bold text-3xl text-white">
              Goks App:
            </h1>
            <p className="flex justify-center text-lg text-white">Sign Up</p>
          </div>
          <form action="" className="flex flex-col m-4 text-white">
            <div className="m-3">
              <label htmlFor="userName">
                Username:{" "}
                <input
                  className="border-1 bg-emerald-700 rounded-lg p-2 ml-2 hover:bg-emerald-800 transition duration-300 ease-in-out"
                  type="text"
                  name="userName"
                />
              </label>
            </div>
            <div className="m-3 mb-6">
              <label htmlFor="userName">
                Password:{" "}
                <input
                  className="border-1 bg-emerald-700 rounded-lg p-2 ml-2 hover:bg-emerald-800 transition duration-300 ease-in-out"
                  type="password"
                  name="userName"
                />
              </label>
            </div>
            <div className="flex justify-center m-3">
              <input
                className="border-1 font-bold bg-emerald-700	rounded-lg px-4 py-2 hover:bg-emerald-800 transition duration-300 ease-in-out"
                type="button"
                value="Log In"
              />
            </div>
            <div className="flex justify-center m-3">
              <input
                className="border-1 font-bold bg-emerald-700 rounded-lg px-4 py-2 text-xs hover:bg-emerald-800 transition duration-300 ease-in-out"
                type="button"
                value="Create Account"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
