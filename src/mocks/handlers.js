import { rest } from "msw";
import data from "./data/data.json";

export const handlers = [
    rest.get("/paintings", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data))
    }),
    
    rest.get("/paintings/:painting", (req, res, ctx) => {
        const paintingPath = req.params.painting;

        const pos = data.map(painting => painting.pathName).indexOf(paintingPath);

        const response = {
            painitngData: data[pos], 
            nextPath:  pos + 1 === data.length ? "" : data[pos + 1].pathName,
            prevPath:  pos === 0 ? "" : data[pos - 1].pathName,
        }

        return res(ctx.status(200), ctx.json(response))
    }),
]