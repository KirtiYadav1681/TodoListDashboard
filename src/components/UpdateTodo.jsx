import { useState } from "react";
import axios from "axios";

export function UpdateTodo({ _id, handleClose, handleEdited }) {
    const [data, setData] = useState({ title: "", note: "" });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios
            .put(`http://localhost:8000/api/todo/${_id}`, data)
            .then((res) => {
                setData({ title: "", note: "" });
            })
            .catch((err) => {
                console.log("Failed to update todo");
                console.log(err.message);
            });
    }

    return (
        <form
            className="form-container"
            onSubmit={(e) => {
                handleSubmit(e);
                handleEdited();
                handleClose();
            }}
        >
            <label htmlFor="title" className="label">
                Title
            </label>
            <input
                type="text"
                name="title"
                className="input"
                onChange={handleChange}
            />
            <label htmlFor="note" className="label">
                Note
            </label>
            <input
                type="text"
                name="note"
                className="input"
                onChange={handleChange}
            />
            <button type="submit" className="button-blue">
                Submit
            </button>
        </form>
    );
}