import finance1 from '../assets/finance.png';
import sdgp from '../assets/sdgp.png';
import student from '../assets/studentManagement.png';
import youtube from '../assets/youtube.svg';
import marineLife from '../assets/marineLife.png';
import selfOrder from '../assets/images.jpg';
import ticketingSystem from '../assets/ticket.jpg';
import portfolio from '../assets/portfolio.png';
import github from '../assets/github-white.svg';
import bookstore from '../assets/bookstore.png';
import movie from '../assets/movie.png';

const Projects: React.FC = () => {
    return (

      <div id='Projects'>
        <p className='flex justify-center mb-7 text-2xl font-semibold underline'> My Projects </p>


        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20 shadow-md ">

        <div className="flex w-full max-w-4xl bg-white rounded-xl overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Vyakarana  </h2>
            <p> React | Tailwind_CSS |Python  </p>
            <p className="text-gray-600 mt-3">A Sinhala grammar checker and language learning tool that helps users write accurately and confidently. Vyakarana detects grammar errors and suggests corrections to improve writing. It also supports learning Sinhala by offering Sinhala grammar rules, synonyms, antonyms and paired words.

            </p>
            <div className='flex mt-5 gap-5 '>
            <button className=" bg-amber-600 text-white px-4 py-2 rounded-4xl flex hover:scale-105 duration-150 cursor-pointer gap-1" 
              onClick={() => window.open('https://youtu.be/drXpTm61dBU', '_blank')}>
              <img src={youtube} /> 
              Demo
            </button>
            <button className='bg-gray-700 text-white px-4 py-2 rounded-4xl flex hover:scale-105 duration-150 cursor-pointer gap-1' 
            onClick={() => window.open('https://github.com/dinukaviraji/Sinhala-Grammar-Checking-and-Learning-Tool-SDGP-', '_blank')}>
              <img src={github}/>
              GitHub
            </button>
            </div>
          </div>

          <div className="w-full  md:w-1/2 flex items-center justify-center">
            <img src={sdgp}  alt="Vyakarana" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400" />
          </div>
        </div>
       </div>


        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20 shadow-md ">

        <div className="flex w-full max-w-4xl bg-white rounded-xl overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Movie Explorer </h2>
            <p> React | MUI |TMDB API  </p>
            <p className="text-gray-600 mt-3"> A Web application that allows users to explore movies using the TMDB API. Users can search for their favorite movies, view details and discover new content. The app features a user-friendly interface built with React and Material-UI providing an engaging experience for movie enthusiasts.

            </p>
            <div className='flex mt-5 gap-5 '>
            <button className=" bg-amber-600 text-white px-4 py-2 rounded-4xl flex hover:scale-105 duration-150 cursor-pointer gap-1" 
              onClick={() => window.open('https://movie-explorer-lemon.vercel.app', '_blank')}>
              <img src={youtube} /> 
              Demo
            </button>
            <button className='bg-gray-700 text-white px-4 py-2 rounded-4xl flex hover:scale-105 duration-150 cursor-pointer gap-1' 
            onClick={() => window.open('https://github.com/dinukaviraji/Movie-Explorer', '_blank')}>
              <img src={github}/>
              GitHub
            </button>
            </div>
          </div>

          <div className="w-full  md:w-1/2 flex items-center justify-center">
            <img src={movie}  alt="Movie Explorer Web App" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400" />
          </div>
        </div>
       </div>
  



        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20 shadow-md ">

        <div className="flex w-full max-w-4xl bg-white rounded-xl  overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Life Below Water </h2>
            <p> HTML | CSS | JavaScript</p>
            <p className="text-gray-600 mt-3">A website dedicated to marine life, inspired by the UN’s Sustainable Development Goals. It features a splash screen, homepage, gallery, shop, user profiles, feedback form, sitemap, and team pages raising awareness and promoting ocean conservation through an interactive user experience.
            </p>

            <div className='flex mt-5 gap-5 '>
            <button className="mt-auto self-start bg-amber-600 text-white px-4 py-2 rounded-4xl flex hover:scale-105 cursor-pointer gap-1" 
            onClick={() => window.open('https://isuruk2003.github.io/web-dev-group-coursework-iit/student_1/splash.html', '_blank')}>
              <img src={youtube} /> 
              Demo
            </button>
            <button className='bg-gray-700 text-white px-4 py-2 rounded-4xl flex hover:scale-105 duration-150 cursor-pointer gap-1' 
            onClick={() => window.open('https://github.com/dinukaviraji/Life-Below-Water', '_blank')}>
              <img src={github}/>
              GitHub
            </button>
            </div>
          </div>
          <div className="w-full  md:w-1/2 flex items-center justify-center">
            <img src={marineLife}  alt="LifeBelowWater" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400 " />
          </div>
        </div>
        </div>



        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20 shadow-md ">

        <div className="flex w-full max-w-4xl bg-white rounded-xl  overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Self Ordering System </h2>
            <p> C# | SQL </p>
            <p className="text-gray-600 mt-3">A desktop application developed using C# and SQL for restaurants to streamline the ordering process. Customers can browse the menu, place orders directly, and view their bill, making the dining experience faster and more efficient while reducing staff workload.
            </p>

            <div className='flex mt-5 gap-5 '>
            <button className='bg-gray-700 text-white px-4 py-2 rounded-4xl flex hover:scale-105 duration-150 cursor-pointer gap-1' 
            onClick={() => window.open('https://github.com/dinukaviraji/Self-Ordering-System', '_blank')}>
              <img src={github}/>
              GitHub
            </button>
            </div>

          </div>
          <div className="w-full  md:w-1/2 flex items-center justify-center">
            <img src={selfOrder}  alt="SelfOrderingMachine" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400 " />
          </div>
        </div>
        </div>



        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20 shadow-md ">

        <div className="flex w-full max-w-4xl bg-white rounded-xl  overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Personal Finance Tracker</h2>
            <p> Python </p>
            <p className="text-gray-600 mt-3">A Python-based personal finance tracker with a user-friendly Tkinter GUI for managing expenses and income. The application supports sortable columns for ascending and descending order, enhancing data organization. A built-in search bar allows quick filtering of transactions.

            </p>
            {/* <button className="mt-auto self-start bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Learn More
            </button> */}
            <div className='flex mt-5 gap-5 '>
            <button className='bg-gray-700 text-white px-4 py-2 rounded-4xl flex hover:scale-105 duration-150 cursor-pointer gap-1' 
            onClick={() => window.open('https://github.com/dinukaviraji/Personal-Finance-Tracker', '_blank')}>
              <img src={github}/>
              GitHub
            </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src={finance1}  alt="GUI-financeTracker" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400 " />
          </div>
        </div>
        </div>



        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20 shadow-md ">

        <div className="flex w-full max-w-4xl bg-white rounded-xl  overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Student Management System</h2>
            <p> Java </p>
            <p className="text-gray-600 mt-3">A Java-based console application for managing student registration and academic performance in universities. It supports data management, module mark entry, grade calculation, and generates detailed reports, using file handling, custom sorting, and object-oriented design.

            </p>
            {/* <button className="mt-auto self-start bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Learn More
            </button> */}
            <div className='flex mt-5 gap-5 '>
            <button className='bg-gray-700 text-white px-4 py-2 rounded-4xl flex hover:scale-105 duration-150 cursor-pointer gap-1' 
            onClick={() => window.open('https://github.com/dinukaviraji/Student-Management-System', '_blank')}>
              <img src={github}/>
              GitHub
            </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src={student}  alt="CLI application" className="w-full h-auto object-contain rounded-lg shadow-2xl ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400"
            />
          </div>
        </div>
        </div>




        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-20 shadow-md">

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
             <div className='flex mt-5 gap-5 '>
            <button className='bg-gray-700 text-white px-4 py-2 rounded-4xl flex hover:scale-105 duration-150 cursor-pointer gap-1' 
            onClick={() => window.open('https://github.com/dinukaviraji/Real-Time-Ticketing-System', '_blank')}>
              <img src={github}/>
              GitHub
            </button>
            </div>
          </div>

          <div className="w-full  md:w-1/2 flex items-center justify-center">
            <img src={ticketingSystem}  alt="ticketingSystem" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400 " />
          </div>
        </div>
        </div>


        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-30 shadow-md ">

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
             <div className='flex mt-5 gap-5 '>
            <button className='bg-gray-700 text-white px-4 py-2 rounded-4xl flex hover:scale-105 duration-150 cursor-pointer gap-1' 
            onClick={() => window.open('https://github.com/dinukaviraji/Portfolio-', '_blank')}>
              <img src={github}/>
              GitHub
            </button>
            </div>
          </div>

          <div className="w-full  md:w-1/2 flex items-center justify-center">
            <img src={portfolio}  alt="portfolio" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400 " />
          </div>
        </div>
        </div>


        <div className="flex flex-wrap justify-center bg-gray-100 w-200 h-100 mx-auto p-4 mb-30 shadow-md ">

        <div className="flex w-full max-w-4xl bg-white rounded-xl  overflow-hidden">

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Book Store API</h2>
            <p> Java EE | JAX-RS (Jersey) | Apache Tomcat</p>
            <p className="text-gray-600 mt-3">A RESTful API built with Java EE that manages books, authors, customers, and shopping carts for an online bookstore. It supports CRUD operations and error handling, with endpoints tested via Postman to ensure reliable backend functionality.

            </p>
            {/* <button className="mt-auto self-start bg-amber-600 text-white px-4 py-2 rounded-4xl flex hover:scale-105 cursor-pointer gap-1" 
            onClick={() => window.open('https://isuruk2003.github.io/web-dev-group-coursework-iit/student_1/splash.html', '_blank')}>
              <img src={youtube} /> 
              Demo
            </button> */}
             <div className='flex mt-5 gap-5 '>
            <button className='bg-gray-700 text-white px-4 py-2 rounded-4xl flex hover:scale-105 duration-150 cursor-pointer gap-1' 
            onClick={() => window.open('https://github.com/dinukaviraji/Book-Store-API', '_blank')}>
              <img src={github}/>
              GitHub
            </button>
            </div>
          </div>

          <div className="w-full  md:w-1/2 flex items-center justify-center">
            <img src={bookstore}  alt="bookstore" className="w-full h-auto object-contain shadow-2xl rounded-lg ring-1 ring-gray-200 hover:scale-110 transition-transform duration-400 " />
          </div>
        </div>
        </div>



      </div>          



              
        
    );
}
export default Projects;