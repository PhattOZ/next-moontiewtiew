import { useState } from "react";

export default function ReviewForm({ movie_id }) {
  const contentType = "application/json";

  const [form, setForm] = useState({
    movie_id: movie_id,
    reviews: { user_id: "", review: "" },
  });

  const postData = async (form) => {
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(res.status);
      }
    } catch (error) {
      console.error("failed to post a review");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      reviews: { ...form.reviews, [name]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  };

  return (
    <form className="flex p-1" onSubmit={handleSubmit}>
      <div className="px-3">Profile pic</div>
      <div className="flex-grow">
        <div className="h-4/5">
          <input
            type="text"
            placeholder="user"
            onChange={handleChange}
            name="user_id"
          />
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
