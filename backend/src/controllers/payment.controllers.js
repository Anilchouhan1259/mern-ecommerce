const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const YOUR_DOMAIN = "http://localhost:3000";
const cartModel = require("../models/cart.model");
async function getSessionData(req, res) {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
}

async function webhookHandler(request, response) {
  const event = request.body;

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    case "payment_method.attached":
      const paymentMethod = event.data.object;
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  response.json({ received: true });
}
async function checkOutSession(req, res) {
  const { userId, addressInd } = req.body;
  const cartData = await cartModel.findOne({ userId }).select("products -_id");
  const products = cartData.products;
  const lineItem = products.map((product) => {
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: product.title,
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    };
  });
  const metaData = products.map((product) => {
    return {
      skuId: product.skuId,
      quantity: product.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItem,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    metadata: {
      items: JSON.stringify(metaData),
      ind: JSON.stringify(addressInd),
    },
  });

  res.json({ id: session.id });
}

module.exports = { checkOutSession, getSessionData, webhookHandler };
