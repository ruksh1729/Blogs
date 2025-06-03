import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title}) => { // can either write only props

    // const blogs = props.blogs;
    // const title = props.title; // can do this without destructuring
    
    return ( 
        <div className="blog-preview">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h3>{ blog.title }</h3>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;

// this props is connected with blogs={blogs} in Home.js
// prop is used to transfer data from paretn to child component
// when delete button is clicked the function handleDelete is passed with the id that is to be deleted in Home.js
// We have used link to and a variable inside `` this, this will redirect us to id = blog.id
//



