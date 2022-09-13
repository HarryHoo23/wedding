import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Comment from '../components/Comment';
import GettingMarried from '../components/GettingMarried';
import { Form } from 'react-bootstrap';
import Button from '../components/Button';
import MoveSectionUp from '../components/MoveSectionUp';
import { Spinner, Alert } from 'react-bootstrap';

const ContactPage = () => {

    const [comment, setComment] = useState([]);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [isHidden, setIsHidden] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        retrieveData();
    }, []);

    const retrieveData = async () => {
        const { data } = await axios.get('/api/comment');
        setComment(data);        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.post('/api/createComment', { name, content });
            setName("");
            setContent("");
            setIsLoading(false);
            await retrieveData();
        } catch (error) {
            setIsLoading(false);
            if (error) {
                setError("请填写所有信息~！")                
            }
        }
    }

    const toggleForm = () => {
        setIsHidden(!isHidden);
    }

    const handleNameChange = (e) => {
        setError("");
        setName(e.target.value);
    }

    const handleContentChange = (e) => {
        setError("");
        setContent(e.target.value);
    }

    return (
        <div className="contact wrapper">
            <MoveSectionUp />
            <GettingMarried />
            <h3 className='text-center mb-4'>留言板</h3>
            <p className='text-center'>在此对所有因为疫情不能到场的亲友深表歉意。Ladies and乡亲们，请在这里尽情留下对我们的祝福吧！</p>
            <div className="comment-container">
                {comment.length > 0 ? comment.map((item, index) => {
                    return (
                        <Comment comment={item} key={item.createDate} position={index} />
                    )
                }) :
                    <div>写下你的留言和祝福吧~ 抢个沙发吧！</div>
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
                    {!isLoading ? <div className="d-flex justify-content-between">
                        <Button className="hide-btn" action={toggleForm}>隐藏</Button>
                        <Button className="submit-btn" action={handleSubmit}>提交</Button>
                    </div> : <div className="w-100 text-center mt-3"><Spinner animation="border" role="status" /></div>}
                </Form>
                {error !== "" && <Alert className="mt-4" variant='danger'>{error}</Alert>}
            </div>
                :
                <Button className="show-btn" action={toggleForm}>显示</Button>
            }
        </div>
    )
}

export default ContactPage;