const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String, 
            required: true,
            unique: true, 
        }, 
        email: {
            type: String, 
            required: true, 
            unique: true, 
        }
    }
)