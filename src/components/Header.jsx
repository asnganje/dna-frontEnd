import { nanoid } from "nanoid";
import logo from '../assets/logo.jpg'
import { IoIosSearch } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ulOne = [
    {id:nanoid(), content: logo},
    {id:nanoid(), content: "54DNAtype"}
]

const ulTwo = [
    {id:nanoid(), text: "DNA 질문검사"},
    {id:nanoid(), text: "학습유전자"},
    {id:nanoid(), text: "54DNAtype"},
    {id:nanoid(), text: "학습유전자"}
]

const ulThree = [
    {id:nanoid(), content: <IoIosSearch />},
    {id:nanoid(), content: <MdLanguage />},
]

const ulFour = [
    {id:nanoid(), text: "로그인"},
    {id:nanoid(), text: "|"},
    {id:nanoid(), text: "프로필"}
]


const Header = () => {
    const navigate = useNavigate()
    const homeRouter = () => {
        navigate('/')
    } 
    const initialHeaderItems = ulOne.map((item)=> {
        if(item.content === logo) {
            return(
                <li key={item.id}>
                    <img src={logo} alt="logo" className="w-[100%] mb-0"/>
                </li>
            )
        }

        return(
            <li key={item.id} className="text-gray-500">
                {item.content}
            </li>
        )
        })

        const midHeaderItems = ulTwo.map((item)=> {
            return(
                <li key={item.id}>
                    {item.text}
                </li>
            )
        })

        const renderedThirdUls = ulThree.map((item)=> {
            return(
                <li key={item.id}>
                    {item.content}
                </li>
            )
        })

        const renderedFourthUls = ulFour.map((item)=> {
            return(
                <li key={item.id}>
                    {item.text}
                </li>
            )
        })

    return(
        <header className="mt-3">
            <nav className="flex justify-around">
                <ul className="flex flex-col gap-0 cursor-pointer" onClick={homeRouter}>
                    {initialHeaderItems}
                </ul>
                <ul className="flex gap-3">
                    {midHeaderItems}
                </ul>
                <div className="flex mt-1">
                    <ul className="flex gap-1">
                        {renderedThirdUls}
                    </ul>
                    <ul className="flex gap-1">
                        {renderedFourthUls}
                    </ul>
                    <button className="bg-blue-500 text-white p-0.5 ml-1 h-[70%] rounded-md">검사시작</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;