import { TopBarProps, TopProps } from "./interfaces";
import { TopBar } from "./topbar";

export function Top({topbar, children}: TopProps){
    return(
        <div className=''>
            <TopBar width={topbar.width}>{topbar.children}</TopBar>
            <h1 className='text-white mb-4 font-[raleway] text-5xl font-extrabold'> {children} </h1>
        </div>
    )
}