import bcrypt from 'bcriptjs';
import jwt from 'jsonwebtoken';

import user from "../models/user.js";

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: 'User does not exist' });
        } 

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        // if user exists and password is correct
        const token = jwt.sign({
            email: existingUser.email,
            id: existingUser._id,
        }, 'testSecretString', { expiresIn: '1h' });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        // console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        } 

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // create user
        const result = await User.create({
            email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`
        });

        const token = jwt.sign({
            email: result.email,
            id: result._id,
        }, 'testSecretString', { expiresIn: '1h' });

        // return user
        res.status(200).json({ result: result, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}