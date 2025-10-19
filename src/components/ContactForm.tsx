import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import TextInput from './form/Text';

interface Props {
    onClose: () => void;
}

const ContactForm: React.FC<Props> = ({ onClose }) => {
    const [state, handleSubmit] = useForm('xgvnqoaz');

    if (state.succeeded) {
        return (
            <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="relative z-10 bg-white rounded-2xl border border-[#D4D4D4] p-6 w-[736px] max-w-[95vw] text-center lg:p-10">
                    <h2 className="text-2xl font-medium text-appGray-600 mb-4 lg:text-3xl">
                        Thank you for your message!
                    </h2>
                    <p className="text-appGray-500 mb-6 lg:text-xl">
                        We've received your request and will get back to you shortly.
                    </p>
                    <button
                        className="flex justify-center w-full p-[17px] rounded-lg bg-[#7EE984] text-sm leading-none font-medium tracking-[-0.04em] text-appGray-600 lg:p-5 lg:text-2xl lg:leading-none"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
                <div
                    className="absolute top-0 left-0 w-full h-full cursor-pointer bg-[#171717B2]"
                    onClick={onClose}
                />
            </div>
        );
    }

    return (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="relative z-10 bg-white rounded-2xl border border-[#D4D4D4] p-6 w-[736px] max-w-[95vw] max-h-[90vh] overflow-y-auto overscroll-contain lg:p-10">
                <form
                    className="grid grid-cols-1 gap-4 lg:gap-10"
                    onSubmit={handleSubmit}
                >
                    <TextInput
                        id="name"
                        name="name"
                        label="Name *"
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />

                    <TextInput
                        id="mobile"
                        name="mobile"
                        label="Mobile Number *"
                        type="tel"
                        placeholder="Enter your mobile number"
                        required
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                    />
                    <ValidationError
                        prefix="Mobile"
                        field="mobile"
                        errors={state.errors}
                    />

                    <TextInput
                        id="email"
                        name="email"
                        label="Email *"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <label className="relative flex flex-col">
                        <div className="text-xs leading-none tracking-[-0.04em] text-appGray-500 mb-3 lg:text-xl lg:leading-none lg:mb-6">
                            Type of Query
                        </div>
                        <select
                            id="query"
                            name="query"
                            required
                            className="border rounded-lg px-5 py-[13px] text-sm leading-none tracking-[-0.04em] text-appGray-600 bg-[#FAFAFA] transition-colors duration-300 placeholder:text-appGray-600 focus:outline-none lg:px-5 lg:py-4 lg:text-2xl lg:leading-none appearance-none"
                        >
                            <option value="" disabled selected>
                                Select the type of query
                            </option>
                            <option value="Book a One Way Trip">Book a One Way Trip</option>
                            <option value="Round Trip / Return Booking">Round Trip / Return Booking</option>
                            <option value="Custom Trip / Custom Route Request">Custom Trip / Custom Route Request</option>
                            <option value="Fare & Route Inquiry">Fare & Route Inquiry</option>
                            <option value="Corporate / Bulk Booking">Corporate / Bulk Booking</option>
                        </select>
                    </label>
                    <ValidationError
                        prefix="Query"
                        field="query"
                        errors={state.errors}
                    />

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="flex justify-center w-full p-[17px] rounded-lg bg-[#7EE984] text-sm leading-none font-medium tracking-[-0.04em] text-appGray-600 disabled:bg-appGray-300 disabled:cursor-not-allowed lg:p-5 lg:text-2xl lg:leading-none"
                    >
                        {state.submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
            <div
                className="absolute top-0 left-0 w-full h-full cursor-pointer bg-[#171717B2]"
                onClick={onClose}
            />
        </div>
    );
};

export default ContactForm;
