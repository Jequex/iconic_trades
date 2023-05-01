const local = 'http://localhost:4000/api/v1';
const dev = 'https://iconic-trades-backend.herokuapp.com/api/v1';
const prod = '';

const current = 'local';

const inUse = current === 'dev' ? dev : 'local' ? local  : prod;

export const endPoints = {
  createAccountUrl: `${inUse}/users/user`,
  loginUrl: `${inUse}/users/loginUser`,
  googleLoginUrl: `${inUse}/users/googleAuth`,
  userSubscriptionsUrl: `${inUse}/payments/userSubscriptions`,
  verifyPaymentUrl: `${inUse}/payments/verifyPayment`,
};


