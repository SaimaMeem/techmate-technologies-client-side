import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const { _id, username, contact, email, total_price, total_quantity, part_name } = order;
    useEffect(() => {
        if (total_price) {
            fetch(`http://localhost:5000/create-payment-intent`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ total_price })
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.clientSecret) {
                        console.log(data);
                        setClientSecret(data.clientSecret);
                    }

                })
        }

    }, [total_price]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true);

        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: username,
                        email: email,

                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setSuccess('');
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent?.id);
            console.log(paymentIntent);
            setSuccess('Your payment is completed successfully!');

            //store payment on database
            const payment = {
                order: _id,
                transactionId: paymentIntent.id,
                part_name: part_name,
                name: username,
                email: email,
                contact: contact,
                price: total_price,
                quantity: total_quantity,

            }
            fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data)
                })
        }

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement className='mb-5'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {cardError && <p className='pt-2.5 font-semibold text-red-500 pb-5'>{cardError}</p>}
                <button data-mdb-ripple="true"
                    data-mdb-ripple-color="light" className="ml-auto mt-4 uppercase lg:mt-0 inline-block px-8 py-2.5 bg-pastel-green text-white font-bold text-sm leading-tight rounded shadow-md hover:bg-pastel-green-dark hover:shadow-lg focus:bg-pastel-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pastel-green-darker active:shadow-lg transition duration-150 ease-in-out disabled:bg-slate-600" type="submit" disabled={!stripe && !clientSecret}>
                    Pay
                </button>
            </form>

                {
                    success && <div className='text-green-500 pb-5'>
                        <p>{success}</p>
                        <p>Your transaction Id: <span className='font-bold text-black'>{transactionId}</span></p>
                    </div>
                }

        </div>
    );
};

export default CheckoutForm;