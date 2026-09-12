import { forwardRef, type InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

// The standard shadcn input contract, using explicit Tailwind colors so this
// component does not require a global theme reset or additional dependencies.
const Input = forwardRef<HTMLInputElement, InputProps>(({ className = '', type, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={`flex h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
));
Input.displayName = 'Input';

export { Input };
