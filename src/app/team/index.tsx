// import { useRouter } from 'next/router'
// import PlayerTable from '../../components/PlayerTable'

// export default function TeamPage() {
//   const router = useRouter()
//   const { teamName } = router.query

//   // Mock data - replace with actual data fetching logic
//   const players = [
//     { id: 1, name: 'Kelly', position: 'Striker', team: 'Kikwetu' },
//     { id: 2, name: 'Kelly', position: 'Striker', team: 'Kikwetu' },
//     { id: 3, name: 'Kelly', position: 'Striker', team: 'Kikwetu' },
//     { id: 4, name: 'Kelly', position: 'Striker', team: 'Kikwetu' },
//     { id: 5, name: 'Kelly', position: 'Striker', team: 'Kikwetu' },
//     { id: 6, name: 'Kelly', position: 'Striker', team: 'Kikwetu' },
//     { id: 7, name: 'Kelly', position: 'Striker', team: 'Kikwetu' },
//     { id: 8, name: 'Kelly', position: 'Striker', team: 'Kikwetu' },
//     { id: 9, name: 'Kelly', position: 'Striker', team: 'Kikwetu' },
//   ]

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">{teamName}</h1>
//       <PlayerTable players={players} />
//     </div>
//   )
// }

// // components/PlayerTable.js
// export default function PlayerTable({ players }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//       <table className="w-full">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="px-4 py-2 text-left">Profile</th>
//             <th className="px-4 py-2 text-left">Name</th>
//             <th className="px-4 py-2 text-left">Position</th>
//             <th className="px-4 py-2 text-left">Team</th>
//             <th className="px-4 py-2"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {players.map((player, index) => (
//             <tr key={player.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//               <td className="px-4 py-2">
//                 <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
//                   <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                   </svg>
//                 </div>
//               </td>
//               <td className="px-4 py-2">{player.name}</td>
//               <td className="px-4 py-2">{player.position}</td>
//               <td className="px-4 py-2">{player.team}</td>
//               <td className="px-4 py-2">
//                 <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded">
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// // components/Layout.js (update)
// import Sidebar from './Sidebar'

// export default function Layout({ children }) {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <header className="bg-white shadow-sm z-10">
//           <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//             <div className="w-full max-w-xs">
//               <input type="text" placeholder="Search" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
//           </div>
//         </header>
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
//           {children}
//         </main>
//       </div>
//     </div>
//   )
// }

// // components/Sidebar.js (update)
// import Link from 'next/link'

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-blue-600 text-white">
//       <div className="p-6">
//         <div className="text-2xl font-bold mb-8">
//           Sp<span className="inline-block rotate-45">⚽</span>t Us
//         </div>
//         <nav>
//           <ul className="space-y-2">
//             <li>
//               <Link href="/" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
//                 <span>Home</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/teams" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
//                 <span>Teams</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/scouting" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
//                 <span>Scouting Comparison</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </aside>
//   )
// }



import Head from 'next/head'
import Link from 'next/link'

export default function Teams() {
  // Sidebar Component
  const Sidebar = () => (
    <aside className="w-[16%] bg-[#177BBD] text-white p-6">
      <div className="text-2xl font-bold mb-10">
        <img src="images/logo.png" alt="" />
      </div>
     
      {/* <nav>
        <ul>
          <li className="mb-4">
            <Link href="/" className="flex items-center">
              <span className="mr-2">🏠</span> Home
              
            </Link>
          </li>
          <li className="mb-4 bg-blue-700 p-2 rounded">
            <Link href="/teams" className="flex items-center">
              <span className="mr-2">👥</span> Teams
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/scouting" className="flex items-center">
              <span className="mr-2">⚖️</span> Scouting Comparison
            </Link>
          </li>
        </ul>
      </nav> */}
    </aside>
  )

  // TeamList Component
  const TeamList = () => {
    const players = [
      { name: 'Kelly', position: 'Striker', team: 'Kikwetu' },
      { name: 'John', position: 'Midfielder', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
    
    ]

    return (
      <div className='ml-[5%]'>
        <h2 className="text-[40px] font-bold mb-4 text-[#177BBD] text-center">Kikwetu</h2>
        <table className="w-full">
          <thead>
            {/* <tr className="bg-[#177BBD] text-black"> */}
            <tr className="text-black ml-[8%]">
            <tr className='border-3 border-black ml-[8%]'></tr>  

              <th className="p-4 text-left text-[24px]">Profile</th>
              <th className="p-2 text-left text-[24px]">Name</th>
              <th className="p-2 text-left text-[24px]">Position</th>
              <th className="p-2 text-left text-[24px]">Team</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
                <td className="p-2 ml-[8%]">
                  
                  <div className="w-12 h-12 bg-gray-300 rounded-full ml-[5%]">
                    <img src="images/player.png" alt="profile" className='' />
                  </div>
                </td>
                <td className="p-5 font-medium text-[18px]">{player.name}</td>
                <td className="p-2 font-medium text-[18px]">{player.position}</td>
                <td className="p-2 font-medium text-[18px]">{player.team}</td>
                <td className="p-2 ml-[5%]">
                <button className="bg-[#46BC14] text-white px-8 py-1 rounded-[15px] h-[40px] font-medium text-[18px] ml-[8%]">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  // Main Teams Component
  return (
    <div className="flex h-screen bg-gray-100">
      <Head>
        <title>Spot Us - Teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <main className="flex-1 p-10">
        <div className="mb-6">
        <input type="text" placeholder='search' className='w-[40%] p-2 border rounded-[18px] border-black ml-[50px]'/>
  
        </div>
        <TeamList />
      </main>
    </div>
  )
}
