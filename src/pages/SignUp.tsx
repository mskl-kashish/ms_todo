import { useState, FormEvent } from "react"; // Import FormEvent for event type
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../client";

type UserData = {
  email: string;
  password: string;
};

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUpHandler = async (
    e: FormEvent,
    signData: UserData
  ): Promise<void> => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: signData.email,
        password: signData.password,
      });

      if (error) {
        console.error("Error signing up:", error);
      } else {
        console.log("User signed up successfully:", data);
        navigate("/login");
      }
    } catch (err) {
      console.error("Error signing up:", err);
    }
  };

  return (
    <div className="login__div">
      <div className="login__container">
        <h2 className="heading__primary600 textAlign__center">
          Join us today!
        </h2>
        <form
          className="input__container"
          onSubmit={(e) => signUpHandler(e, { email, password })}
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
            Sign Up
          </button>
          <h2 className="heading__small textAlign__center">
            Already Have an account ?{" "}
            <Link to="/login">
              {" "}
              <span className="cursor__pointer" style={{ color: "blue" }}>
                SignIn
              </span>
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Signup;
