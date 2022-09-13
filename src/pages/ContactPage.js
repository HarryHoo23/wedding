import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Comment from '../components/Comment';
import GettingMarried from '../components/GettingMarried';
import { Form } from 'react-bootstrap';
import Button from '../components/Button';

const ContactPage = () => {

    const [comment, setComment] = useState([]);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        retrieveData();
    }, []);

    const retrieveData = async () => {
        const { data } = await axios.get('/api/comment');
        setComment(data);        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/createComment', { name, content });
            setName("");
            setContent("");
            await retrieveData();
        } catch (error) {
            console.log(error);
        }
    }

    const toggleForm = () => {
        setIsHidden(!isHidden);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    return (
        <div className="contact wrapper">
            <GettingMarried />
            <h3 className='text-center mb-4'>留言板</h3>
            <div className="comment-container">
                {comment.length > 0 ? comment.map((item, index) => {
                    return (
                        <Comment comment={item} key={item.createDate} position={index} />
                    )
                }) :
                    <div>写下你的留言和祝福吧~</div>
                }
            </div>
            {!isHidden ? <div className={`form-container mt-5 ${isHidden ? 'hide' : 'show'}`}>
                <Form onSubmit={handleSubmit} className="contact-form">
                    <Form.Group className="mb-3 pt-3" controlId="exampleForm.ControlInput1">                        
                        <Form.Control type="text" placeholder="姓名" value={name} onChange={handleNameChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">                        
                        <Form.Control as="textarea" rows={3} placeholder="写下你想对新郎新娘说的话吧~" value={content} onChange={handleContentChange} />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Button className="hide-btn" action={toggleForm}>隐藏</Button>
                        <Button className="submit-btn" action={handleSubmit}>提交</Button>
                    </div>
                </Form>
            </div>
                :
                <Button className="show-btn" action={toggleForm}>显示</Button>
            }
            
        </div>
    )
}

export default ContactPage;