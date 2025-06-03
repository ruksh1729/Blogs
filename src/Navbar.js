import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useRef } from "react";
import useFetch from "./useFetch";

const Navbar = () => {
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
  const searchRef = useRef();

  useEffect(() => {
    const searchInput = searchRef.current;

    const handleKeyup = (e) => {
      const term = e.target.value.toLowerCase();

      const filtered = blogs?.filter((blog) =>
        blog.title.toLowerCase().includes(term)
      );

      console.log("Filtered blogs:", filtered);
      // Display filtered blogs logic goes here (likely in BlogList or another component)
    };

    if (searchInput) {
      searchInput.addEventListener("keyup", handleKeyup);
    }

    return () => {
      if (searchInput) {
        searchInput.removeEventListener("keyup", handleKeyup);
      }
    };
  }, [blogs]);

  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <form id="search-blogs">
        <input ref={searchRef} type="text" placeholder="Search Blogs..." />
      </form>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
