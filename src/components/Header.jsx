import '../assets/styles/Header.css'
import image from '../assets/imgs/logo.png'

function Header(){
    return(
        <header className='header'>
            <img src={image}/>
            <h1>Historias cortas</h1>
        </header>
    );
}

export default Header;