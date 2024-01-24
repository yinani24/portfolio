import { TopBarProps } from "./interfaces";

export function TopBar({children}: TopBarProps){
    return(
    <div className='rounded-2xl w-32 py-1 px-2 bg-[#7B4AE208]'>
        <h1 className='text-[#7B4AE2] font-raleway font-bold text-center text-md'>{children}</h1>
    </div>
  )
}