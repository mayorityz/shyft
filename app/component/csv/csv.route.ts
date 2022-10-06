import { Router } from "express";
import { RepoDetails } from "./github.controller";

const GithubRoute = () => {
    const router = Router();
    router.get("/read-repo/:org/:repo", RepoDetails);

    return router
}

export default GithubRoute