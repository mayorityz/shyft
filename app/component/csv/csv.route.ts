import { Router } from "express";
import { FetchFromFile } from "./csv.controller";

const CsvRoute = () => {
    const router = Router();
    router.get("/read-csv/:keyword", FetchFromFile);
    router.post("/read-csv/:keyword", FetchFromFile);

    return router
}

export default CsvRoute