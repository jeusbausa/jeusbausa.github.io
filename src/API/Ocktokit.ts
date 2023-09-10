/* eslint-disable @typescript-eslint/no-explicit-any */
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: "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",
});

export const getRepos = async (options: any): Promise<Array<any>> => {
    console.log(options);

    try {
        const { data } = await octokit.request("GET /user/repos", { ...options, sort: "pushed" });
        return data;
    } catch (error) {
        console.error("unable to load github octokit");
        throw error;
    }
};