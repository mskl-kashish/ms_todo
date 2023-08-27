import { FormEvent, useState } from "react";
import { supabase } from "../client";
type userData = {
  email: string;
  password: string;
};
const Login = () => {
  //
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loginHandler = async (
    e: FormEvent,
    formData: userData
  ): Promise<void> => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) {
        console.error("Error signing up:", error);
      } else {
        console.log("User signed up successfully:", data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login__div">
      <div className="login__container">
        <h2 className="heading__primary600 textAlign__center">
          Welcome back !
        </h2>
        <form
          className="input__container"
          onSubmit={(e) => loginHandler(e, { email, password })}
        >
          <div className="flex direction_column gap__10px">
            <label htmlFor="Email" className="heading__small">
              Email
            </label>
            <input
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input_style"
            />
          </div>
          <div className="flex direction_column gap__10px">
            <label htmlFor="Password" className="heading__small">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="Password"
              placeholder="Enter your Password"
              className="input_style"
            />
          </div>
          <button type="submit" className="btn__primary">
            Login
          </button>
          <h2 className="heading__small textAlign__center">
            Don't Have an account ?{" "}
            <span className="cursor__pointer" style={{ color: "blue" }}>
              SignUp
            </span>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;
