import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePostOrderMutation } from "../store/apis/orderApi";

const Success = () => {
  const [session, setSession] = useState({});
  const location = useLocation();
  const sessionId = location.search.replace("?session_id=", "");
  const [postOrder, result] = usePostOrderMutation();

  useEffect(() => {
    async function fetchSession() {
      const response = await fetch(
        "http://localhost:8000/checkout-session?sessionId=" + sessionId
      ).then((res) => res.json());
      postOrder({ items: response.metadata.items });
      setSession(response);
    }
    fetchSession();
    // postOrder({ products: session.metadata.items });
  }, [sessionId]);
  // if (Object.keys(session).length > 0) {
  //   postOrder({ products: session.metadata.items });
  // }

  return (
    <div className="sr-root">
      <div className="sr-main">
        <header className="sr-header">
          <div className="sr-header__logo"></div>
        </header>
        <div className="sr-payment-summary completed-view">
          <h1>Your payment succeeded</h1>
          <h4>View CheckoutSession response:</h4>
        </div>
        <div className="sr-section completed-view">
          <div className="sr-callout">
            <pre>{JSON.stringify(session, null, 2)}</pre>
          </div>
          <Link to="/">Restart demo</Link>
        </div>
      </div>
      <div className="sr-content">
        <div className="pasha-image-stack">
          <img
            alt=""
            src="https://picsum.photos/280/320?random=1"
            width="140"
            height="160"
          />
          <img
            alt=""
            src="https://picsum.photos/280/320?random=2"
            width="140"
            height="160"
          />
          <img
            alt=""
            src="https://picsum.photos/280/320?random=3"
            width="140"
            height="160"
          />
          <img
            alt=""
            src="https://picsum.photos/280/320?random=4"
            width="140"
            height="160"
          />
        </div>
      </div>
    </div>
  );
};

export default Success;
