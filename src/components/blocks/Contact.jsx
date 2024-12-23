"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Cover } from "../ui/cover";

export function Contact() {
    const [loadingMessage, setLoadingMessage] = useState({
        loading: false,
        message: '',
        success: false
    })
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (!formData?.firstName || !formData?.lastName || !formData?.email || !formData?.message) {
                setLoadingMessage({
                    loading: false,
                    message: 'Please fill all fields!',
                    success: false
                })
            } else {
                setLoadingMessage({
                    loading: false,
                    message: 'Success! Thanks for messaging.',
                    success: true
                })
            }
        } catch (error) {

        }
    };

    return (
        (<div
            className="max-w-3xl w-full mx-auto backdrop-blur-[18px] bg-[#11121617] z-20 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-4xl text-center text-neutral-800 dark:text-neutral-200">
                Reach me out through <Cover>Email</Cover>
            </h2>
            {loadingMessage?.message && <p className={`mt-5 text-[0.9rem] ${loadingMessage.success ? 'text-green-400' : 'text-red-400'}`}>*{loadingMessage?.message}</p>}
            <form className="my-8" onSubmit={handleSubmit}>
                <div
                    className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" name="firstName" value={formData?.firstName} onChange={handleChange} placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" name="lastName" value={formData?.lastName} onChange={handleChange} placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" value={formData?.email} onChange={handleChange} placeholder="projectmayhem@fc.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Enter your message</Label>
                    <textarea id="message" name="message" value={formData?.message} onChange={handleChange} placeholder="Write a message..." className="p-[10px] rounded outline-none border-none resize-none h-[140px] bg-zinc-800 text-white" />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-blue-800 to-blue-950 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit">
                    Submit
                    <BottomGradient />
                </button>
            </form>
        </div>)
    );
}

const BottomGradient = () => {
    return (<>
        <span
            className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        <span
            className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
    </>);
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        (<div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>)
    );
};
