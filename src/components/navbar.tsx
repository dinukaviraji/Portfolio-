const Navbar: React.FC = () => {

    return (
        <nav className="fixed top-0 left-0 w-full  text-black py-4 shadow-md backdrop-blur-md ">
            <div className="flex justify-center">
                <ul className="flex space-x-10 cursor-pointer">
                    <li className="hover:text-amber-600 hover:font-semibold"><a href="#About"> About </a></li>
                    <li className="hover:text-amber-600 hover:font-semibold"><a href="#Skills"> Skills </a></li>
                    <li className="hover:text-amber-600 hover:font-semibold"><a href="#Projects"> Projects </a> </li>
                    <li className="hover:text-amber-600 hover:font-semibold"><a href="#Certificates"> Certifications</a></li>
                    <li className="hover:text-amber-600 hover:font-semibold"><a href="#Education"> Education</a></li>
                    <li className="hover:text-amber-600 hover:font-semibold"><a> Contact </a></li>
                </ul>
            </div>
            
        </nav>

        
    );
};

export default Navbar;