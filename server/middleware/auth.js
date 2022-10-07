import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        // check if token is valid
        const token = req.headers.authorization.split(" ")[1];
        // check if own token or google token
        const isCustomAuth = token.ength < 500;

        let decodedData;
        // user id if with own token
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, 'testSecretString');

            // know which user is logged in 
            req.userId = decodedData?.id
        } else {
            // user id with google token
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub; // sub is google's specific id to differentiate users
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;