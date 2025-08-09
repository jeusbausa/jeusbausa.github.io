/* eslint-disable @typescript-eslint/no-explicit-any */

export const getRepos = async (options: any): Promise<Array<any>> => {
    try {
        const data = await fetch("https://octokit-repos-jeusbausa.up.railway.app/repos?" + new URLSearchParams(options));
        const res = await data.json();
        return res;
    } catch (error) {
        console.error("unable to load github octokit");
        throw error;
    }
};
