import { search } from "../../../lib/tmdbAPI";

export default async function Handler(req, res) {
  const { method } = req;

  const SEARCH_RES_SIZE = 5;

  switch (method) {
    case "GET":
      try {
        const response = await search(req.query.keyword);
        const results = response.results.slice(0, SEARCH_RES_SIZE);
        res.status(200).json({ success: true, data: results });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
