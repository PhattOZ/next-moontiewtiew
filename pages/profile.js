import SideBar from "../components/sidebar";

export default function Profile() {
  return (
    <div className="flex items-center">
      <SideBar />

      <div className="text-center flex justify-center">
        <div className="w-2/3">
          some Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          ab quam facilis corrupti nam, fugit, enim neque laboriosam nesciunt
          ratione praesentium? Adipisci ratione nulla reiciendis hic enim! Quam,
          tempore error?
        </div>
      </div>
    </div>
  );
}
