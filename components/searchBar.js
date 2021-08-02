import Link from "next/link";
import { useCallback, useState } from "react";
import { search } from "../lib/movies";

const SEARCH_RES_SIZE = 5;

export default function SearchBar() {
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const onChange = useCallback(async (event) => {
    const query = event.target.value;

    if (query.length) {
      const response = await search(query);
      const results = response.results.slice(0, SEARCH_RES_SIZE);
      setResults(results);
    } else {
      setResults([]);
    }
  }, []);

  return (
    <div className="w-full px-3 lg:px-12 text-lg">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 w-full rounded-full bg-gray-200 outline-none focus:ring-2 ring-indigo-500"
        onChange={onChange}
      />
      <ul>
        {results.map(({ id, title }) => (
          <li key={id}>
            <Link href={`${id}`}>
              <a>
                <div>{title}</div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
