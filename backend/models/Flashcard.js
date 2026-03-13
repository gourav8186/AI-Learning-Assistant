import mongoose from "mongoose";

const flashcardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    documentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document',
        required: true
    },
    cards: [
        {
            question: {
                type: String,
                required: [true, 'Please provide a question'],
                difficulty: {
                    type: String,
                    enum: ['easy', 'medium', 'hard'],
                    default: 'medium'
                },
                lastReviewed: {
                    type: Date,
                    default: null
                },
                reviewCount: {
                    type: Number,
                    default: 0
                },
                isStarred: {
                    type: Boolean,
                    default: false
                }
            },
        }
    ]
}, {
    timestamps: true
})

// Index for fastest retrieval of flashcards by user and document
flashcardSchema.index({ userId: 1, documentId: 1 }, { unique: true });

const Flashcard = mongoose.model('Flashcard', flashcardSchema);

export default Flashcard;