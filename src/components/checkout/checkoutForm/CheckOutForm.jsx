import React, { useState } from "react";
import Field from "./FormInputAndLabel";
import RadioBtn from './RadioInputs';
// import "@styles/checkout/checkoutForm/checkoutForm.css";

const CheckOutForm = () => {

    const [radioInput, setRadioInput] = useState(1);

    return (
        <form className="form">
            <span className="form__title">CHECKOUT</span>
            <span className="form__subtitle">Billing Details</span>
            <section className="form__section">
                <Field label="Name" placeholder="Alexei Ward" />
                <Field label="Email Address" placeholder="alexei@gmail.com" />
                <Field label="Phone Number" placeholder="+1 202-555-0136" />
            </section>

            <span className="form__subtitle">SHIPPING INFO</span>
            <div className="form__grid--extraMargin">
                <Field label="Address" placeholder="1137 Williams Avenue" />
            </div>
            <section className="form__section">
                <Field label="ZIP Code" placeholder="10001" />
                <Field label="City" placeholder="New York" />
                <Field label="Country" placeholder="United States" />
            </section>

            <span className="form__subtitle">PAYMENT DETAILS</span>
            <section className="form__section form__section--margin">
                <span className="form__payment">Payment Method</span>
                <div className="paymentMethod">
                    <div className={`paymentMethod__container ${radioInput === 1 && 'paymentMethod__container--border'}`}>
                        <RadioBtn setRadioInput={setRadioInput} name="e-Money" change={1} isItDefaultChecked={true} />
                    </div>
                    <div className={`paymentMethod__container ${radioInput === 2 && 'paymentMethod__container--border'}`}>
                        <RadioBtn setRadioInput={setRadioInput} name="Paypal" change={2} />
                    </div>
                </div>
            </section>
            <section className="form__section">
                {radioInput === 1 ? <>
                    <Field label="e-Money Number" placeholder="238521993" />
                    <Field label="e-Money PIN" placeholder="6891" />
                </> : <>
                    <Field label="E-mail" placeholder="mail@gmail.com" />
                    <Field label="Amount" placeholder="1500" />
                </>}
            </section>
        </form>
    );
};

export default CheckOutForm;
