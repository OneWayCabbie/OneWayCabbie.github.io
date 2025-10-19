import React from 'react';
import classNames from 'classnames';

interface Props {
    id?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'tel' | 'textarea';
    error?: string;
    required?: boolean;
    pattern?: string;
    inputMode?: 'numeric' | 'text' | 'decimal' | 'email' | 'search' | 'tel' | 'url';
}

const TextInput: React.FC<Props> = ({
    id,
    label,
    name,
    placeholder,
    type = 'text',
    error,
    required,
    pattern,
    inputMode,
}) => {
    return (
        <label className="relative flex flex-col">
            {label && (
                <div className="text-xs leading-none tracking-[-0.04em] text-appGray-500 mb-3 lg:text-xl lg:leading-none lg:mb-6">
                    {label}
                </div>
            )}
            {type !== 'textarea' ? (
                <input
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={classNames(
                        'border rounded-lg px-5 py-[13px] text-sm leading-none tracking-[-0.04em] text-appGray-600 bg-[#FAFAFA] transition-colors duration-300 placeholder:text-appGray-600 focus:outline-none lg:px-5 lg:py-4 lg:text-2xl lg:leading-none',
                        error ? 'border-red-500' : 'border-transparent',
                    )}
                    required={required}
                    pattern={pattern}
                    inputMode={inputMode}
                />
            ) : (
                <textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className={classNames(
                        'border rounded-lg px-5 py-[13px] text-sm leading-none tracking-[-0.04em] text-appGray-600 bg-[#FAFAFA] transition-colors duration-300 placeholder:text-appGray-600 resize-none h-[110px] focus:outline-none lg:px-5 lg:py-4 lg:text-2xl lg:leading-none lg:h-[256px]',
                        error ? 'border-red-500' : 'border-transparent',
                    )}
                    required={required}
                />
            )}
        </label>
    );
};

export default TextInput;
