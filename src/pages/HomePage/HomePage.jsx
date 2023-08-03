import axios from "axios";
import { useEffect, useState } from "react";
import './HomePage.css'

const HomePage = () => {
    const [post, setPost] = useState('');
    const [number, setNumber] = useState(1);
    
    useEffect(() => {
        axios.get("http://localhost:8080/post", {params: {number: number}})
            .then((response) => {
                setPost(response.data)
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [number])
    const divPost = () => {
        let post_arr = [];

        const posts = post.posts || [];

        for(let i = 0; i < posts.length; i++) {
            post_arr.push(
                <div className="Post" key={post.posts[i].id}>
                    <h3 className="title">{post.posts[i].title}</h3>
                    <p className="content">{post.posts[i].content}</p>
                    <p className="writer">{post.posts[i].writer}</p>
                </div>
            )
        }

        return post_arr;
    }

    const divNumber = () => {
        let number_arr = [];
        let number_p = parseInt(post.number / 10) || 0;
        if(post.number % 10 !== 0) {
            number_p += 1
        }
        for(let i = 1; i < number_p + 1; i++) {
            number_arr.push(
                <p onClick={() => {setNumber(i)}} className="NumberPost" key={i}>{i}</p>
            )
        }

        return number_arr;
    }
    

    return (
        <div>
            {divPost()}
            <div className="NumberDiv">
                {divNumber()}
            </div>
        </div>
    )
}

export default HomePage;