import { Helmet } from "react-helmet";

const AboutUs = () => {
   return (

      <>
         <Helmet>
            <title>Toy-Racer BD - About Us</title>
         </Helmet>
         <div className=' bg-red-100  min-h-[calc(100vh-50px)] pb-5'>
            <div className="pt-5  max-w-7xl mx-auto ">
               <div className="bg-red-500 lg:w-3/5 mx-auto  py-4 rounded-full">
                  <div className="container mx-auto px-4">
                     <h1 className="text-3xl text-center text-white font-bold">About Toy-Racer BD</h1>
                  </div>
               </div>
               <div className="container mx-auto px-4 py-8">
                  <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                  <p className="mb-4">
                     Toy-Racer BD is a leading toy manufacturing company based in Bangladesh. We specialize in creating high-quality toy racing cars that bring joy and excitement to children of all ages. Our journey began in 2005 when our founder, Mr. Ahmed Rahman, recognized the need for safe and durable toys in the market.
                  </p>
                  <p className="mb-4">
                     Starting as a small workshop with a handful of dedicated craftsmen, we gradually expanded our operations and incorporated advanced manufacturing techniques. With a strong commitment to quality and innovation, we quickly gained a reputation for producing exceptional toy racing cars that captivate young hearts.
                  </p>
                  <p className="mb-4">
                     Today, Toy-Racer BD stands as a renowned name in the industry, delivering happiness to countless children worldwide. We continue to push the boundaries of toy manufacturing, combining cutting-edge technology with meticulous craftsmanship to create toys that ignite imagination and inspire endless play.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="mb-4">
                     At Toy-Racer BD, our mission is to create memorable childhood experiences through our exceptional toy racing cars. We believe that toys play a vital role in a childs development, fostering creativity, motor skills, and social interaction. We strive to design and manufacture toys that not only entertain but also contribute to a childs growth and learning.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">Quality and Safety</h2>
                  <p className="mb-4">
                     We understand the importance of safety when it comes to childrens toys. Thats why we place the utmost priority on product safety and adhere to strict quality control measures. Our toy racing cars undergo rigorous testing to ensure they meet and exceed international safety standards. We use non-toxic materials, conduct thorough durability tests, and continuously improve our manufacturing processes to provide toys that parents can trust.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">Sustainability</h2>
                  <p className="mb-4">
                     As a responsible company, we are committed to minimizing our environmental impact. We actively seek sustainable alternatives in our manufacturing processes and packaging materials. We strive to reduce waste, promote recycling, and implement energy-efficient practices throughout our operations. By prioritizing sustainability, we aim to create a better future for generations to come.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">Community Engagement</h2>
                  <p className="mb-4">
                     We believe in giving back to the community that supports us. Toy-Racer BD actively participates in various social initiatives aimed at improving the lives of children. We collaborate with local organizations to organize toy drives, educational programs, and recreational activities for underprivileged children. Through these efforts, we aim to make a positive difference and bring smiles to the faces of those who need it the most.
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutUs;