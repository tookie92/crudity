'use client';
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import clsx from "clsx";

interface InputProps{
    label: string;
    value?: string;
    id: string;
    type?: string;
    disabled?:boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
   
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    value,
    type = "text",
    disabled,
    required,
    register,
    errors,
}) => {
    return (
     <div className="flex flex-row gap-3 items-center">
        <label htmlFor={id} className="block ">{label}</label>
        <input 
        
        type={type} 
        id={id} 
        value={value}
        required={required} 
        {...register(id,{required})}
        className={clsx(`
        form-input
        block 
        w-full 
        rounded-md 
        border-0 
        py-1.5 
        text-gray-900 
        shadow-sm 
        ring-1 
        ring-inset 
        ring-gray-300 
        placeholder:text-gray-400 
        focus:ring-2 
        focus:ring-inset 
        focus:ring-sky-600 
        sm:text-sm 
        sm:leading-6`,
        errors[id] && 'focus:ring-rose-500',
        disabled && 'opacity-50 cursor-default'
        )}
        />
    </div>
    );
}
 
export default Input;