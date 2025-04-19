import GitHublogo from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';

const HeroSection: React.FC = () => {
    return (
        <div className="mt-50 flex justify-center mb-30">
            <div className="text-left">
                <p className="text-2xl text-shadow-2xs">Hello, my name is</p>
                <p className="font-browb-sugar text-6xl font-bold text-amber-700 mt-4 mb-4 text-shadow-md">Dinuka Viraji</p>
                <p className="text-xl text-shadow-2xs"> Aspiring Developer | Eager to Learn and Grow</p>
                <button className="bg-amber-600 rounded-full px-4 py-2 mt-6 mb-6 text-white shadow-md hover:scale-105 hover:bg-amber-500 hover:font-semibold cursor-pointer"> 
                    <a href='/DINUKA.pdf' target='_blank' rel='noopener noreferrer'> Download CV  </a>
                </button>

                <div className='flex mt-3 gap-4'>
                <a href='https://www.linkedin.com/in/dinuka-viraji/' target="_blank" rel="noopener noreferrer"> <img src={linkedin} className='hover:scale-105' /> </a>
                <a href='https://github.com/dinukaviraji' target="_blank" rel="noopener noreferrer"> <img src={GitHublogo} alt='github logo' width={30} className='hover:scale-105'></img> </a>         
                <a href='https://www.instagram.com/dinu_viraji._/' target="_blank" rel="noopener noreferrer"> <img src={instagram} className='hover:scale-105'/> </a>
                </div>         

 
            </div>
        </div>
    );
}

export default HeroSection;