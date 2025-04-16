import myphoto from '../assets/me.jpg';
const About: React.FC = () => {

    return (
        <div className="flex px-50 gap-5 mb-20 justify-center items-center flex-col md:flex-row  ">
            <img src={myphoto} className='w-80 rounded-full'></img>
            <p >
            I’m an enthusiastic IT student currently pursuing a degree in Computer Science at IIT. 
            I completed my GCE A/Ls in the Physical Science stream at Southlands College. 
            I'm passionate about learning new technologies and exploring how IT can make a positive impact in the world.
            This portfolio highlights some of the projects I’ve worked on and the skills I’ve gained along the way. I'm excited to keep growing and contributing to the tech industry.
            </p>
        </div>


    );
}

export default About;