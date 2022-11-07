const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId, 
            default: () => new Types.ObjectId(),
        }, 
        reactionBody: {
            type: String, 
            required: true,
            maxlength: 300, 
        }
    }
)