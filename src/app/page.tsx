import Agents from "./Agents";

import Player from "./player";
import Scouting from "./scouting";
import Signups from "./sign_ups";
import Teams from "./team";
import ProductMetrics from "./video_uploads";

export default function Home() {
  return (
    
      <main>
        <Agents/>
        <Teams/>
        <Player/>
        {/* <ScoutingComparison/> */}
        {/* <PlayerProfilePage/> */}
        <Scouting/>
        <ProductMetrics/>
        <Signups/>
        
      </main>
    
  );
}
