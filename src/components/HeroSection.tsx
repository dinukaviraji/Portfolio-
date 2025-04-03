import GitHublogo from '../assets/github-logo.svg';

const HeroSection: React.FC = () => {
    return (
        <div className="mt-20 flex justify-center mb-20">
            <div className="text-left">
                <p className="">Hello, my name is</p>
                <p className="font-Futura Book font text-6xl font-bold text-amber-700 mb-2">Dinuka Viraji</p>
                <p> Aspiring Developer | Eager to Learn and Grow</p>
                <button className="bg-amber-600 rounded-full px-4 py-1 mt-6 mb-6"> 
                    Download CV 
                </button>

                
                <img src={GitHublogo} alt='github logo' height={30} width={30} ></img>
 
            </div>
        </div>
    );
}

export default HeroSection;