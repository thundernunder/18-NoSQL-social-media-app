const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtBody: {
            type: String, 
            maxlength: 300
        }, 
        createdAt: {
            type: Date, 
            default: Date.now, 
            // get: need to figure out
        }
    }
)