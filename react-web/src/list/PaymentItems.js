import React from "react";
import PaymentItem from "./PaymentItem";

const paymentOptions = {
    "cash": "/assets/money.png",
    "venmo": "/assets/venmo-icon.svg",
    //"payPal": "/assets/paypal-logo.svg",
    //"zelle": "/assets/zelle-logo.png",
    "square": "/assets/square-logo.jpg",
    "googlePay": "/assets/google-pay-logo.jpg",
};

function PaymentItems(props) {
    return <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%"}}>
        {Object.entries(paymentOptions).map(([name, logoUrl]) => {
            const isEnabled = props.paymentOptions[name] || false;
            return <PaymentItem key={name} name={name} logoUrl={logoUrl} isEnabled={isEnabled}/>
        })}
    </div>
}

export default PaymentItems;