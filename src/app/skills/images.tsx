import CSS from '../../../public/icons/css.svg'
import Image from 'next/image'
import HTML from '../../../public/icons/html.svg'
import JS from '../../../public/icons/javascript.svg'
import R from '../../../public/icons/react.svg'
import C from '../../../public/icons/c.svg'
import Cpp from '../../../public/icons/cplusplus.svg'
import Python from '../../../public/icons/python.svg'
import Express from '../../../public/icons/express.svg'
import Git from '../../../public/icons/git.svg'
import Graphql from '../../../public/icons/graphql.svg'
import Jira from '../../../public/icons/jira.svg'
import MySQL from '../../../public/icons/mysql.svg'
import Next from '../../../public/icons/nextjs.svg'
import NodeJavaScript from '../../../public/icons/nodejs.svg'
import Numpy from '../../../public/icons/numpy.svg'
import Pandas from '../../../public/icons/pandas.svg'
import Pytorch from '../../../public/icons/pytorch.svg'
import Typescript from '../../../public/icons/typescript.svg'
import Golang from '../../../public/icons/go.svg'
import Mongo from '../../../public/icons/mongodb.svg'
import Postgres from '../../../public/icons/postgres.svg'

export function First(){
    return(
        <div className='flex flex-row gap-5 bg-[#090E16]'>
            <Image className='opacity-50' src={CSS} alt="CSS" width={60} height={60}/>
            <Image className='opacity-50' src={HTML} alt="HTML" width={60} height={60}/>
            <Image className='opacity-50' src={JS} alt="JS" width={60} height={60}/>
            <Image className='opacity-50' src={R} alt="React" width={60} height={60}/>
            <Image className='opacity-50' src={Express} alt="CSS" width={60} height={60}/>
            <Image className='opacity-50' src={NodeJavaScript} alt="Node" width={60} height={60}/>
            <Image className='opacity-50' src={Mongo} alt="MongoDB" width={60} height={60}/>
            <Image className='opacity-50' src={Postgres} alt="Postgres" width={60} height={60}/>
            <Image className='opacity-50' src={Express} alt="Express" width={60} height={60}/>
            <Image className='opacity-50' src={Next} alt="Next" width={60} height={60}/>
            <Image className='opacity-50' src={Typescript} alt="Typescript" width={60} height={60}/>  
        </div>
    )
}

export function Second(){
    return(
        <div className='flex flex-row gap-5'>
            <Image className='opacity-50' src={Git} alt="Git" width={60} height={60}/>
            <Image className='opacity-50' src={Jira} alt="Jira" width={60} height={60}/>
            <Image className='opacity-50' src={Numpy} alt="Numpy" width={60} height={60}/>
            <Image className='opacity-50' src={Pandas} alt="Pandas" width={60} height={60}/>
            <Image className='opacity-50' src={Pytorch} alt="Pytorch" width={60} height={60}/>
            <Image className='opacity-50' src={C} alt="C" width={60} height={60}/>
            <Image className='opacity-50' src={Cpp} alt="C++" width={60} height={60}/>
            <Image className='opacity-50' src={Python} alt="Python" width={60} height={60}/>
            <Image className='opacity-50' src={Golang} alt="Golang" width={60} height={60}/>
            <Image className='opacity-50' src={Graphql} alt="Graphql" width={60} height={60}/>
            <Image className='opacity-50' src={MySQL} alt="MySQL" width={60} height={60}/>
        </div>
    )
}