"use client";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import LoginButton from "./LoginButton";
import Link from "next/link";

import { Eye, EyeOff, LockIcon, User } from "lucide-react";
import {
	Input,
	InputGroup,
	InputLeftIcon,
	InputRightElement,
} from "@/components/ui/input";
import { LoginUser } from "../actions/auth";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [formState, formAction] = useFormState(LoginUser, {})
  console.log(formState);
	const formRef = useRef<HTMLFormElement>(null);
	const [show, setShow] = React.useState(false);
	const toggleShow = () => setShow(!show);
	return (
		<div>
			<form ref={formRef} className="my-8" action={formAction}>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="username">Username</Label>
					<InputGroup>
						<Input name="username" type="text" />
						<InputLeftIcon icon={User} />
					</InputGroup>
				</LabelInputContainer>
				{formState.errors?.username && (
					<p className="text-xs text-red-600">{formState.errors?.username}</p>
				)}
				<LabelInputContainer className="mb-8">
					<Label htmlFor="password">Password</Label>
					<InputGroup>
						<InputLeftIcon icon={LockIcon} />
						<Input
							name="password"
							type={show ? "text" : "password"}
							onClick={() => setShow(!show)}
						/>
						<InputRightElement onClick={toggleShow}>
							{show ? <EyeOff size={16} /> : <Eye size={16} />}
						</InputRightElement>
					</InputGroup>
				</LabelInputContainer>
				{formState.errors?.password && (
					<p className="text-xs text-red-600">{formState.errors?.password}</p>
				)}
				<LoginButton />
				<div className="text-center text-muted-foreground pt-2">
					Don&apos;t have an account?{" "}
					<Link href="#" className="underline" prefetch={false}>
						Sign up
					</Link>
				</div>
			</form>
		</div>
	);
}

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
