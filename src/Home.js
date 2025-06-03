import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    // const [name, setName] = useState('mario');
    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog=>blog.id != id); // handle delete is defined here and not in BlogList because
    //     setBlogs(newBlogs);// if we define it in BlogList then we will have to delete the original data, so to not let that happen we make an array 
    //     // and pass all the blogs whose id's are not equal to the id to be deleted
    // }
    // // let name = 'mario';
    // const [name, setName] = useState('mario'); // array destructuring, triggers a re-render as variable changes
    // const [age, setAge] = useState(25); // when the variable eg:name, age changes, the function beside it is invoked
    // const handleClick = ()=>{
    //     setName('luigi');
    //     setAge(90); // this call the variable and changes the value
    // }
    // const handleClickAgain = (name, e)=>{
    //     console.log('hello '+name, e.target);
    // }
    // empty dependency array make sures that the useEffect function works only once, if the state changes after, it wont run 

    const { data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's blogs"/>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author==='Ruksh')} title="Ruksh's blogs"/>}
            {/* <h2>Homepage</h2> */}
            {/* <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={(e)=>{
                handleClickAgain('mario', e);
            }}>Click me again</button> */}
            {/* <button onClick={()=>setName('luigi')}>Change Name</button>
            <p>{ name }</p> */}
        </div>
     );
}
 
export default Home;
// onClick={handleClick()} ---> this will invoke the function directly when relodes
// onClick={handleClick} ---> this will not invoke the funtion untill clicked
// onclick={handleClickagain('mario')} ---> this will invoke the function when it reloads
// onclick={(e)=>{handleClickagain('mario', e)}} ---> this will be invoked when clicked
// key property must be present on each div that is displaying through map, cause react keeps a track on changes made
// blogs={blogs} is connected with BlogsList.js, it act as a prop
// prop is used to transfer data from paretn to child component
// BlogList is called amny times and we can see as many sections in the output
// useEffect function gets called when the page gets rendered or any change is made in the page
// when a change is made in the blogs, usestate calls setblogs and that triggers a re-render, after every re-render useEffect is called
// when we pass a variable in dependency array in the useEffect function, it keeps track only on that variable, not entire render
// res is response from the fetch data link
// now we have shifted the useeffect function inside UseFetch.js to increase reusability of the function
// react router is a concept, normal html pages are rendered from the server, when we are redireted, it sends requests to the server
// but in react, the react router handles it all, it prevent sending request to the server and instead renders new page itself
// used react router dom version 5


