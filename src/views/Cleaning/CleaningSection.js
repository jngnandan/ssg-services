
import {React} from 'react'
import {Link} from 'react-router-dom'
const CleaningSection = (props) => {
    const {post} = props
    const {title, content, img, id} = post
    console.log(id)
    return(
        <>
            <Link to={`/cleaning-services/${post.id}`}>
            <div className='bg-white rounded-md shadow-md pb-2'>
            <img className='rounded-t' src={img} />
            <div className='p-4'>
            <h1  className='font-medium text-gray-600 pb-2'>{title}</h1>
            <p className='text-sm text-gray-800 line-clamp-3'>{content}</p>
            </div>

        </div>
        </Link>
        </>
    )
}

export default CleaningSection
