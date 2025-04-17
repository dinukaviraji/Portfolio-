const Navbar: React.FC = () => {

    return (
        <nav className="fixed top-0 left-0 w-full  text-black py-4 shadow-md backdrop-blur-md ">
            <div className="flex justify-center">
                <ul className="flex space-x-10 cursor-pointer">
                    <li><a href=""> About </a></li>
                    <li><a href="#Skills"> Skills </a></li>
                    <li><a href="#Projects"> Projects </a> </li>
                    <li><a href="#Certificates"> Certifications</a></li>
                    <li><a href="#Education"> Education</a></li>
                    <li><a> Contact </a></li>
                </ul>
            </div>
            
        </nav>

        
    );
};

export default Navbar;