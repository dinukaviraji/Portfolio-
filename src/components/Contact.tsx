const Contact: React.FC = () => {
    // return (
    //     <div id="Contact" className="mb-50">
    //         <p className="flex justify-center text-2xl font-semibold mb-10"> Contact Me </p>
    //         <div className="flex justify-center flex-col md:flex-row overflow-hidden">
    //         <div className=" bg-gray-100 w-220 h-100 rounded-2xl shadow-md">
    //             <div className="md:w-1/2 ">
    //             {/* <form action="https://formspree.io/f/xyzeqzgp" method="POST" className="flex flex-col space-y-4">
    //                 <input type="email" name="email" placeholder="Your email" className="border-gray-400" required> </input>
    //                 <textarea rows={5} name="message" placeholder="Message" className="border-gray-400" required></textarea>
    //                 <button type="submit" className="bg-amber-600 px-2 rounded-4xl"> Send </button>
    //             </form> */}
    //             </div>
                    
    //             <div>

    //             </div>
    //         </div>
    //         </div>
    //     </div>
    // );
    return (
        <div id="contact" className="mb-50">
          <p className="flex justify-center text-2xl font-semibold mb-10">Connect with me</p>
          <div className="flex justify-center">
          <div className="w-200 h-100 rounded-md shadow-md flex flex-col md:flex-row overflow-hidden">
            
            <div className="md:w-1/2 p-6">
              <form action="https://formspree.io/f/xyzeqzgp" method="POST" className="flex flex-col space-y-4">

                <input type="email" name="email" placeholder="Enter email" className="border border-gray-300 p-3 rounded-md" required/>
                <input type="text" name="name" placeholder="Name" className="border border-gray-300 p-3 rounded-md" required/>
                <textarea name="message" rows={5} placeholder="Message" className="border border-gray-300 p-3 rounded-md" required></textarea>

                <button type="submit"  className="bg-amber-600 text-white py-2 rounded-full font-semibold hover:bg-gray-400 transition duration-200">
                  Send Message
                </button>
              </form>
            </div>
    

            <div className="md:w-1/2 p-6 border-t md:border-t-0 md:border-l border-gray-300 flex flex-col justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-gray-600">Galle, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-xl">📱</span>
                <div>
                  <p className="font-semibold">Phone Number</p>
                  <p className="text-sm text-gray-600">+94 719861910</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-xl">📧</span>
                <div>
                  <p className="font-semibold">Email Address</p>
                  <p className="text-sm text-gray-600">dinukaviraji123@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      );

};
 export default Contact;