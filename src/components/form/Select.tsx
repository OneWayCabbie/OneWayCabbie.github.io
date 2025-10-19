import React from 'react';
import classNames from 'classnames';

interface Option {
  value: string;
  label: string;
}

interface Props {
  id?: string;
  label?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  error?: string;
  required?: boolean;
}

const SelectInput: React.FC<Props> = ({
  id,
  label,
  name,
  value,
  onChange,
  options,
  error,
  required,
}) => {
  return (
    <label className="relative flex flex-col">
      {label && (
        <div className="text-xs leading-none tracking-[-0.04em] text-appGray-500 mb-3 lg:text-xl lg:leading-none lg:mb-6">
          {label}
        </div>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={classNames(
          'border rounded-lg px-5 py-[13px] text-sm leading-none tracking-[-0.04em] text-appGray-600 bg-[#FAFAFA] transition-colors duration-300 placeholder:text-appGray-600 focus:outline-none lg:px-5 lg:py-4 lg:text-2xl lg:leading-none appearance-none',
          error ? 'border-red-500' : 'border-transparent',
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectInput;