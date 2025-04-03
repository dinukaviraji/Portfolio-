const Navbar: React.FC = () => {

    return (
        <nav className=" bg-#bebeb8 text-black py-4">
            <div className="flex justify-center">
                <ul className="flex space-x-10">
                    <li> About </li>
                    <li> Skills </li>
                    <li> Projects </li>
                    <li> Certifications</li>
                    <li> Education</li>
                    <li> Contact </li>
                </ul>
            </div>
            
        </nav>

        
    );
};

export default Navbar;