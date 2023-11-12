import Link from "next/link";

interface ItemForm {
  title: string;
  id: number;
  hearts: number;
}

export default function Item({ title, hearts, id }: ItemForm) {
  return (
    <Link
      href={`/items/${id}`}
      className="flex px-4 pt-5 cursor-pointer justify-between"
    >
      <div className="flex space-x-4">
        <div className="w-20 h-20 bg-gray-200" />
        <div className="pt-2 flex flex-col">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>
      <div className="flex">
        <div className="flex">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          <span>{hearts}</span>
        </div>
      </div>
    </Link>
  );
}
