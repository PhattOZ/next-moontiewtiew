import { useState } from "react";

export default function ReviewForm() {
  const [form, setForm] = useState({
    user: "",
    review: "",
  });

  const postData = () => {
    console.log(form);
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <form className="flex p-1" onSubmit={handleSubmit}>
      <div className="px-3">Profile pic</div>
      <div className="flex-grow">
        <div className="h-4/5">
          <textarea
            type="text"
            className="w-full border-2 border-indigo-200 focus:border-indigo-500 outline-none rounded-md p-1 px-2"
            placeholder="Leave a review"
            rows={5}
            onChange={handleChange}
            name="review"
            required
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="p-1 rounded-md hover:bg-indigo-400"
        />
      </div>
    </form>
  );
}
