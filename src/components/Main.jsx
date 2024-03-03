import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import banner from '../assets/be4.jpg'
import bot from '../assets/bot1.jpg'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpg'
import g3 from '../assets/g3.jpg'
import g4 from '../assets/g4.jpg'
import g5 from '../assets/g5.jpg'
import mid from '../assets/mid1.jpg'

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
                <div className="mx-[5%] mt-7">
                    <img src={banner} alt="banner"  className="w-full"/>
                </div>
            </section>
            <section className="mx-[5%] sm:flex sm:flex-row flex-col justify-between">
                <div className="w-[40%] my-[10%]">
                    <h6 className="text-blue-500">타입 리포트</h6>
                    <h5>나의 유전자 능력을 파헤치다.</h5>
                    <p>
                    회원가입 후에 무료로 학습 유전자 타입 질문검사를 추진하면 부모로부터 물려받아 조합된 유전자 타입을 파악하여 나를 더 일찍 알고 대처하는 것에 의미가 있습니다.
                    </p>
                    <div className="sm:flex sm:flex-row flex-col gap-3 sm:space-y-0 space-y-5">
                        <button className="bg-blue-500 text-white p-2 ml-1 h-[70%] rounded-md">
                            타입유형
                        </button>
                        <button className="bg-white text-blue-500 border border-blue-500 p-2 ml-1 h-[70%] rounded-md">
                            이론탐구</button>
                    </div>
                </div>
                    <img src={mid} alt="mid" className="w-[30%]"/>
            </section>
            <section className="mx-[5%]">
                <div className="text-center">
                    <p>
                    사용후기
                    </p>
                </div>
                <div className="sm:flex sm:flex-row flex-col">
                    <img src={g1} alt="g1" className="ml-5" />
                    <img src={g2} alt="g2" />
                    <img src={g3} alt="g3" />
                    <img src={g4} alt="g4" />
                    <img src={g5} alt="g5" />
                </div>
                <div className="flex justify-center mt-5 gap-5">
                    <GrPrevious className="cursor-pointer"/><GrNext className="cursor-pointer"/>
                </div>
            </section>
            <section className="mx-[5%] my-[10%]">
                <div className="flex flex-col justify-center items-center">
                    <h4>
                    학습유전자 타입은 총 54개의 타입이 있습니다.
                    </h4>
                    <h4>
                    회원가입 후 무료로 회원님의 학습유전자 타입을 발견해 보세요!
                    </h4>
                    <div className="mt-5 flex gap-2">
                        <button className="bg-blue-500 text-white ml-1 h-[70%] rounded-md tracking-tighter">
                        전체 사용후기
                        </button>
                        <button className="bg-white text-blue-500 border border-blue-400 ml-1 h-[70%] rounded-md tracking-tighter">
                        4가지 학습유전자
                        </button>
                    </div>
                </div>

            </section>
            <section className="mx-[5%]">
                <img src={bot} alt="bottom" className="w-full" />
            </section>
            <Footer />
            
        </main>
    )
}
export default Main;