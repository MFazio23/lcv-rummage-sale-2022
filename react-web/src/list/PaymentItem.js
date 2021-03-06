import React from "react";

const PaymentItem = props => (
    <div>
        <img src={props.logoUrl} alt={`${props.name} logo`}
             className={props.isEnabled ? 'payment-item' : `payment-item disabled ${props.name}-logo`}/>
    </div>
);

export default PaymentItem;