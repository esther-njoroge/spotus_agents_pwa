

// const Agents = () =>{
//     return(
//         <div>

// <div className="flex h-screen bg-gray-100">
//           {/* Sidebar */}
//           <div className="w-64 bg-blue-500 text-white p-4">
//             <h1 className="text-2xl font-bold mb-8">Spot Us</h1>
//             <nav>
//               <a href="#" className="flex items-center mb-4 text-white">
//                 {/* <Home className="mr-2" /> Home */}
//               </a>
//               <a href="#" className="flex items-center mb-4 text-white">
//                 {/* <Users className="mr-2" /> Teams */}
//               </a>
//               <a href="#" className="flex items-center mb-4 text-white">
//                 {/* <BarChart2 className="mr-2" /> Scouting Comparison */}
//               </a>
//             </nav>
//           </div>

//           Main content
//           <div className="flex-1 p-8 overflow-auto">
//             <h2 className="text-2xl font-semibold mb-4 text-blue-400">Welcome back</h2>


//             <div className="relative mb-8">
//               <input type="text" placeholder="Search" className="w-[40%] p-2 pl-10 border rounded-[15px] border-black"/>
//             </div>

//             <h3 className="text-xl font-semibold mb-4 text-blue-400">Top Players</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="flex flex-col items-center bg-white p-4 rounded-lg shadow">
//                   <img src="/api/placeholder/50/50" alt="Player" className="w-16 h-16 rounded-full mb-2" />
//                   <div>
//                     <p className="font-semibold text-black">James Doe</p>
//                     <p className="text-sm text-black">Best striker</p>
//                     <p className="text-sm text-black">Malawi</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <h3 className="text-xl font-semibold mb-4 text-blue-400">Available Teams</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {[1, 2, 3, 4].map((i) => (
//                 <div key={i} className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//                   <img src="/api/placeholder/60/60" alt="Team logo" className="w-16 h-16 mx-auto mb-2" />
//                   <p className="text-center font-semibold text-black">Ligi Ndogo FC</p>
//                   <p className="text-center font-semibold text-black">34 Players available</p>
//                   <p className="text-center text-sm text-black">Ngong Road</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         </div>
//     )
// }

// export default Agents;






// import '../styles/globals.css'
// import Layout from '../components/Layout'

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }

// export default MyApp

// // components/Layout.js
// import Sidebar from './Sidebar'

// export default function Layout({ children }) {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <main className="flex-1 p-8 overflow-y-auto">
//         {children}
//       </main>
//     </div>
//   )
// }

// // components/Sidebar.js
// import Link from 'next/link'

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-blue-600 text-white p-6">
//       <div className="text-2xl font-bold mb-8">
//         Sp<span className="inline-block rotate-45">⚽</span>t Us
//       </div>
//       <nav>
//         <ul className="space-y-4">
//           <li>
//             <Link href="/" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
//               <span>Home</span>
//             </Link>
//           </li>
//           <li>
//             <Link href="/teams" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
//               <span>Teams</span>
//             </Link>
//           </li>
//           <li>
//             <Link href="/scouting" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
//               <span>Scouting Comparison</span>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   )
// }

// // pages/index.js
// import PlayerCard from '../components/PlayerCard'
// import TeamCard from '../components/TeamCard'

// export default function Home() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Welcome back</h1>
//       <div className="mb-6">
//         <input type="text" placeholder="Search" className="w-full p-2 rounded border" />
//       </div>
//       <section className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Top Players</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <PlayerCard name="James Doe" position="Best striker" team="Mphavu" />
//           <PlayerCard name="James Doe" position="Best striker" team="Mphavu" />
//           <PlayerCard name="James Doe" position="Best striker" team="Mphavu" />
//         </div>
//       </section>
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Available Teams</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <TeamCard name="Ligi Ndogo FC" players={34} location="Ngong Road" />
//           <TeamCard name="Ligi Ndogo FC" players={34} location="Ngong Road" />
//           <TeamCard name="Ligi Ndogo FC" players={34} location="Ngong Road" />
//           <TeamCard name="Ligi Ndogo FC" players={34} location="Ngong Road" />
//         </div>
//       </section>
//     </div>
//   )
// }

// // components/PlayerCard.js
// export default function PlayerCard({ name, position, team }) {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
//       <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
//       <div>
//         <h3 className="font-bold">{name}</h3>
//         <p className="text-sm text-gray-600">{position}</p>
//         <p className="text-sm text-gray-600">{team}</p>
//       </div>
//     </div>
//   )
// }

// // components/TeamCard.js
// export default function TeamCard({ name, players, location }) {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow">
//       <div className="w-16 h-16 bg-gray-300 mx-auto mb-4"></div>
//       <h3 className="font-bold text-center">{name}</h3>
//       <p className="text-sm text-gray-600 text-center">{players} Players available</p>
//       <p className="text-sm text-gray-600 text-center">{location}</p>
//     </div>
//   )
// }





// import Head from 'next/head'
// import Link from 'next/link'

// export default function Home() {
//   // Sidebar Component
//   const Sidebar = () => (
//     <aside className="w-64 bg-blue-600 text-white p-6">
//       {/* <div className="text-2xl font-bold mb-10">Spot Us</div> */}
//       <div>
//         <img src="images/logo.png" alt="" />
//       </div>

//       {/* <nav>
//         <ul>
//           <li className="mb-4">
//             <Link href="/" className="flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link href="/teams" className="flex items-center">
//               <span className="mr-2">👥</span> Teams
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link href="/scouting" className="flex items-center">
//               <span className="mr-2">⚖️</span> Scouting Comparison
//             </Link>
//           </li>
//         </ul>
//       </nav> */}
//     </aside>
//   )

