import CSS from '../../../public/icons/css.svg'
import Image from 'next/image'
import HTML from '../../../public/icons/html.svg'
import JS from '../../../public/icons/javascript.svg'
import R from '../../../public/icons/react.svg'
import C from '../../../public/icons/c.svg'
import Cpp from '../../../public/icons/cplusplus.svg'
import Python from '../../../public/icons/python.svg'

export function First(){
    return(
        <div className='flex flex-row'>
            <Image className='opacity-50' src={CSS} alt="CSS" width={60} height={60}/>
            <Image className='opacity-50' src={HTML} alt="HTML" width={60} height={60}/>
            <Image className='opacity-50' src={JS} alt="JS" width={60} height={60}/>
            <Image className='opacity-50' src={R} alt="React" width={60} height={60}/>
            <Image className='opacity-50' src={C} alt="C" width={60} height={60}/>
            <Image className='opacity-50' src={Cpp} alt="C++" width={60} height={60}/>
            <Image className='opacity-50' src={Python} alt="Python" width={60} height={60}/>
        </div>
    )
}