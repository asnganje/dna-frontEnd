import { nanoid } from "nanoid";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

const data = [
    {id: nanoid(), text: "Contact"},
    {id: nanoid(), text: "Testimonials"},
    {id: nanoid(), text: "Terms & Conditions"},
    {id: nanoid(), text: "Privacy Policy"}
]

const socials = [
    {id: nanoid(), icon: <TiSocialFacebook />},
    {id: nanoid(), icon: <FaInstagram />},
]

const Footer = () => {
    const renderedFooterItems = data.map((item)=> {
        return(
            <li key={item.id}>{item.text}</li>
        )
    })

    const renderedIcons = socials.map((icon)=> {
        return(
            <li key={icon.id} className="">
                {icon.icon}
            </li>
        )
    })
    return(
        <footer>
            <p>&copy; 2022-2023 54DNAtype</p>
            <ul>
                {renderedFooterItems}
            </ul>
            <ul>
                {renderedIcons}
            </ul>
        </footer>
    )
}

export default Footer;