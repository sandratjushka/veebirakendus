import { Request, Response, Router } from "express";
import axios from "axios";

const router: Router = Router();

router.get("/nord-pool-price/:country/:start/:end", async (req: Request, res: Response) => {
  const response = await axios.get(
    "https://dashboard.elering.ee/api/nps/price?start="+req.params.start+"&end="+req.params.end
  );
  switch(req.params.country) {
    case "ee":
      res.json(response.data.data.ee);
      break;
    case "lv":
      res.json(response.data.data.lv);
      break;
    case "lt":
      res.json(response.data.data.lt);
      break;
    case "fi":
      res.json(response.data.data.fi);
      break;
    default:
      res.json([]);
  }
});

export default router;
