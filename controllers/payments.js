const Payment = require("../models/payment");

require("dotenv").config();

const { SECRET_KEY } = process.env;

const {
  SERVER_ERROR,
  BAD_REQUEST,
  SUCCESS_MSG
} = require("../utils/constants");

exports.verifyPayment = async (req, res) => {
  try {
    const { reference } = req.body;
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: SECRET_KEY
      }
    })

    const dt = await response.json();
    const data = dt.data;
    const authorization = data.authorization;
    
    const paid = await Payment.findOne({
      reference: data.reference
    })

    if (!paid) {
      let newPayment = new Payment({
        user_id: req.user.user_id,
        status: data.status,
        reference: data.reference,
        amount: data.amount,
        paid_at: data.paid_at,
        created_at: data.created_at,
        channel: data.channel,
        currency: data.currency,
        plan: data.metadata.plan,
        fees: data.fees,
        authorization_code: authorization.authorization_code,
        last4: authorization.last4,
        card_type: authorization.card_type,
        bank: authorization.bank,
        country_code: authorization.country_code
      });

      await newPayment.save();
    }

    res.status(200).send({
      status: data.status,
      reference: data.reference,
      amount: data.amount / 100,
      paid_at: data.paid_at,
      currency: data.currency,
      plan: data.metadata.plan
    })
  } catch (error) {
    res.status(SERVER_ERROR.code).send(SERVER_ERROR.message);
  }
}

exports.getUserPayments = async (req, res) => {
  try {
  const user = req.user.user_id;

    const data = await Payment.find({ user_id: user });
    
    res.status(200).json(data);
  } catch (error) {
    res.status(SERVER_ERROR.code).send(SERVER_ERROR.message);
  }
}