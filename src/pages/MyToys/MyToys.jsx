import { useContext, useEffect, useState } from 'react';
import ToyRow from './ToyRow';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const MyToys = () => {
   const [toys, setMyToys] = useState([]);
   const { user } = useContext(AuthContext);
   const navigate = useNavigate();
   const url = `http://localhost:5555/myToys?email=${user?.email}`;
   useEffect(() => {
      fetch(url, {
         method: 'GET',
         headers: {
            authorization: `bearer ${localStorage.getItem('my-toys-access-token')}`
         }
      })
         .then(res => res.json())
         .then(data => {
            if (!data.err) {
               setMyToys(data);
            }
            else {
               navigate('/');
            }
         });
   }, [url, navigate]);

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
      <section className='bg-red-100 min-h-[calc(100vh-50px)]'>
         <h2 className="text-center text-3xl py-5 text-red-700 font-bold">My Toys : {toys.length}</h2>

         <div className="overflow-x-auto w-full max-w-7xl mx-auto">
            <table className="table table-zebra w-full ">
               {/* head */}
               <thead className="rounded-none">
                  <tr className='text-red-900 font-bold'>
                     <th>Toy Photo & Product Name</th>
                     <th>Added by</th>
                     <th>Email</th>
                     <th className="text-center">Price</th>
                     <td className="text-center">Quantity</td>
                     <th className="text-center">Status</th>
                  </tr>
               </thead>
               <tbody>
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