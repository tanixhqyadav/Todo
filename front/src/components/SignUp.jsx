import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div style={styles.signupContainer}>
      <div style={styles.signupFormContainer}>
        <div style={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" style={styles.whiteBtn}>
              Sign In
            </button>
          </Link>
        </div>
        <div style={styles.right}>
          <form style={styles.formContainer} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              style={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              style={styles.input}
            />
            {error && <div style={styles.errorMsg}>{error}</div>}
            <button type="submit" style={styles.greenBtn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  signupContainer: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signupFormContainer: {
    width: "900px",
    height: "500px",
    display: "flex",
    borderRadius: "10px",
    boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
  },
  left: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3bb19b",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  right: {
    flex: "2",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    outline: "none",
    border: "none",
    width: "370px",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#edf5f3",
    margin: "5px 0",
    fontSize: "14px",
  },
  errorMsg: {
    width: "370px",
    padding: "15px",
    margin: "5px 0",
    fontSize: "14px",
    backgroundColor: "#f34646",
    color: "white",
    borderRadius: "5px",
    textAlign: "center",
  },
  whiteBtn: {
    border: "none",
    outline: "none",
    padding: "12px 0",
    backgroundColor: "white",
    borderRadius: "20px",
    width: "180px",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
  },
  greenBtn: {
    border: "none",
    outline: "none",
    padding: "12px 0",
    backgroundColor: "#3bb19b",
    color: "white",
    borderRadius: "20px",
    width: "180px",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
    margin: "10px",
  },
};

export default SignUp;
