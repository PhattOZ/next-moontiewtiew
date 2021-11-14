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
    <div className="w-1/6 bg-gray-200 sticky top-0 h-screen">
      <ul className="p-3 overflow-hidden flex flex-col gap-y-6">
        <li>
          <CustomLink href="/movies/upcomings" label="Upcoming" />
        </li>
        <li>
          <CustomLink href="/movies/populars" label="Most popular" />
        </li>
        <li>
          <CustomLink href="/movies/top-rated" label="Top chart" />
        </li>
        <li>
          <CustomLink href="/profile" label="Profileeeeeeeeeeeeeeeeeeeeee" />
        </li>
        <li>
          <CustomLink href="/upload" label="upload file" />
        </li>
      </ul>
    </div>
  );
}
