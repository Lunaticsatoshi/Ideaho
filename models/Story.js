const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'public',
        enum: ['public', 'private']
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', StorySchema);