const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        }, 

        reactionBody: {
            type: String, 
            required: true,
            maxlength: 280
        }, 

        username: {
            type: String, 
            required: true
        },
        // dateCreated
    }, 

    {
        toJSON: {
            getters: true, 
        },
        id: false,
    }
);

const thoughtSchema = new Schema(
    {
        thoughtBody: {
            type: String, 
            minlength: 1,
            maxlength: 300
        }, 
        createdAt: {
            type: Date, 
            default: Date.now, 
            // get: need to figure out
        }, 
        username: {
            type: String,
            required: true,
        }, 
        userReactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true, 
        }, 
        id: false,
    }
);

thoughtSchema.virtual("totalReactions").get(() => {
    return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;