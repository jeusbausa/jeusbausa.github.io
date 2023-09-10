/* eslint-disable @typescript-eslint/no-explicit-any */
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: atob(import.meta.env.VITE_GH_TOKEN),
});

export const getRepos = async (options: any): Promise<Array<any>> => {
    try {
        const { data } = await octokit.request("GET /user/repos", { ...options, sort: "pushed" });
        return data;
    } catch (error) {
        console.error("unable to load github octokit");
        throw error;
    }
};
