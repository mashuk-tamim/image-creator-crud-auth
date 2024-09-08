"use client";
import React from "react";
import Image from "next/image";
import loginBg from "@/assets/images/loginBg.png";
import LoginForm from "./LoginForm";

export default function Page() {
	return (
		<main className="w-full mx-auto rounded-none md:rounded-2xl px-4 md:px-8 shadow-input bg-white dark:bg-black">
			<div className="flex items-center gap-10">
				<div className="w-[50%] flex justify-center items-center">
					<Image src={loginBg} alt="login background" className="w-[80%]" />
				</div>
				<div className="w-[40%] h-full flex flex-col p-10">
					<h2 className="font-bold text-4xl bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-50% inline-block text-transparent bg-clip-text ">
						Welcome to Imagely
					</h2>
					<LoginForm />
				</div>
			</div>
		</main>
	);
}
