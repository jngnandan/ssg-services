
import {React} from 'react'
import {Link} from 'react-router-dom'
const SecurityBlogSection = (props) => {
    const {post} = props
    const {title, content, img} = post
    return(
        <>
            <Link to={`/security-services/blog/${post.id}`}>
            <div className='bg-white rounded-md shadow-md pb-2'>
            <div className='p-4'>
            <h1  className='font-medium text-gray-600 pb-2'>{title}</h1>
            <p className='text-sm text-gray-800 line-clamp-2'>{content}</p>
            </div>

        </div>
        </Link>
        </>
    )
}

export default SecurityBlogSection
