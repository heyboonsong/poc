interface dataSource {
  description: string;
  done: boolean;
}

interface TableProps {
  dataSource: dataSource[];
  onStatusChange: (index: number) => void;
}

export function Table({ dataSource, onStatusChange }: TableProps) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {dataSource.map((data, index) => (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div
                className="flex items-center justify-start cursor-pointer"
                onClick={() => {
                  onStatusChange(index);
                }}
              >
                <span
                  className={`w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink ${
                    data.done ? "bg-green-400" : "bg-gray-100"
                  }`}
                >
                  {data.done ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 p-1 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </th>
            <td className={`px-6 py-4 ${data.done ? "line-through" : ""}`}>
              {data.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
