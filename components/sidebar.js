import { useRouter } from "next/router";
import Link from "next/link";

const CustomLink = ({ href, label }) => {
  const router = useRouter();
  const style = router.pathname === href ? `text-indigo-500` : ``;

  return (
    <Link href={href}>
      <a className={style}>{label}</a>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <div className="w-1/6 bg-gray-200">
      <ul className="py-4">
        <li className="py-2">
          <CustomLink href="/movies/upcomings" label="Upcoming" />
        </li>
        <li className="py-2">
          <CustomLink href="/movies/populars" label="Most popular" />
        </li>
        <li className="py-2">
          <CustomLink href="/movies/top-rated" label="Top chart" />
        </li>
      </ul>
    </div>
  );
}
