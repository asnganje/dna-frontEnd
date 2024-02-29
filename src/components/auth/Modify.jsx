import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";




const Modify = () => {

    const [nickName, setNickName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [id, setId] = useState('')

    const nameChangeHandler = (e) => {
        setNickName(e.target.value)
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const phoneChangeHandler = (e) => {
        setPhone(e.target.value)
    }

    const idChangeHandler = (e) => {
        setId(e.target.value)
    }

    return(
        <section className="mx-[5%]">
            <Header />
                    <div className="flex flex-col justify-center content-center mx-[30%] my-[2]%] bg-blue-300 p-5 shadow-lg rounded-md w-[100%] md:w-[70vh]">
                        <form onSubmit="">
                            <div className="mb-3 flex gap-5">
                                <label className="mt-1">NickName</label>
                                <input
                                value={nickName}
                                onChange={nameChangeHandler}
                                type="text"
                                required = "true"
                                className="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                                />
                            </div>
                            <div className="mb-3 flex gap-12">
                                <label className="mt-1">Email</label>
                                <input
                                value={email}
                                onChange={emailChangeHandler}
                                type="text"
                                required = "true" 
                                className="w-full ml-2 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                                />
                            </div>
                            <div className="mb-3 flex gap-12">
                                <label className="mt-1">Phone</label>
                                <input
                                value={phone}
                                onChange={phoneChangeHandler}
                                type="number"
                                required = "true"
                                className="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                                />
                            </div>
                            <div className="mb-3 flex gap-6">
                                <label className="mt-1">National ID</label>
                                <input
                                value={id}
                                onChange={idChangeHandler}
                                type="number"
                                required = "true"
                                className="w-full ml-2.5 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                                />
                            </div>
                            <div  className=" flex justify-between">
                                    <button className="text-white rounded-md w-[30%] bg-red-300 hover:bg-red-700 p-2">Deactivate</button>
                                    <button className="text-white rounded-md w-[30%] bg-gray-400 hover:bg-gray-500 p-2">Update</button>                                    
                            </div>
                        </form>
                    </div>
                    
                    <Link to="/" className="h-[10%]">
                        <p className=" flex items-center cursor-pointer hover:underline hover:text-blue-400 mb-[5vh]">
                            <IoMdArrowRoundBack />Back to home
                        </p>
                    </Link>
            <Footer />
        </section>
    )
}
export default Modify;