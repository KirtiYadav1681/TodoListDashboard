const express = require("express");
const router = express.Router();

const {
    getAllTodo,
    getAggregate,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
} = require("../controllers/todo");


router.post("/", postCreateTodo);

router.get("/", getAllTodo);

router.get("/agg",getAggregate);

router.put("/:id", putUpdateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;