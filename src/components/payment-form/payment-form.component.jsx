import { CardElement } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component'

const PaymentForm = () => {
    return (
        <div>
            <CardElement></CardElement>
            <Button buttonType={BUTTON_TYPES_CLASSES.inverted}>Pay Now</Button>
        </div>
    )
}

export default PaymentForm;