import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './WritePage.css'

const WritePage = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const contentUpdateHandler = (e) => {
        setContent(e.target.value);
    }

    const titleUpdateHandler = (e) => {
        setTitle(e.target.value);
    }

    const submit = () => {
        const postData = {
            title : title,
            content : content
        }
        axios.post('https://port-0-dma-server-eu1k2llkuxbztt.sel4.cloudtype.app/post/create', postData, {withCredentials : true})
            .then((response) => {
                navigate('/')
            })
    }

    return(
        <div className="WriteDiv">
            <input className="WriteTitle" type="text" onChange={titleUpdateHandler} placeholder="제목"/><br/>
            <textarea onChange={contentUpdateHandler} placeholder="내용"></textarea>
            <button onClick={submit}>Post</button>
        </div>
    )
}

export default WritePage;