'use client';

import Head from 'next/head';
import Link from 'next/link';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';

export default function ScoutingComparison() {
  const player = {
    name: 'James Doe',
    team: 'Mphavu',
    image: '/path-to-player-image.jpg', // Replace with actual path
  };

  const video = {
    image: '/path-to-video-thumbnail.jpg', // Replace with actual path
  };

  const stats = [
    { label: 'Shooting Accuracy', value: 97 },
    { label: 'Shooting Angle', value: 82 },
    { label: 'Assists', value: 5 },
    { label: 'Shots on target', value: 2 },
    { label: 'Goals', value: 1 },
    { label: 'Passes', value: 10 },
  ];

  return (
    <div className="flex h-screen">
      <Head>
        <title>Spot Us - Scouting Comparison</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white h-screen">
        {/* <div className="text-2xl font-bold p-6 flex items-center space-x-2">
          <span className="inline-block">Sp</span>
          {/* <span className="inline-block">⚽</span> */}
          {/* <span className="inline-block">t Us</span> */} 
        {/* </div> */}
        <nav>
          <ul>
            <li className="mb-4 px-6">
              <Link href="/" className="flex items-center space-x-2">
                <span>🏠</span> <span>Home</span>
              </Link>
            </li>
            <li className="mb-4 px-6 bg-blue-700 rounded">
              <Link href="/teams" className="flex items-center space-x-2">
                <span>👥</span> <span>Teams</span>
              </Link>
            </li>
            <li className="mb-4 px-6">
              <Link href="/scouting-comparison" className="flex items-center space-x-2">
                <span>⚖️</span> <span>Scouting Comparison</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-100">
        {/* Back Button and Title */}
        <div className="flex justify-between items-center mb-6">
          {/* <button className="text-blue-600">← Back</button> */}
          {/* <h1 className="text-2xl font-bold text-blue-600 text-center">Scouting Comparison</h1> */}
        </div>

        {/* Player Profile and Video */}
        <div className="flex justify-between items-center mb-6">
          {/* Player Profile */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Image
                src={player.image}
                alt={player.name}
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
              <div className="absolute top-0 right-0">
                <img src="images/player.png" alt="" />
            
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold">{player.name}</h2>
              <p>{player.team}</p>
            </div>
          </div>

          {/* Video Thumbnail */}
          {/* <div className="relative">
            <Image
              src={video.image}
              alt="Player Video"
              width={200}
              height={150}
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-blue-500 text-white p-3 rounded-full">▶️</button>
            </div>
          </div> */}
        </div>

        {/* Player Stats */}
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center w-[40%] ml-8 mt-[15%]">
              <CircularProgressbar
                value={stat.value}
                text={`${stat.value}`}
                styles={buildStyles({
                  pathColor: '#3B82F6',
                  textColor: '#000',
                  trailColor: '#d6d6d6',
                })}
              />
              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

