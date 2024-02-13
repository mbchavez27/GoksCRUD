const LogIn = () => {
  return (
    <>
      <div className="h-screen flex flex-col  items-center justify-center">
        <div className="p-2 border-1 rounded-lg bg-green-500	shadow-lg shadow-black mb-20">
          <div className="flex justify-center mt-4 mb-2 pb-2 font-bold text-3xl text-white">
            <h1>Goks App:</h1>
          </div>
          <div className="mb-4 flex justify-center font-bold text-lg text-white">
            Log In
          </div>
          <form action="" className="flex flex-col m-4 text-white">
            <div className="m-3">
              <label htmlFor="userName">
                Username:{" "}
                <input
                  className="border-1 bg-green-600 rounded-lg p-2 ml-2 hover:bg-green-700 transition duration-300 ease-in-out"
                  type="text"
                  name="userName"
                />
              </label>
            </div>
            <div className="m-3">
              <label htmlFor="userName">
                Password:{" "}
                <input
                  className="border-1 bg-green-600 rounded-lg p-2 ml-2 hover:bg-green-700 transition duration-300 ease-in-out"
                  type="password"
                  name="userName"
                />
              </label>
            </div>
            <div className="flex justify-center m-3">
              <input
                className="border-1 font-bold bg-green-600	rounded-lg px-4 py-2 hover:bg-green-700 transition duration-300 ease-in-out"
                type="button"
                value="Log In"
              />
            </div>
            <div className="flex justify-center m-3">
              <input
                className="border-1 font-bold bg-green-600 rounded-lg px-4 py-2 text-xs hover:bg-green-700 transition duration-300 ease-in-out"
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

export default LogIn;
