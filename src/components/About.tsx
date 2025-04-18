import myphoto from '../assets/me.jpg';
import GitHublogo from '../assets/github-white.svg';
import linkedin from '../assets/linkedin-white.svg';
const About: React.FC = () => {

    return (
        <div id='About' className="flex px-50 gap-5 justify-center items-center flex-col md:flex-row mb-30 ">
            <img src={myphoto} className='w-80 rounded-full'></img>
            <p >
            I’m an enthusiastic IT student currently pursuing a degree in Computer Science at IIT. 
            I completed my GCE A/Ls in the Physical Science stream at Southlands College. 
            I'm passionate about learning new technologies and exploring how IT can make a positive impact in the world.
            This portfolio highlights some of the projects I’ve worked on and the skills I’ve gained along the way. I'm excited to keep growing and contributing to the tech industry.
            <div className='flex gap-5 mt-7'>
                <button className='flex items-center gap-1 rounded-full bg-amber-600  px-3 py-2 text-white hover:scale-105 hover:bg-gray-400 cursor-pointer'>
                    <img src={GitHublogo} width={20} height={20}></img>   
                    GitHub
                </button>
                <button className='flex items-center gap-1 rounded-full bg-amber-600  px-3 py-2 text-white hover:scale-105 hover:bg-gray-400 cursor-pointer'>
                    <img src={linkedin} width={25}></img>
                    LinkedIn
                </button>
            </div>
            
            </p>          
        </div>

        
    

    );
}

export default About;