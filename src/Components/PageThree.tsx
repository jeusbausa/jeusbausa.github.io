/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Ref, useEffect, useState } from "react";
import { getRepos } from "../API/Ocktokit";
import { Fade, Slide } from "react-awesome-reveal";
import moment from "moment";
import Stars from "./Icons/Stars";
import classNames from "classnames";
import Paragraph from "./Loaders/Paragraph";
import _ from "lodash";

const PageThree: React.FC<{ ref: Ref<HTMLDivElement> }> = React.forwardRef((_props, ref): JSX.Element => {
    const [repos, setRepos] = useState<Array<any>>([]);
    const [filter, setFilter] = useState<{
        page: number;
        per_page: number;
    }>({ page: 1, per_page: 5 });
    const [loading, setLoading] = useState<boolean>(false);
    const [isReposEmpty, setIsReposEmpty] = useState<boolean>(false);
    const handleFilter = (value: number, key: string) => {
        setFilter((filter: any) => ({
            ...filter,
            [key]: value,
        }));
    };

    useEffect(() => {
        setLoading(true);
        getRepos({ ...filter }).then((data) => {
            if (!_.isEmpty(data)) {
                setRepos(data);
                setIsReposEmpty(false);
            } else {
                setIsReposEmpty(true);
            }
            setLoading(false);
        });
    }, [filter]);

    return (
        <div ref={ref} className="xl:max-w-4xl xss:max-w-full xss:flex-col text-white pb-32">
            <div className="font-poppins app font-bold text-5xl mb-10">Some of my github repositories.</div>
            <div className="space-y-2">
                {loading ? (
                    <Paragraph rows={5} />
                ) : (
                    repos.map((repo, i) => (
                        <Fade key={i}>
                            <Slide duration={500} direction="right" cascade>
                                <div className="bg-bgCard md:max-w-2xl p-2 rounded-lg">
                                    <div className="flex space-x-2">
                                        <img className="w-5 h-5 rounded-full" src={repo.owner.avatar_url} alt={repo.owner.avatar_ur} />
                                        <div className="flex justify-evenly items-center text-md mb-2 font-bold">
                                            <div>{repo.name}</div>
                                            <Stars count={repo.stargazers_count} />
                                        </div>
                                    </div>
                                    <div className="text-sm mb-2">{repo.description}</div>
                                    <div className="text-xs mb-6">{repo.language}</div>
                                    <div className="italic text-[10px]">Last Commit: {moment(repo.pushed_at).format("MMMM D, y hh:mm a")}</div>
                                </div>
                            </Slide>
                        </Fade>
                    ))
                )}
                {repos.length < 1 && <div className="text-bold text-xl py-6">Unable to load repositories, please try again later. :(</div>}
                <nav>
                    <ul className="inline-flex py-6 space-x-px text-sm">
                        <li>
                            <button
                                onClick={() => handleFilter(filter.page > 1 ? filter.page - 1 : 1, "page")}
                                className={classNames(
                                    "flex items-center justify-center px-3 h-8 ml-0 leading-tight text-bgCard  border rounded-l-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                                    { "cursor-not-allowed": filter.page < 2 },
                                )}
                                disabled={filter.page < 2}
                            >
                                Previous
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleFilter(filter.page + 1, "page")}
                                className={classNames(
                                    "flex items-center justify-center px-3 h-8 ml-0 leading-tight text-bgCard  border rounded-r-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                                    { "cursor-not-allowed": isReposEmpty },
                                )}
                                disabled={isReposEmpty}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
});

export default PageThree;
