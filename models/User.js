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
        }, 
        thoughts: [
            {
                type: Schema.Types.ObjectId, 
                ref: "Thought", 
            }
        ], 
        friends: [
            {
                type: Schema.Types.ObjectId, 
                ref: "User",
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
    );

    userSchema.virtual("totalFriends").get(() => {
        return this.friends.length;
    });

    const User = model("User", userSchema);

    module.exports = User;