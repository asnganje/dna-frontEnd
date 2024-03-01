import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

const Main = () => {
    const navigate = useNavigate()
    const [candidate, setCandidate] = useState(localStorage.getItem('user'))

    const openLogin = () => {
        navigate('/login')
    }

    const openSignUp = () => {
        navigate('/signup')
    }

    const logoutHandler = () => {
        setCandidate(
            localStorage.setItem('user', "")
        )
    }

    const modificationHandler = () => {
        navigate('/modify')
    }

    return(
        <main className="mx-[5%]">
            <Header/>
            <section className="mx-[5%]">
                {candidate?
                (<div className="flex justify-between mt-5">
                    <div className="flex flex-col">
                    <button className="bg-blue-500 text-white w-full p-0.5 h-[70%] rounded-md" onClick={modificationHandler}>Manager User</button>
                    <p>Welcome {candidate}...</p>
                    </div>
                    <button className="bg-blue-500 text-white w-[10%] p-0.5 h-[70%] rounded-md" onClick={logoutHandler}>Logout</button>
                    </div>)
                :(<div className="flex gap-2 mt-5">
                <button className="bg-blue-500 text-white w-[10%] p-0.5 h-[70%] rounded-md" onClick={openLogin}>Login</button> | 
                <button className="bg-blue-500 text-white w-[10%] p-0.5 h-[70%] rounded-md" onClick={openSignUp}>SignUp</button>
                </div>)}
            </section>
            <Footer />
            
        </main>
    )
}
export default Main;