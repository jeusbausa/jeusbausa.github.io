import _ from "lodash";
import React from "react";

const Paragraph: React.FC<{ rows: number }> = ({ rows = 1 }): JSX.Element => {
    return (
        <React.Fragment>
            {_.times(rows).map(() => (
                <div className=" border-bgCard-100 bg-bgCard opacity-70  rounded-md p-4 max-w-2xl">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-white h-4 w-4"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-white rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-white rounded col-span-2"></div>
                                    <div className="h-2 bg-white rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-white rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};

export default Paragraph;
