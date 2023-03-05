const TodoListModel = require('../schema');

// Create Todo
exports.postCreateTodo = async (req, res) => {
    await TodoListModel.create(req.body)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add todo", error: err.message })
        );
};

// Read Todos
exports.getAllTodo = (req, res) => {
    TodoListModel.find()
        .then((todo) => res.json(todo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Todo not found", error: err.message })
        );
};

// Read Todos by Date
exports.getAggregate = (req,res) => {
    TodoListModel.aggregate([
        {$group:
            {
              _id: 
                {
                  day: {$dayOfMonth: "$createdAt"},
                  month: {$month: "$createdAt"}, 
                  year: {$year: "$createdAt"}
                }, 
                count: {$sum: 1}
             }
           },
           {$sort: {count: 1}}
        ])
        .then((response) => res.json(response))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Aggregate Todo not found", error: err.message })
        );
}

// Update Todo
exports.putUpdateTodo = (req, res) => {
    TodoListModel.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update todo", error: err.message })
        );
};

// Delete Todo
exports.deleteTodo = (req, res) => {
    TodoListModel.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "todo deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};