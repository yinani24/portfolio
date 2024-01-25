import { TopBarProps } from "./interfaces";

export function TopBar({width, children}: TopBarProps){
    return(
    <div className={`${width} rounded-2xl py-1 px-2 bg-[#7B4AE208]`}>
        <h1 className='text-[#7B4AE2] font-raleway font-bold text-center text-md'>{children}</h1>
    </div>
  )
}