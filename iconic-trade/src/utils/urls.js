const local = 'http://localhost:4000/api/v1';
const dev = 'https://iconic-trades-backend.herokuapp.com/api/v1';
const prod = '';

const current = 'local';

const inUse = current === 'dev' ? dev : 'local' ? local  : prod;

export const endPoints = {
  createAccountUrl: `/api/v1/users/user`,
  loginUrl: `/api/v1/users/loginUser`,
  googleLoginUrl: `/api/v1/users/googleAuth`,
  userSubscriptionsUrl: `/api/v1/payments/userSubscriptions`,
  verifyPaymentUrl: `/api/v1/payments/verifyPayment`,
};


