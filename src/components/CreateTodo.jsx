import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

export const CreateTodo = () => {
    const [data, setData] = useState({ title: "", note: "" });
    const navigate = useNavigate();

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/todo", data)
            .then((res) => {
                setData({ title: "", note: "" , link: "", iconUrl: ""});
                navigate("/");
            })
            .catch((err) => {
                console.log("Error couldn't create TODO");
                console.log(err.message);
            });
    }

    return (
        <section className="container">
            <section className="contents">
                <form
                    onSubmit={handleSubmit}
                    className="form-container"
                    noValidate
                >
                    <label className="label" htmlFor="title">
                        Title
                    </label>
                    <input
                        placeholder="enter your title here"
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        className="input"
                    />
                    <label className="label" htmlFor="note">
                        Note
                    </label>
                    <input
                        placeholder="describe your title here"
                        type="text"
                        name="note"
                        value={data.note}
                        onChange={handleChange}
                        className="input"
                    />
                    <label className="label" htmlFor="note">
                        Link
                    </label>
                    <input
                        placeholder="Enter your link here"
                        type="text"
                        name="link"
                        value={data.link}
                        onChange={handleChange}
                        className="input"
                    />
                    <label className="label" htmlFor="note">
                        Icon URL
                    </label>
                    <input
                        placeholder="enter your Icon Url here"
                        type="text"
                        name="iconUrl"
                        value={data.iconUrl}
                        onChange={handleChange}
                        className="input"
                    />
                    <button type="submit" className="button-blue">
                        create todo
                    </button>
                    <Link to="/" className="button-back">
                        <button type="button" className="button-back">
                            back
                        </button>
                    </Link>
                </form>
            </section>
        </section>
    );
}