

const Spinner = () => {
   return (
      <div className='flex justify-center items-center min-h-[calc(100vh-68px)]'>
         <p className='text-7xl text-red-900 font-thin'>L</p>
         <div className='w-10 h-10 border-8 border-dashed rounded-full border-amber-700 animate-spin mt-5'></div>
         <p className='text-7xl text-red-900 font-thin'>ading....</p>
      </div>
   );
};

export default Spinner;