import GitHublogo from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';

const HeroSection: React.FC = () => {
    return (
        <div className="mt-50 flex justify-center mb-30">
            <div className="text-left">
                <p className="">Hello, my name is</p>
                <p className="font-Futura Book font text-6xl font-bold text-amber-700 mt-4 mb-4">Dinuka Viraji</p>
                <p> Aspiring Developer | Eager to Learn and Grow</p>
                <button className="bg-amber-600 rounded-full px-4 py-2 mt-6 mb-6 text-white hover:scale-105 hover:bg-amber-500 hover:font-semibold cursor-pointer"> 
                    Download CV 
                </button>

                <div className='flex mt-3 gap-4'>
                <a href='https://www.linkedin.com/in/dinuka-viraji/' target="_blank" rel="noopener noreferrer"> <img src={linkedin} /> </a>
                <a href='https://github.com/dinukaviraji' target="_blank" rel="noopener noreferrer"> <img src={GitHublogo} alt='github logo' width={30}></img> </a>         
                <a href='https://www.instagram.com/dinu_viraji._/' target="_blank" rel="noopener noreferrer"> <img src={instagram}/> </a>
                </div>         

 
            </div>
        </div>
    );
}

export default HeroSection;