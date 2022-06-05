import PaymentItem from "./PaymentItem";

const paymentOptions = {
    "cash": "/assets/money.png",
    "venmo": "/assets/venmo-icon.svg",
    "payPal": "/assets/paypal-logo.svg",
    "zelle": "/assets/zelle-logo.png"
};

function PaymentItems(props) {
    return (Object.entries(paymentOptions).map(([name, logoUrl]) => {
        const isEnabled = props.paymentOptions[name] || false;
        return <PaymentItem key={name} name={name} logoUrl={logoUrl} isEnabled={isEnabled}/>
    }))
}

export default PaymentItems;