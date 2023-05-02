const local = 'http://localhost:4000/api/v1';
const dev = 'https://iconic-trades-backend.herokuapp.com/api/v1';
const prod = '';

const current = 'local';

const inUse = current === 'dev' ? dev : 'local' ? local  : prod;

export const endPoints = {
  createAccountUrl: `/api/users/user`,
  loginUrl: `/api/users/loginUser`,
  googleLoginUrl: `${inUse}/users/googleAuth`,
  userSubscriptionsUrl: `/api/payments/userSubscriptions`,
  verifyPaymentUrl: `${inUse}/payments/verifyPayment`,
};


