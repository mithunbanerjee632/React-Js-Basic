import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {blogsData} from "../data";

const Blogs = () => {
    const [blogs,setBlogs]=useState(blogsData);

    const truncateString=(str,num)=>{
        if(str.length>num){
            return str.slice(0,num)+"..."
        }else{
            return str;
        }
    }
   /* const navigate = useNavigate();*/
    return (
        <div>
            <h1>Blogs Page</h1>
            <section>
                {blogs.map((blog)=>{
                    const {id,title,body}=blog
                    return <article key={id}>
                          <h1>{title}</h1>
                          <p>{truncateString(body,200)}</p>
                        <Link to={title}>Learn More</Link>
                    </article>
                })}
            </section>


           {/* <button onClick={()=>{
               navigate("/");
            }}>Go to Home</button>*/}
        </div>
    );
};

export default Blogs;