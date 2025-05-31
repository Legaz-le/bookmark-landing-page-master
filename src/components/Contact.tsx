import { useState } from "react";

const Contack = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email cannot be empty";
    if (!emailRegex.test(email)) return "Whoops, make sure it's an email";
    return "";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validateEmail(email);
    setError(validationError);

    if (!validationError) {
      alert(`✅ Email submitted: ${email}`);
      setEmail("");
      setError("");
    }
  };

  return (
    <section className=" relative py-20">
      <div
        className="absolute  inset-0 bg-Blue-600 h-full w-screen -z-10"
        style={{
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
          <div className="text-center  md:max-w-150">
            <p className="text-white uppercase tracking-widest text-sm mb-4 font-display">
              35,000+ already joined
            </p>
            <h1 className="text-2xl md:text-3xl font-medium text-white mb-8 leading-tight md:px-25 font-display">
              Stay up-to-date with what we're doing
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative ">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Enter your email address"
                    className={`py-3 px-4 w-65 rounded focus:outline-none focus:ring-2 ${
                      error
                        ? "bg-red-50 border border-red-500 focus:ring-red-300 text-red-600 pr-10"
                        : "bg-white focus:ring-blue-300"
                    }`}
                  />

                  {error && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {error && (
                  <div className="absolute  left-0  text-left w-full">
                    <span className="text-Grey-50 italic text-sm flex items-center bg-Red-400 px-2 py-1 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {error}
                    </span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-3 rounded font-display cursor-pointer hover:bg-white hover:text-red-500 border-2 border-transparent hover:border-red-500 transition-all duration-300 whitespace-nowrap"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contack;
