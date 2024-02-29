import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Link} from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Login = () => {
    const [loginMethod, setLoginMethod] = useState('email');
    const [email, setEmail] = useState("")
    const [id, setId ] = useState("")

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const idChangeHandler = (e) => {
        setId(e.target.value)
    }

    const loginHandler = (e) => {
        e.preventDefault()
        if (loginMethod === 'email') {
            // do something
        } else if (loginMethod === 'id') {
            // do something
        }
    }
    return(
        <section className="mx-[5%]">
            <Header />
            <div className="flex flex-col gap-5 items-center text-xl font-mono justify-center mt-10 mx-[5%]">
            <div className="bg-pink-200 p-5 shadow-lg rounded-md h-full w-[100%] md:w-[70vh] mt-10">
            <form onSubmit={loginHandler} className="flex flex-col">
              <div className="mb-3 space-x-2">
                    <label className="text-gray-600">
                        <input
                        type="radio"
                        value="email"
                        checked={loginMethod === 'email'}
                        onChange={() => setLoginMethod('email')}
                        />
                        Email
                    </label>
                    <input
                        value={email}
                        onChange={emailChangeHandler}
                        type="email"
                        required={true}
                        className="w-[75%] rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                        disabled={loginMethod !== 'email'}
                    />
            </div>
            <div>
                <label className="text-gray-600">
                <input
                type="radio"
                value="phone"
                checked={loginMethod === 'id'}
                onChange={() => setLoginMethod('id')}
                />
                National ID
                </label>
                <input
                    value={id}
                    onChange={idChangeHandler}
                    type="number"
                    required={true}
                    className="w-[100%] mb-[3%] rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                    disabled={loginMethod !== 'id'}
                />
            </div>
              <button className="text-white font-bold rounded-md w-[40%] mx-[35%] bg-gray-400 hover:bg-gray-500 p-2">
                Login
              </button>
            </form>
            <div className="flex gap-5 mt-5">
              <p className="text-gray-600 italic">Not registered?</p>
              <Link
                to="/signup"
                className="text-gray-600 hover:text-blue-500 hover:underline"
              >
                SignUp here!
              </Link>
            </div>
          </div>
          <Link to="/" className="self-start mt-5 ml-2">
            <p className="flex items-center cursor-pointer hover:underline hover:text-blue-400 mb-[15vh]">
              <IoMdArrowRoundBack />
              Back to home
            </p>
          </Link>
        </div>
            <Footer />
        </section>
    )
}
export default Login;