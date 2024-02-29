import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
    const navigate = useNavigate()
    const openLogin = () => {
        navigate('/login')
    }

    const openSignUp = () => {
        navigate('/signup')
    }


    return(
        <main className="mx-[5%]">
            <Header/>
            <section className="mx-[5%]">
                <div className="flex gap-2 mt-5">
                <button className="bg-blue-500 text-white w-[10%] p-0.5 h-[70%] rounded-md" onClick={openLogin}>Login</button> | 
                <button className="bg-blue-500 text-white w-[10%] p-0.5 h-[70%] rounded-md" onClick={openSignUp}>SignUp</button>
                </div>
            </section>
            <Footer />
            
        </main>
    )
}
export default Main;