//   // TopPlayers Component
//   const TopPlayers = () => {
//     const players = [
//       { name: 'James Doe', position: 'Best striker', team: 'Mphavu' },
//       { name: 'John Smith', position: 'Midfielder', team: 'Mphavu' },
//       { name: 'Chris Oti', position: 'Defender', team: 'Mphavu' },
//     ]

//     return (
//       <div className="mb-10  ml-3">
//         <h2 className="text-xl font-bold mb-4 text-sky-500 mt-[7%] ml-3">Top Players</h2>
//         <div className="flex space-x-24 ml-5">
//           {players.map((player, index) => (
//             <div key={index} className="bg-white p-8 w-[25%] h-[60%] rounded-lg shadow flex items-center">
//               <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">
//                 <img src="images/player.png" alt="player" />
//               </div>
//               <div>
//                 <div className="font-bold">{player.name}</div>
//                 <div className="text-sm text-black font-semibold">{player.position}</div>
//                 <div className="text-sm text-black font-semibold">{player.team}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }

//   // AvailableTeams Component
//   const AvailableTeams = () => {
//     const teams = [
//       { name: 'Ligi Ndogo FC', players: 34, location: 'Ngong Road' },
//       { name: 'Mphavu FC', players: 28, location: 'Kilimani' },
//       { name: 'Ngong Warriors', players: 22, location: 'Ngong Town' },
//       { name: 'Ridgeways FC', players: 30, location: 'Ridgeways' },
//     ]

//     return (
//       <div>
//         <h2 className="text-xl font-bold mb-4 text-sky-500  mt-[10%] ml-3">Available Teams</h2>
//         <div className="grid grid-cols-4 gap-4 ml-3 border-[2px]">
//           {teams.map((team, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow">
//               <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 mx-auto">
//                 <img src="images/team.png" alt="team" className=''/>
//               </div>
//               <div className="text-center">
//                 <div className="font-bold">{team.name}</div>
//                 <div className="text-sm text-black">{team.players} Players available</div>
//                 <div className="text-sm text-black">{team.location}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }

//   // Main Home Component
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Head>
//         <title>Spot Us</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Sidebar />

//       <main className="flex-1 p-10">
//         <h1 className="text-3xl font-bold mb-6 text-sky-500 ml-3">Welcome back</h1>
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-[40%] p-2 border rounded-[23px] border-black ml-3"
//           />
//         </div>
//         <TopPlayers />
//         <AvailableTeams />
//       </main>
//     </div>
//   )
// }




import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <nav style={{
        width: '16%',
        backgroundColor: '#177BBD',
        color: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <img src="images/logo.png" alt="" />

        {/* <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
          <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="home" style={{ marginRight: '10px' }}>🏠</span>
            Home
          </li>
          <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="teams" style={{ marginRight: '10px' }}>🏃</span>
            Teams
          </li>
          <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="scouting" style={{ marginRight: '10px' }}>⚖️</span>
            Scouting Comparison
          </li>
        </ul> */}
      </nav>

      {/* Main Content */}
      <div style={{ width: '80%', padding: '20px' }}>
        <div style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2 className='text-3xl font-bold mb-6 text-blue-500 ml-[50px]'>Welcome back</h2>
          <img 
            src="/images/logo.png" 
            alt="profile" 
            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
          />
        </div>

        {/* Search Bar */}
        <div style={{ marginBottom: '30px' }}>
          <input type="text" placeholder='search' className='w-[40%] p-2 border rounded-[18px] border-black ml-[50px]'/>
        
        </div>

     

        <section style={{ marginBottom: '40px', marginLeft: '50px', marginTop: '5%'}}>
          <h3 className='text-3xl font-bold mb-6 text-blue-500'>Top Players</h3>
          <div style={{ display: 'flex', gap: '11%' }}>
            {[1, 2, 3, ].map(player => (
              <div key={player} style={{
                borderRadius: '30px', 
                padding: '10px', 
                border: '1px solid #ccc', 
                textAlign: 'center', 
                width: '320px',
                height: '170px',
               
              }}>
                <div className='flex mt-[30px] ml-[25px]'>
                <div>
                <img 
                  src="images/player.png" 
                  alt="player" 
                  style={{ 
                    width: '70px', 
                    height: '70px', 
                  
                  }} 
                />
                </div>


                <div className='ml-[20%] '>
                <h4 className='font-bold text-[20px]'>James Doe</h4>
                <p className='text-[20px]'>Best striker</p>
                <p className='text-[20px]'>Mphavu</p>
                </div>

                </div>

              </div>
            ))}
          </div>
        </section>



        <section className='ml-[50px] mt-[10%]'>
          <h3 className='text-3xl font-bold mb-6 text-blue-500'>Available Teams</h3>
          <div style={{ display: 'flex', gap: '15px' }}>
            {[1, 2, 3, 4].map(team => (
              <div key={team} style={{
                borderRadius: '30px', 
                padding: '10px', 
                border: '1px solid #ccc', 
                textAlign: 'center', 
                width: '300px'
              }}>
            
                <img src="images/team.png" alt="team" className='w-[120px] ml-[30%]'/>
               
                <h4 className='font-bold text-[20px]'>Ligi Ndogo FC</h4>
                <p className='text-[20px]'>34 Players available</p>
                <p className='text-[20px]'>Ngong Road</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
