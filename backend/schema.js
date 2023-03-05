const mongoose = require('mongoose');

const TodoListSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        link: {
            type: String,
        },
        iconUrl: {
            type: String,
        },
        note: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const TodoListModel = mongoose.model('TodoList', TodoListSchema);
module.exports = TodoListModel;