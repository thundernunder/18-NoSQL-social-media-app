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

thoughtSchema.virtuals("totalReactions").get(() => {
    return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;