// 'use client'
// import Link from 'next/link';
// import React, { useState } from 'react'

// const pageInscription = () => {

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [onOff, setonOff] = useState(true)

//   const [login, setLogin] = useState(true)

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       //Envoyez les données d'inscription au serveur ici
//     // console.log({ username, email, password });
//     };
//   return (

//   <div className="h-[500px] flex items-center justify-center bg-red-500 py-12 px-4 sm:px-6 lg:px-8">
//     {
//       onOff ? <div >
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h1 className="text-3xl font-extrabold text-center text-gray-900">
//             Inscription
//           </h1>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="username" className="sr-only">
//                 Nom d'utilisateur:
//               </label>
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 autoComplete="username"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Nom d'utilisateur"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email:
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Mot de passe:
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Mot de passe"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Enregister
//             </button>
//           </div>
//         </form>
//         <button onClick={() => setonOff(false)} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >S'inscrire</button>
//       </div>
//     </div>
//     :
//     <div className="bg-blue-500 min-h-screen flex items-center justify-center">
//           <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
//             <h1 className="text-3xl font-semibold text-gray-800 mb-4">Bienvenue sur notre site</h1>
//             <p className="text-gray-600 mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae efficitur velit. Ut dignissim mi
//               vitae consectetur vehicula.
//             </p>
//             <Link
//               href="/login"
//               className="ml-4 inline-block bg-gray-500 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-600"
//             >
//               Se connecte
//             </Link>
//             <button onClick={() => setonOff(true)}>Retour</button>
//           </div>
//         </div>
//     }
//     {
//       login ? <div className="h-[500px] flex items-center justify-center bg-red-500 py-12 px-4 sm:px-6 lg:px-8"> 
        
//       </div>
//       :
//       ""
      
//     }
//   </div>
    
//   );
// }

// export default pageInscription