
const Contact = () => {
   return (
      <div className=' bg-red-100  min-h-[calc(100vh-50px)] pb-5'>
         <div className=" py-10  max-w-7xl mx-auto ">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
               <h1 className="text-3xl font-bold  mb-6 text-center text-red-800">Contact Toy-Racer BD</h1>
               <div className="bg-red-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                     </label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your name"
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                     </label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your email"
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                     </label>
                     <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        rows="5"
                        placeholder="Your message"
                     ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                     <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                     >
                        Send
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;