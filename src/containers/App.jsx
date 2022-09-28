import Header from '../components/Header'
import Cuerpo from '../components/Cuerpo'
import Footer from '../components/Footer'
import '../assets/styles/Index.css'

function App() {
    return (
        <body>
            <div className='containerBody'>
                <Header />
                <Cuerpo className="Cuerpo"/>
                <Footer />
            </div>
        </body>
    );
}

export default App;