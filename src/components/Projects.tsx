import finance1 from '../assets/finance.png';
import sdgp from '../assets/sdgp.png';
import student from '../assets/studentManagement.png';
import youtube from '../assets/youtube.svg';
import marineLife from '../assets/marineLife.png';
import selfOrder from '../assets/images.jpg';
import ticketingSystem from '../assets/ticket.jpg';
import portfolio from '../assets/portfolio.png';

const Projects: React.FC = () => {
    return (

      <div id='Projects'>
        <p className='flex justify-center mb-7 text-2xl font-semibold underline'> My Projects </p>


        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20 shadow-md hover:scale-105 transition-transform duration-300">

        <div className="flex w-full max-w-4xl bg-white rounded-xl overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Vyakarana  </h2>
            <p> React | Tailwind_CSS |Python  </p>
            <p className="text-gray-600 mt-3">A Sinhala grammar checker and language learning tool that helps users write accurately and confidently. Vyakarana detects grammar errors and suggests corrections to improve writing. It also supports learning Sinhala by offering Sinhala grammar rules, synonyms, antonyms and paired words.

            </p>
            <button className="mt-auto self-start bg-amber-600 text-white px-4 py-2 rounded-4xl flex hover:scale-105 cursor-pointer gap-1" 
              onClick={() => window.open('https://youtu.be/drXpTm61dBU', '_blank')}>
              <img src={youtube} /> 
              Demo
            </button>
          </div>

          <div className="w-full  md:w-1/2 flex items-center justify-center">
            <img src={sdgp}  alt="Vyakarana" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400" />
          </div>
        </div>
        </div>



        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20 shadow-md hover:scale-105 transition-transform duration-300">

        <div className="flex w-full max-w-4xl bg-white rounded-xl  overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Life Below Water </h2>
            <p> HTML | CSS | JavaScript</p>
            <p className="text-gray-600 mt-3">A website dedicated to marine life, inspired by the UN’s Sustainable Development Goals. It features a splash screen, homepage, gallery, shop, user profiles, feedback form, sitemap, and team pages raising awareness and promoting ocean conservation through an interactive user experience.

            </p>
            <button className="mt-auto self-start bg-amber-600 text-white px-4 py-2 rounded-4xl flex hover:scale-105 cursor-pointer gap-1" 
            onClick={() => window.open('https://isuruk2003.github.io/web-dev-group-coursework-iit/student_1/splash.html', '_blank')}>
              <img src={youtube} /> 
              Demo
            </button>
          </div>
          <div className="w-full  md:w-1/2 flex items-center justify-center">
            <img src={marineLife}  alt="LifeBelowWater" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400 " />
          </div>
        </div>
        </div>


        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20 shadow-md hover:scale-105 transition-transform duration-300">

        <div className="flex w-full max-w-4xl bg-white rounded-xl  overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Self Ordering System </h2>
            <p> C# | SQL </p>
            <p className="text-gray-600 mt-3">A desktop application developed using C# and SQL for restaurants to streamline the ordering process. Customers can browse the menu, place orders directly, and view their bill, making the dining experience faster and more efficient while reducing staff workload.

            </p>
            {/* <button className="mt-auto self-start bg-amber-600 text-white px-4 py-2 rounded-4xl flex hover:scale-105 cursor-pointer gap-1" 
            onClick={() => window.open('https://isuruk2003.github.io/web-dev-group-coursework-iit/student_1/splash.html', '_blank')}>
              <img src={youtube} /> 
              Demo
            </button> */}
          </div>
          <div className="w-full  md:w-1/2 flex items-center justify-center">
            <img src={selfOrder}  alt="SelfOrderingMachine" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400 " />
          </div>
        </div>
        </div>



        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20 shadow-md hover:scale-105 transition-transform duration-300">

        <div className="flex w-full max-w-4xl bg-white rounded-xl  overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Personal Finance Tracker</h2>
            <p> Python </p>
            <p className="text-gray-600 mt-3">A Python-based personal finance tracker with a user-friendly Tkinter GUI for managing expenses and income. The application supports sortable columns for ascending and descending order, enhancing data organization. A built-in search bar allows quick filtering of transactions.

            </p>
            {/* <button className="mt-auto self-start bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Learn More
            </button> */}
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src={finance1}  alt="GUI-financeTracker" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400 " />
          </div>
        </div>
        </div>



        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20 shadow-md hover:scale-105 transition-transform duration-300">

        <div className="flex w-full max-w-4xl bg-white rounded-xl  overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Student Management System</h2>
            <p> Java </p>
            <p className="text-gray-600 mt-3">A Java-based console application designed to streamline student registration and academic performance tracking for universities. It supports student data management, module mark entry, automatic grade calculation, and the generation of both summary and detailed performance reports. Key features include file handling, custom sorting, and object-oriented design principles.

            </p>
            {/* <button className="mt-auto self-start bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Learn More
            </button> */}
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src={student}  alt="CLI application" className="w-full h-auto object-contain rounded-lg shadow-2xl ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400"
            />
          </div>
        </div>
        </div>




        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20 shadow-md hover:scale-105 transition-transform duration-300">

        <div className="flex w-full max-w-4xl bg-white rounded-xl  overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Real-Time Ticketing System</h2>
            <p> Java | Angular | Springboot </p>
            <p className="text-gray-600 mt-3">A full-stack application built with Java, Angular, and Spring Boot that allows vendors to add tickets and customers to purchase them in real time. It supports concurrent access, ensuring a smooth and efficient ticket booking experience.

            </p>
            {/* <button className="mt-auto self-start bg-amber-600 text-white px-4 py-2 rounded-4xl flex hover:scale-105 cursor-pointer gap-1" 
            onClick={() => window.open('https://isuruk2003.github.io/web-dev-group-coursework-iit/student_1/splash.html', '_blank')}>
              <img src={youtube} /> 
              Demo
            </button> */}
          </div>

          <div className="w-full  md:w-1/2 flex items-center justify-center">
            <img src={ticketingSystem}  alt="Vyakarana" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400 " />
          </div>
        </div>
        </div>


        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-30 shadow-md hover:scale-105 transition-transform duration-300">

        <div className="flex w-full max-w-4xl bg-white rounded-xl  overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Simple Portfolio</h2>
            <p> React | Tailwind_CSS</p>
            <p className="text-gray-600 mt-3">A responsive and visually engaging website developed using React and Tailwind CSS. It highlights my projects, technical skills, education and certifications serving as a professional platform to present my work and connect with others.

            </p>
            {/* <button className="mt-auto self-start bg-amber-600 text-white px-4 py-2 rounded-4xl flex hover:scale-105 cursor-pointer gap-1" 
            onClick={() => window.open('https://isuruk2003.github.io/web-dev-group-coursework-iit/student_1/splash.html', '_blank')}>
              <img src={youtube} /> 
              Demo
            </button> */}
          </div>

          <div className="w-full  md:w-1/2 flex items-center justify-center">
            <img src={portfolio}  alt="Vyakarana" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400 " />
          </div>
        </div>
        </div>


      </div>          



              
        
    );
}
export default Projects;