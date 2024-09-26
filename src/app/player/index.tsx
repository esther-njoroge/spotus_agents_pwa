import Head from 'next/head'
import Link from 'next/link'

export default function Player() {
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

  // PlayerProfile Component
  const PlayerProfile = () => (
    // <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-center justify-between">
    <div className="bg-white  p-6 mb-8 flex items-center justify-between">

      <div className="flex items-center  w-[50%]">
        {/* <div className="relative">
          <img
            src="/images/player.png"
            alt="James Doe"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="absolute top-0 right-0 bg-green-500 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
        </div> */}
{/* 
        <div className="ml-6">
          <h2 className="text-2xl font-bold">James Doe</h2>
          <p className="text-black">Best striker</p>
          <p className="text-black">Mphavu</p>
        </div> */}

        <div style={{
                borderRadius: '30px', 
                padding: '10px', 
                border: '1px solid #ccc', 
                textAlign: 'center', 
                width: '440px',
                height: '230px',
               
              }}>
                <div className='flex mt-[40px] ml-[25px] '>
                <div>
                <img 
                  src="images/player.png" 
                  alt="player" 
                  style={{ 
                    width: '150px', 
                    height: '140px', 
                  
                  }} 
                />
                </div>

                <div className='ml-[20%] '>
                <h4 className='font-bold text-[25px]'>James Doe</h4>
                <p className='text-[25px]'>Best striker</p>
                <p className='text-[25px]'>Mphavu</p>
                </div>

                </div>
              </div>

      </div>
      <div>
        <select className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-[-95%] text-[24px] font-bold">
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
          
        </select>
      </div>
    </div>
  )

  // SessionList Component
  const SessionList = () => {
    const sessions = [
      { date: '12/8/24', name: 'Session 1' },
      { date: '12/8/24', name: 'Session 2' },
      { date: '12/8/24', name: 'Session 3' },
      { date: '12/8/24', name: 'Session 4' },
      { date: '12/8/24', name: 'Session 5' },
      { date: '12/8/24', name: 'Session 6' },
    ]

    return (
      <div className='ml-[2%]'>
        <table className="w-[90%]">
          <thead>
            <tr className=" text-black ">
              <th className="p-4 text-left text-[24px]">Date</th>
              <th className="p-2 text-left text-[24px]">Sessions</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
                <td className="p-5 font-medium text-[18px]">{session.date}</td>
                <td className="p-2 font-medium text-[18px]">{session.name}</td>
                <td className="p-2 text-right">
                <button className="bg-[#46BC14] text-white px-8 py-1 rounded-[15px] h-[40px] font-medium text-[18px] ">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  // Main PlayerPage Component
  return (
    <div className="flex h-screen bg-gray-100">
      <Head>
        <title>Spot Us - Player Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <main className="flex-1 p-10">
        <Link href="/teams" className="text-blue-600 mb-4 inline-block">
          {/* ← Back */}
        </Link>
        <PlayerProfile />
        <SessionList />
      </main>
    </div>
  )
}
