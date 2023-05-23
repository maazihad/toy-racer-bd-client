import { useContext, useEffect, useState } from 'react';
import ToyRow from './ToyRow';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const MyToys = () => {
   const { user } = useContext(AuthContext);
   const [toys, setMyToys] = useState([]);
   const [control, setControl] = useState(false);

   useEffect(() => {
      fetch(`http://localhost:5555/myToys/${user?.email}`)
         .then((res) => res.json())
         .then((data) => {
            setMyToys(data);
         });
   }, [user, control]);

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

   // const handleMyToyUpdate = data => {
   //    console.log(data);
   //    Swal.fire({
   //       title: 'Are you sure?',
   //       text: "You won't be able to revert this!",
   //       icon: 'success',
   //       showCancelButton: true,
   //       confirmButtonColor: '#3085d6',
   //       cancelButtonColor: '#d33',
   //       confirmButtonText: 'Yes, update it!'
   //    }).then((result) => {
   //       if (result.isConfirmed) {
   //          fetch(`http://localhost:5555/myToys/${data?._id}`, {
   //             method: 'PUT',
   //             headers: {
   //                'content-type': 'application/json',
   //             },
   //             body: JSON.stringify(data)
   //          })
   //             .then(res => res.json())
   //             .then(data => {
   //                console.log(data);
   //                setControl(!control);
   //                if (data.modifiedCount > 0) {
   //                   Swal.fire(
   //                      'Updated!',
   //                      'Toy has been updated.',
   //                      'success'
   //                   );

   //                }
   //             });
   //       }
   //    });
   // };


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
                     // handleMyToyUpdate={handleMyToyUpdate}
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