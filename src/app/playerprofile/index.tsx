import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function PlayerProfilePage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Head>
        <title>Spot Us - Player Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Sidebar /> */}

      <main className="flex-1 p-10">
        <Link href="/teams" className="text-blue-600 mb-4 inline-block">
          {/* ← Back */}
        </Link>
        <PlayerProfile />
        <PlayerStats />
      </main>
    </div>
  )
}

// Sidebar component
function Sidebar() {
  return (
    <aside className="w-64 bg-blue-600 text-white p-6">
      <div>
        <img src="" alt="" />
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
            <Link href="/scouting-comparison" className="flex items-center">
              <span className="mr-2">⚖️</span> Scouting Comparison
            </Link>
          </li>
        </ul>
      </nav> */}
    </aside>
  )
}

// PlayerProfile component
function PlayerProfile() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-center">
      <div className="relative">
        <img
          src="/player-image.jpg"
          alt="James Doe"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-green-500 rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="ml-6">
        <h2 className="text-2xl font-bold">James Doe</h2>
        <p className="text-gray-600">Mphavu</p>
      </div>
      <div className="ml-auto">
        <img
          src="/player-action.jpg"
          alt="Player in action"
          className="w-32 h-24 rounded-lg object-cover"
        />
      </div>
    </div>
  )
}

// PlayerStats component
function PlayerStats() {
  const stats = [
    { label: 'Shooting Accuracy', value: 97 },
    { label: 'Shooting Angle', value: 82 },
    { label: 'Assists', value: 5, max: 10 },
    { label: 'Shots on target', value: 2, max: 10 },
    { label: 'Goals', value: 1, max: 10 },
    { label: 'Passes', value: 10, max: 20 },
  ]

  return (
    <div className="grid grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="w-24 h-24 mx-auto mb-2">
            <CircularProgressbar
              value={stat.value}
              maxValue={stat.max || 100}
              text={`${stat.value}${stat.max ? '' : '%'}`}
              styles={buildStyles({
                textSize: '24px',
                pathColor: '#3B82F6',
                textColor: '#1F2937',
              })}
            />
          </div>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
