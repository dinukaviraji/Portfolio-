import finance1 from '../assets/finance2.png';

const Projects: React.FC = () => {
    return (

        // <div className='flex flex-wrap justify-center mb-20 '>
        //     <div className='relative w-200 h-100'>
        //         <img src={finance1} alt='finance tracker' className=" object-cover rounded-lg"/>

        //         <div className="absolute bottom-5 left-20 w-3/4 h-80 bg-amber-400/50 backdrop-blur-xs rounded-lg text-white">
        //             <div className='flex justify-center'>
        //                 <h1 className='font-bold text-4xl'> Personal Finance Tracker </h1>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20">

        <div className="flex w-full max-w-4xl bg-white rounded-xl  overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Personal Finance Tracker</h2>
            <p> Python </p>
            <p className="text-gray-600">A Python-based personal finance tracker with a user-friendly Tkinter GUI for managing expenses and income. The application supports sortable columns for ascending and descending order, enhancing data organization. A built-in search bar allows quick filtering of transactions.

            </p>
            {/* <button className="mt-auto self-start bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Learn More
            </button> */}
          </div>
  

          <div className="w-full md:w-1/2">
            <img src={finance1}  alt="Letter Loco" className="w-full h-full object-cover" />
          </div>
        </div>
        </div>


        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-300">

        <div className="flex w-full max-w-4xl bg-white rounded-xl  overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Student Management System</h2>
            <p> Java </p>
            <p className="text-gray-600">A Java-based console application designed to streamline student registration and academic performance tracking for universities. It supports student data management, module mark entry, automatic grade calculation, and the generation of both summary and detailed performance reports. Key features include file handling, custom sorting, and object-oriented design principles.

            </p>
            {/* <button className="mt-auto self-start bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Learn More
            </button> */}
          </div>
  

          <div className="w-full md:w-1/2">
            <img src={finance1}  alt="Letter Loco" className="w-full h-full object-cover" />
          </div>
        </div>
        </div>
        </>          



              
        
    );
}
export default Projects;