import ToyCard from "./ToyCard";

const ToyTab = ({ toys }) => {
   return (
      <div className="grid lg:grid-cols-3 gap-5">
         {
            toys.map(toy => <ToyCard
               key={toy._id}
               toy={toy}
            ></ToyCard>)
         }
      </div>
   );
};

export default ToyTab;