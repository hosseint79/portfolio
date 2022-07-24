import { Link } from "@remix-run/react"
import { FiArrowRight } from "react-icons/fi"
import { Container } from "../common/Container/Container"
import { SectionHeader } from "../common/SectionHeader/SectionHeader"

const PostsList = () => {
    
    return (
      
        <Container>
            <SectionHeader caption="See some articles" title="Articles"/>
            <div className="w-full  mt-24 mb-12 flex gap-10 ">
                {
                    [1,2,3].map(() => {
                        return <Link to="/posts/django-crash-course" className="block w-1/3 relative top-5 duration-300 transition-all hover:top-0">
                        <div className=" w-full group relative text-white cursor-pointer ">
                                    <img className="w-full h-52 rounded-lg " src="/images/blog-image.jpg"/>
                                    <div className="w-full h-52 rounded-lg absolute top-0 left-0 group-hover:bg-[#3830a3c2] opacity-0 invisible group-hover:visible group-hover:opacity-100
                                                    items-center justify-center text-xl duration-300  font-bold transition-all flex
                                                    ">
                                        Read article <FiArrowRight />
                                    </div> 
                                    <h2 className="font-bold my-3 text-lg">
                                        this is my title for testing this post
                                    </h2>
                                    <p>
                                         this is not a caption for testing  this is not a caption for testing  this is not a caption for testing  this is not a caption for testing 
                                         this is not a caption for testing this is not a caption for testing this is not a caption for testing 
                                    </p>
                                </div>
                        </Link> 
                    })
                }
            </div>
        </Container>
       

    )
}

export { PostsList }