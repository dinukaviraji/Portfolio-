import finance from '../assets/financeTracker.jpg';

const Projects: React.FC = () => {
    return (

        <div className='flex justify-center '>
            <img src={finance} alt='finance tracker'/>

            <div className="">
                <h1> Personal Finance Tracker </h1>
            </div>
        </div>
    );
}
export default Projects;