import React, { useState, useRef, useEffect } from "react";


// Implementation
//<Paypal price={10} description={'Descrition'} />

export default function PayPal(props) {
  const [paidFor, setPaidFor] = useState(false);
  const [loaded, setLoaded] = useState(false);


  let paypalRef = useRef();

  const product = {
    price: props.price,
    description: props.description
  };

  sessionStorage.setItem('purchaseCompleted', 'true')

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AdNhjT0uci2cwUCDVDi5fLNz0shPH5ALuzMWG1DqABu7ESmBWb6wm5E58AjYzMsxqLfwRHAzqLnHsaZa";
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(script);
    if (loaded) {
      setTimeout(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: product.description,
                    amount: {
                      currency_code: "USD",
                      value: product.price //
                    }
                  }
                ]
              });
            },

            onApprove: async (data, actions) => {
              await actions.order.capture();
              localStorage.setItem('isPaidFor', 'true');
              setPaidFor(true);           
            }
          })
          .render(paypalRef);
      });
    }
  });

  return (
    <div>
      {paidFor ? (
        <div>
          <h1>Thanks for the Moolay!</h1>
          
        </div>
      ) : (
        <div>
          <h1>Total: ${product.price}</h1>
          <div ref={v => (paypalRef = v)} />
        </div>
      )}
    </div>
  );
}