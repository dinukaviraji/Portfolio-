
const Education: React.FC = () => {

    return (
        <div id="Education">
        <p className="flex justify-center text-2xl font-semibold mb-10 underline"> My Education </p>
        <div className="flex flex-wrap justify-center mb-30 gap-5">

            <div className=" bg-gray-100 w-100 h-50 pl-5 pt-5 space-y-1">
                <p className="text-xl font-semibold"> Bachelor of Computer Science </p>
                <p> University of Westminster (IIT- Sri Lanka) </p>
                <p> 2024- present </p>
                <p> Full Time </p>
            </div>
            <div className=" bg-gray-100 w-100 h-50 pl-5 pt-5 space-y-1 ">
                <p className="text-xl font-semibold"> Certificate in Software Engineering </p>
                <p> National Institute of Business Management (NIBM) </p>
                <p> 2023 </p>
                <p> Part Time </p>
            </div>
            <div className=" bg-gray-100 w-100 h-50 pl-5 pt-5 space-y-1">
                <p className="text-xl font-semibold"> School Education </p>
                <p> Southlands College </p>
                <p> 2008 - 2021 </p>
                <p> Full Time </p>
            </div>
        </div>
        
        
        
        </div>
        

    );

};

export default Education;