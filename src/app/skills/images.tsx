import CSS from '../../../public/icons/css.svg'
import Image from 'next/image'

export function First(){
    return(
        <div>
            <Image className='opacity-50' src={CSS} alt="CSS" width={40} height={40}/>
        </div>
    )
}