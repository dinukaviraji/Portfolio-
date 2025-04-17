const Certificates: React.FC = () => {
    return(
        < div id="Certificates">
        <p className="flex justify-center text-2xl font-semibold mb-10"> My Certifications </p>
        <div className="flex justify-center mb-50 gap-20 ">
        <div className=" space-y-5">
            <p>  Certificate in Software Engineering | NIBM </p>
            <p className="text-center text-amber-600 font-medium"> View Certification </p>

            <p>  Python for Beginners | UOM </p>
            <p className="text-center  text-amber-600 font-medium"> View Certification </p>

            <p>  Learning the JavaScript Language | LinkedIn </p>
            <p className="text-center  text-amber-600 font-medium"> View Certification </p>
        </div>
            

        <div className="space-y-5">
            <p> Java Object-Oriented Programming | LinkedIn </p>
            <p className="text-center  text-amber-600 font-medium"> View Certification </p>

            <p> Angular Essential Training | LinkedIn</p>
            <p className="text-center  text-amber-600 font-medium"> View Certification </p>

            <p> Introduction to Large Language Models | LinkedIn </p>
            <p className="text-center  text-amber-600 font-medium"> View Certification </p>
        </div>
        </div>
        </div>

    );

};

export default Certificates;