import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function ScoutingComparison() {
  // Sidebar Component
  const Sidebar = () => (
    <aside className="w-64 bg-blue-600 text-white p-6">
      <div className="text-2xl font-bold mb-10">
        Sp<span className="inline-block">⚽</span>t Us
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/" className="flex items-center">
              <span className="mr-2">🏠</span> Home
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/teams" className="flex items-center">
              <span className="mr-2">👥</span> Teams
            </Link>
          </li>
          <li className="mb-4 bg-blue-700 p-2 rounded">
            <Link href="/scouting-comparison" className="flex items-center">
              <span className="mr-2">⚖️</span> Scouting Comparison
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )

  // PlayerList Component
 // PlayerList Component
const PlayerList = () => {
    const [selectedPlayers, setSelectedPlayers] = useState([]);
  
    const players = [
      { id: 1, name: 'Kelly', position: 'Striker', team: 'Kikwetu' },
      { id: 2, name: 'John', position: 'Midfielder', team: 'Kikwetu' },
      { id: 3, name: 'Alex', position: 'Defender', team: 'Kikwetu' },
      { id: 4, name: 'Sam', position: 'Goalkeeper', team: 'Kikwetu' },
      { id: 5, name: 'Leo', position: 'Striker', team: 'Kikwetu' },
      { id: 6, name: 'Chris', position: 'Midfielder', team: 'Kikwetu' },
      { id: 7, name: 'Max', position: 'Defender', team: 'Kikwetu' },
      { id: 8, name: 'Ryan', position: 'Goalkeeper', team: 'Kikwetu' },
    ];
  
    const togglePlayerSelection = (playerId) => {
      setSelectedPlayers((prev) => {
        if (prev.includes(playerId)) {
          return prev.filter((id) => id !== playerId);
        } else {
          return [...prev, playerId];
        }
      });
    };
  
    return (
      <table className="w-full">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-2 text-left">Profile</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Position</th>
            <th className="p-2 text-left">Team</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selectedPlayers.includes(player.id)}
                  onChange={() => togglePlayerSelection(player.id)}
                  className="mr-2"
                />
                <div className="w-8 h-8 bg-gray-300 rounded-full inline-block"></div>
              </td>
              <td className="p-2">{player.name}</td>
              <td className="p-2">{player.position}</td>
              <td className="p-2">{player.team}</td>
              <td className="p-2 text-right">
                <button className="bg-green-500 text-white px-4 py-1 rounded">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  

  return (
    <div className="flex h-screen bg-gray-100">
      <Head>
        <title>Spot Us - Scouting Comparison</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <Link href="/teams" className="text-blue-600">
            ← Back
          </Link>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md px-4 py-2 w-64"
            />
            <select className="border rounded-md px-4 py-2">
              <option>Filter by teams</option>
              {/* Add more team options here */}
            </select>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-blue-600 mb-4">Kikwetu</h2>

        <PlayerList />

        <div className="flex justify-center mt-6">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md">
            Compare
          </button>
        </div>
      </main>
    </div>
  )
}
