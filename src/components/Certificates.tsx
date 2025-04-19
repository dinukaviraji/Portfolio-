const Certificates: React.FC = () => {
    return(
        <div id="Certificates" >
        <p className="flex justify-center text-2xl font-semibold mb-10"> My Certifications </p>
        <div className="flex justify-center mb-40 gap-20 ">
        <div className=" space-y-5">
            <p>  Certificate in Software Engineering | NIBM </p>
            <p className="text-center text-amber-600 font-medium cursor-pointer hover:text-amber-400 hover:underline"> 
                <a href="/Certificates/NIBM.pdf" target='_blank' rel='noopener norefrrer'> View Certification </a> </p>

            <p>  Python for Beginners | UOM </p>
            <p className="text-center  text-amber-600 font-medium cursor-pointer  hover:text-amber-400 hover:underline"> 
                <a href="/Certificates/Python_for_Beginners_E-Certificate.pdf" target='_blank' rel='noopener norefrrer'> View Certification </a> </p>

            <p>  Learning the JavaScript Language | LinkedIn </p>
            <p className="text-center  text-amber-600 font-medium cursor-pointer  hover:text-amber-400  hover:underline"> 
                <a href="/Certificates/CertificateOfCompletion_Learning the JavaScript Language.pdf" target='_blank' rel='noopener norefrrer'> View Certification </a> </p>
        </div>
            

        <div className="space-y-5">
            <p> Java Object-Oriented Programming | LinkedIn </p>
            <p className="text-center  text-amber-600 font-medium cursor-pointer  hover:text-amber-400  hover:underline"> 
                <a href="/Certificates/CertificateOfCompletion_Java ObjectOriented Programming.pdf" target='_blank' rel='noopener norefrrer'> View Certification </a> </p>

            <p> Angular Essential Training | LinkedIn</p>
            <p className="text-center  text-amber-600 font-medium cursor-pointer hover:text-amber-400  hover:underline">
                <a href="/Certificates/CertificateOfCompletion_Angular Essential Training.pdf" target='_blank' rel='noopener norefrrer'> View Certification </a> </p>

            <p> Introduction to Large Language Models | LinkedIn </p>
            <p className="text-center  text-amber-600 font-medium cursor-pointer hover:text-amber-400  hover:underline"> 
                <a href="/Certificates/CertificateOfCompletion_Introduction to Large Language Models.pdf" target='_blank' rel='noopener norefrrer'> View Certification </a> </p>
        </div>
        </div>
        </div>

    );

};

export default Certificates;