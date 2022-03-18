import {useSession} from "next-auth/react";
import {ChevronDownIcon} from "@heroicons/react/outline"

function Center() {
    const{data: session} = useSession();
    return(
        <div className=" flex flex-grow text-white">
            <h1>I am center</h1>
            <header>
                <div className="">
                    <img 
                    className="rounded-full w-10 h-10"  
                    src={session?.user.image} 
                    alt=""/>
                    <h2>{session?.user.name}</h2>
                </div>
            </header>
        </div>
    );
}

export default Center;