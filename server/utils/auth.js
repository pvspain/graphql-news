import jwt from 'jsonwebtoken';

const secret = 'samplejwtauthgraphql';

export const createToken = async (email, password, collection) => {
  if (!email || !password) return false;

  const user = await collection.findOne({ email });
  if (user.email === email.toLowerCase() && user.password.toLowerCase() === password) {
    const payload = {
      username: user.email,
    };
    const token = jwt.sign(payload, secret, {
      expiresIn: '3d',
    });
    return token;
  }
  return false;
};

export const verifyToken = (token, collection) => {
  const [prefix, payload] = token.split(' ');
  console.log(token);

  let user = null;

  if (!payload) throw new Error('No token provided');

  if (prefix !== 'bearer') throw new Error('Invalid header format');

  jwt.verify(payload, secret, async (err, data) => {
    if (err) throw new Error('Invalid token!');

    user = await collection.findOne({ email: data.username });
  });

  if (!user) throw new Error('User does not exist');

  return user;
};
