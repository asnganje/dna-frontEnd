import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { modifyUser, removeUser } from "../../redux/thunks/userThunk";

const Modify = () => {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const navigate = useNavigate()

  useEffect(() => {
    if (user.data && user.data.length > 0) {
      setNickName(user.data[0].msg.nickName || "");
      setEmail(user.data[0].msg.email || "");
      setPhone(user.data[0].msg.phone || "");
      setId(user.data[0].msg.id || "");
    }
  }, [user]);

  const nameChangeHandler = (e) => {
    setNickName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const idChangeHandler = (e) => {
    setId(e.target.value);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (user.data && user.data.length > 0 && user.data[0].msg) {
      const oldUser = user.data[0].msg;
      const newUser = { ...oldUser, nickName, phone, email };
      dispatch(modifyUser(newUser)).then((result) => {
        localStorage.setItem('user', result.payload.msg.nickName);
      });
    }
  };
    const deactivator = () => {
    let theUser;
    if (user.data && user.data.length > 0 && user.data[0].msg) {
      theUser = user.data[0].msg
      const { _id: userId } = theUser
    dispatch(removeUser(userId)).then(()=> {
        localStorage.setItem('user', '')
        navigate('/')
    })
  }
  };

  return (
    <section className="mx-[5%]">
      <Header />
      <div className="flex flex-col justify-center content-center sm:w-[100%] md:w-[50%] mx-[25%] sm:mx-[25%] my-[2%] bg-blue-300 p-5 shadow-lg rounded-md">
        <form onSubmit={updateHandler}>
          <div className="mb-3 flex gap-5">
            <label className="mt-1">NickName</label>
            <input
              value={nickName}
              onChange={nameChangeHandler}
              type="text"
              required="true"
              className="sm:w-full w-[50%] rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-3 flex gap-12">
            <label className="mt-1">Email</label>
            <input
              value={email}
              onChange={emailChangeHandler}
              type="text"
              required="true"
              className="w-full ml-2 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-3 flex gap-12">
            <label className="mt-1">Phone</label>
            <input
              value={phone}
              onChange={phoneChangeHandler}
              type="number"
              required="true"
              className="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-3 flex gap-6">
            <label className="mt-1">National ID</label>
            <input
              value={id}
              onChange={idChangeHandler}
              type="number"
              required="true"
              className="w-full ml-2.5 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className=" flex justify-center">
            <button className="text-white rounded-md md:w-[30%] sm:[90%] bg-gray-400 hover:bg-gray-500 p-2">
              Update
            </button>
          </div>
        </form>
      </div>
      {user.bool && <p className="text-green-700 text-center my-2 italic text-2xl">Success! Update done...</p>}
      <Link to="/" className="h-[10%]">
        <p className=" flex items-center cursor-pointer hover:underline hover:text-blue-400 mb-[5vh]">
          <IoMdArrowRoundBack />
          Back to home
        </p>
      </Link>
      <button
              className="flex self-end text-white rounded-md w-[30%] bg-red-300 hover:bg-red-700 p-2"
              onClick={deactivator}
            >
              Deactivate
    </button>

      <Footer />
    </section>
  );
};
export default Modify;
