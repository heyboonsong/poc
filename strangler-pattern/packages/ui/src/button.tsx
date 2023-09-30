interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
}
export function Button({ title, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-green-500 hover:bg-blue-700  text-white font-bold py-2 px-8 mx-2 rounded"
    >
      {title}
    </button>
  );
}
