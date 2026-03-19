import mongoose from "mongoose";

const chunkSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Please provide content for the chunk'],
    },
    pageNumber: {
        type: Number,
        required: [true, 'Please provide the page number for the chunk'],
    },
    chunkIndex: {
        type: Number,
        required: true
    }
}, { _id: false });

const documentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: [true, 'Please provide a title for the document'],
        trim: true,
    },
    fileName: {
        type: String,
        required: [true, 'Please provide a file name for the document'],
    },
    filePath: {
        type: String,
        required: [true, 'Please provide a file path for the document'],
    },
    fileSize: {
        type: Number,
        required: true,
        min: 0
    },
    fileType: {
        type: String,
        required: [true, 'Please provide the file type for the document'],
    },
    extractedText: {
        type: String,
        default: null
    },
    chunks: [chunkSchema],
    lastAccessed: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['processing', 'ready', 'error'],
        default: 'processing'
    },
}, {
    timestamps: true
});

// Index
documentSchema.index({ userId: 1, createdAt: -1 });

const Document = mongoose.model('Document', documentSchema);

export default Document;