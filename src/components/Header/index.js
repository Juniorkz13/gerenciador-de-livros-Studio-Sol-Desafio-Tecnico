import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='logo'>
                <Link className='logoLink' to='/'>
                    SS<span>BOOK</span>
                </Link>
                <img
                    src='https://media.istockphoto.com/id/1399395748/pt/foto/cheerful-business-woman-with-glasses-posing-with-her-hands-under-her-face-showing-her-smile-in.jpg?s=612x612&w=0&k=20&c=V2hdZm-cPTPXYT4U7VEsXr9M4CR3QqxOCMY_2qqJQAI='
                    alt='IMG'
                />
            </div>
            <div className='nav'>
                <Link className='meusLivros' to='/'>
                    Meus livros
                </Link>
                <Link className='emprestados' to='/'>
                    Emprestados
                </Link>
            </div>
        </header>
    )
}

export default Header
