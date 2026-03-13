import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
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
    title: {
        type: String,
        required: [true, 'Please provide a title for the quiz'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    questions: [
        {
            question: {
                type: String,
                required: [true, 'Please provide a question'],
            },
            options: {
                type: [String],
                required: [true, 'Please provide options for the question'],
                validate: [array => array.length >= 4, 'Please provide at least 2 options']
            },
            correctAnswer: {
                type: String,
                required: [true, 'Please provide the correct answer for the question']
            },
            explanation: {
                type: String,
                default: null
            },
            difficulty: {
                type: String,
                enum: ['easy', 'medium', 'hard'],
                default: 'medium'
            }
        }
    ],
    userAnswers: [{
        questionIndex: {
            type: Number,
            required: true
        },
        selectedAnswer: {
            type: String,
            required: true
        },
        isCorrect: {
            type: Boolean,
            required: true
        },
        answeredAt: {
            type: Date,
            default: Date.now
        },
    }],
    score: {
        type: Number,
        default: 0
    },
    totalQuestions: {
        type: Number,
        default: 0
    },
    completedAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});

// Index for faster retrieval of quizzes by user and document
quizSchema.index({ userId: 1, documentId: 1 });

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;