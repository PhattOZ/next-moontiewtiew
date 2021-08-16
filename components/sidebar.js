import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-1/6">
      <ul className="py-4">
        <li className="py-2">
          <Link href="/movies/upcomings">
            <a>Upcomings</a>
          </Link>
        </li>
        <li className="py-2">
          <Link href="/movies/populars">
            <a>Most popular</a>
          </Link>
        </li>
        <li className="py-2">
          <Link href="/movies/top-rated">
            <a>Top chart</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
