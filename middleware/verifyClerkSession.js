var { Clerk } = require('@clerk/clerk-sdk-node');
const clerk = Clerk(process.env.CLERK_API_KEY);

var { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

module.exports = {
    verifyClerkSession
};

async function verifyClerkSession(req, res, next) {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No authorization token found' });
    }

    // console.log('Token:', token);

    // // Verify the session token and retrieve the session object
    // const session = await clerk.sessions.verifyToken(token);

    // // Attach the Clerk user ID to the request object
    // req.clerkUserId = session.userId;

    next();
  } catch (error) {
    console.error('Session verification failed:', error);
    res.status(401).json({ error: 'Session verification failed' });
  }
}

