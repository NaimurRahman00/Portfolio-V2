import { cn } from "@/lib/utils";
import {
    IconBrowser,
    IconBrowserCheck,
    IconBug,
    IconDeviceMobile,
    IconLayoutDashboard,
    IconLock,
    IconPlayerPlay,
    IconServer,
} from "@tabler/icons-react";
import { Cover } from "../ui/cover";

export function Service() {
    const features = [
        {
            title: "Front-End Development",
            description:
                "Crafting responsive, interactive, and user-friendly web interfaces.",
            icon: <IconLayoutDashboard size={24} />,
        },
        {
            title: "Backend Development",
            description:
                "Building secure, efficient, and scalable server-side applications.",
            icon: <IconServer size={24} />,
        },
        {
            title: "MERN Website",
            description:
                "Crafting seamless web experiences with MongoDB, Express, React, Node.",
            icon: <IconBrowser size={24} />,
        },
        {
            title: "Responsive Web Design",
            description: "Ensuring websites look great on all devices and screen sizes.",
            icon: <IconDeviceMobile size={24} />,
        },
        {
            title: "Single Page Applications",
            description:
                "Developing fast and interactive web apps using modern frameworks.",
            icon: <IconBrowserCheck size={24} />,
        },
        {
            title: "Bug Fixing & Optimization",
            description: "Diagnosing issues and improving performance for flawless websites.",
            icon: <IconBug size={24} />,
        },
        {
            title: "Authentication",
            description: "Implementing secure user login systems with Firebase.", //JWT and OAuth.
            icon: <IconLock size={24} />,
        },
        {
            title: "Interactive Animations",
            description:
                "Adding engaging animations for improved user interaction.",
            icon: <IconPlayerPlay size={24} />,
        },
    ];
    return (
        (<div className="mt-36">
            <div className="flex flex-col justify-center items-center">
                <h2 className="bg-clip-text text-transparent text-white text-xl md:text-4xl lg:text-5xl font-sans py-2 relative z-20 font-bold tracking-tight">
                    <Cover>My Services</Cover>
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-base text-neutral-700 dark:text-neutral-400 text-center mt-3">
                    I Provide You Quality of Service
                </p>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>)
    );
}

const Feature = ({
    title,
    description,
    icon,
    index
}) => {
    return (
        (<div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}>
            {index < 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div
                className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div
                    className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span
                    className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p
                className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>)
    );
};
