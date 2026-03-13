import jwt from 'jsonwebtoken';
import User from '../models/User.js';


// Generate jwt token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });
}

// @desc    Register a new user
// @route   POST /api/auth/register
export const register = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
}

// @desc    Login user
// @route   POST /api/auth/login
export const login = async (req, res, next) => {
    try { } catch (error) {
        next(error);
    }
}

// @desc    Get user profile
// @route   GET /api/auth/profile
export const getProfile = async (req, res, next) => {
    try { } catch (error) {

        next(error);
    }
}

// @desc    Update user profile
// @route   PUT /api/auth/profile
export const updateProfile = async (req, res, next) => {
    try { } catch (error) {
        next(error);
    }
}

// @desc    Change user password
// @route   POST /api/auth/change-password
export const changePassword = async (req, res, next) => {
    try { } catch (error) {
        next(error);
    }
}

