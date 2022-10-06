import { Request, Response } from "express";
import { Octokit } from "octokit";
import  "dotenv";

const octokit = new Octokit({ auth: process.env.github_token });
  
export const RepoDetails = async(req :Request , res:Response)=>{
    // ! todo
    // 1. organization/repo.
    // 2. return reponame, repo description & No. of stars.
    // 3. Extend to :
    //   - take in and return an array of repos 
    //   or
    //   - take in an organization name and retuns all their repos

try {
    let {org, repo} = req.params
    
    let response = await octokit.rest.repos.get({owner:org, repo})
    let get_repos = await octokit.request({method:"GET", url:`/orgs/${org}/repos`})

    let details = get_repos.data.map(repo=>{
        return {
            name:repo.name,
            full_name:repo.name,
            url:repo.url,
            stars:repo.stargazers_count,
            desc:repo.description
        }
    })

    res.status(200).json({
        status:response.status, 
        repo_name: repo, 
        repo_description: response?.data?.description, 
        stars:response?.data?.stargazers_count,
        org_repos: details
    })

    } catch (error) {
        res.status(400).json({
            status:error.status, 
            response:error.response,
            message:error.message})
    }
}