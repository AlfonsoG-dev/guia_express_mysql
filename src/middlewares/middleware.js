// Custom Symbol for the authentication token key
const authTokenSymbol = Symbol('authToken');

// Mock user data (replace this with your real user database)
const users = [
    {id: 1, username: 'user1', password: 'password1'},
    {id: 2, username: 'user2', password: 'password2'},
];

// Authentication middleware
const authenticate = (req, res, next) => {
    // Check for the authentication token in the request headers or cookies
    const token = req.headers.authorization || req.cookies.authToken;

    // Check if the token is valid (you would typically verify the token against your user database)
    // For this example, we'll simply check if the token is "valid-token"
    if (token === 'valid-token') {
        // If the token is valid, attach the user object to the request using the Symbol
        req[authTokenSymbol] = {username: 'authenticatedUser'};
        next(); // Proceed to the next middleware or route handler
    } else {
        // If the token is invalid, return an error response
        res.status(401).json({error: 'Unauthorized'});
    }
};


