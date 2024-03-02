import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import banner from '../assets/be4.jpg'

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
                <button className="bg-blue-500 text-white sm:w-[10%] w-[50%] p-0.5 h-[70%] rounded-md" onClick={openLogin}>Login</button> | 
                <button className="bg-blue-500 text-white sm:w-[10%] w-[50%] p-0.5 h-[70%] rounded-md" onClick={openSignUp}>SignUp</button>
                </div>)}
            </section>
            <section className="mt-10">
                <div className="flex flex-col items-center gap-5">
                    <h2>
                    <span className="text-gray-600 font-bold">54DNAtype</span>의 학습유전자 타입 검사는 9개 그룹으로 나뉘어 54개의 타입 결과로 제시 합니다.
                    </h2>
                    <p>
                    매우 간단한 질문검사 방식으로 당신은 어떤 학습유전자 타입인지 확인해 보세요.
                    </p>
                    <button className="bg-blue-500 text-white p-0.5 ml-1 h-[70%] rounded-md">
                    검사시작
                    </button>
                </div>
                <div className="mx-[25%] mt-7">
                    <img src={banner} alt="banner" />
                </div>
            </section>
            <Footer />
            
        </main>
    )
}
export default Main;