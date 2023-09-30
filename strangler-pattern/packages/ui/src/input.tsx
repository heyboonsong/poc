interface InputProps {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => any;
  value: string;
  required?: boolean;
}
export function Input({ value, onChange,required=false }: InputProps) {
  return (
    <input
      className="border border-gray-300 rounded-md w-full  py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      type="text"
      required={required}
      value={value}
      onChange={onChange}
    />
  );
}
