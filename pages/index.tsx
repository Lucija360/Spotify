import type { NextPage } from 'next';
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import { getSession} from 'next-auth/react';
import Player from "../components/Player";


const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
  
    <main className="flex">
      <Sidebar/>
      <Center />
      <div className="sticky bottom-0">
        <Player />
        </div>
    </main>
    </div>
  );
}


export  async function getServerSideProps(context) {
 const session = await getSession(context);

 return {
 props: {
   session,
 },
 };
}
