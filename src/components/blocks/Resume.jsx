import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "../ui/cover";

export function Resume() {
    const data = [
        {
            title: "Experience",
            content: (
                <div className="flex flex-col gap-[30px]">
                    <div>
                        <h4 className="text-[#f4f4f4] text-3xl font-semibold">
                        <Cover>Course Duration</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">Jan, 2024 - Jun, 2024</span>
                        <p
                            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                            MERN Stack Development - Programming Hero
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-3xl font-semibold">
                            <Cover>Self Learning</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">July, 2024 - Present</span>
                        <p
                            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                            Documentation, Youtube and Others Platform
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "Education",
            content: (
                <div className="flex flex-col gap-[30px]">
                    <div>
                        <h4 className="text-[#f4f4f4] text-3xl font-semibold">
                            <Cover>Govt College</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">2018 - Present</span>
                        <p
                            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                            BSc in Mathematics
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-3xl font-semibold">
                            <Cover>Private Institute</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">2016 - 2018</span>
                        <p
                            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                            Science Background
                        </p>
                    </div>
                </div>
            ),
        }
    ];
    return (
        (<div className="w-full">
            <Timeline data={data} />
        </div>)
    );
}
