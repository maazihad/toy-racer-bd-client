import { useEffect, useState } from 'react';
import ToyRow from './ToyRow';
import Swal from 'sweetalert2';

const MyToys = () => {

   const [toys, setMyToys] = useState([]);
   useEffect(() => {
      fetch('http://localhost:5555/myToys', {
         method: 'GET',
      })
         .then(res => res.json())
         .then(data => setMyToys(data));
   }, []);

   const handleDeleteTheToy = id => {
      console.log(id);
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5555/myToys/${id}`, {
               method: 'DELETE'
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                     Swal.fire(
                        'Deleted!',
                        'Toy has been deleted.',
                        'success'
                     );
                     const remainingToys = toys.filter(myToy => myToy._id !== id);
                     setMyToys(remainingToys);
                  }
               });

         }
      });
   };



   return (
      <section>
         <h2 className="text-center text-5xl mb-5  text-red-700 font-bold">My Toys : {toys.length}</h2>

         <div className="overflow-x-auto w-full">
            <table className="table w-full">
               {/* head */}
               <thead>
                  <tr>
                     <th>Toy Photo & Product Name</th>
                     <th>User Name</th>
                     <th>User Email</th>
                     <th>Price</th>
                     <td>Quantity</td>
                     <th>Status</th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 1 */}
                  {
                     toys.map(toy => <ToyRow
                        key={toy._id}
                        toy={toy}
                        handleDeleteTheToy={handleDeleteTheToy}
                     >
                     </ToyRow>)
                  }
               </tbody>
            </table>
         </div>
      </section>
   );
};

export default MyToys;