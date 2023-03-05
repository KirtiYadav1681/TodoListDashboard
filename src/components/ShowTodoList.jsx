import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


import { FaDotCircle } from 'react-icons/fa';
import { UpdateTodo } from "./UpdateTodo";

const TodoCard = ({ data, handleDelete, handleEdit }) => {
    const { _id, title, note, link, iconUrl } = data;

    return (
        <li key={_id}>
            <div className="title-description">
                <div style={{ display:'flex', flexDirection: 'row', alignItems: 'center' }}>
                    { iconUrl === undefined ? <FaDotCircle size={20}/> : <img style={{height: '20px', width: '20px'}} src={iconUrl} alt="icon" />}
                    <a className="link" href={link} target="_blank" rel="noreferrer">
                        <h3>{title}</h3>
                    </a>
                </div>
                <p style={{ margin: '5px 0 0 3rem', opacity: 0.8, fontSize: 20}}>{note}</p>
            </div>

            <div className="button-container">
                <button className="button-list" name={_id} onClick={handleEdit}>Edit</button>
                <button className="button-list" name={_id} onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
}

export const ShowTodoList = () => {
    const [id, setId] = useState("");
    const [todo, setTodo] = useState([]);
    const [open, setOpen] = useState(false); 
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/todo")
            .then((res) => {
                setTodo(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleEdit = (e) => {
        setId(e.target.name); 
        setOpen(true);
    }

    const handleUpdate = () => {
        setUpdate(!update);
    }

    const handleDelete = (e) => {
        axios.delete(`http://localhost:8000/api/todo/${e.target.name}`);

        setTodo((data) => {
            return data.filter((todo) => todo._id !== e.target.name);
        });
    }

    const handleClose = () => {
        setId("");
        setOpen(false);
    }

    return (
        <div className="app-contents">
        <section className="container">
            <Link to="/create-todo" className="button-new"> 
                <button className="button">New</button>
            </Link>
            <section className="contents">
                <h1>TODO LIST</h1>
                <ul className="list-container">
                    {todo.map((data) => (
                        <TodoCard data={data} handleDelete={handleDelete} handleEdit={handleEdit} />
                    ))}
                </ul>
            </section>
            {open ? (
                <section className="update-container">
                    <div className="update-contents">
                        <p onClick={handleClose} className="close">
                            &times;
                        </p>

                        <UpdateTodo
                            _id={id}
                            handleClose={handleClose}
                            handleUpdate={handleUpdate}
                        />
                    </div>
                </section>
            ) : (
                ""
            )}
        </section>
        </div>
    );
}