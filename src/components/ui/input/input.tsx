"use client";

import { type VariantProps, cva } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import {
	Children,
	type InputHTMLAttributes,
	ReactElement,
	type ReactNode,
	createContext,
	forwardRef,
	isValidElement,
	useCallback,
	useContext,
	useImperativeHandle,
	useRef,
	useState,
} from "react";

import { cn } from "@/lib/utils";
import * as styles from "./styles";
import { useMouseDown } from "./use-mouse-down";

/* UTILS */

// Any because Typescript cannot infer the type of the component
function findChildByType<T extends ReactElement>(
	children: ReactNode,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	type: T["type"],
	findAll = true
): ReactNode | undefined {
	const childrenArray = Children.toArray(children);
	const predicate = (child: ReactNode) =>
		isValidElement(child) && (child.type as keyof InputGroupChildren) === type;
	return findAll
		? childrenArray.filter(predicate)
		: childrenArray.find(predicate);
}

function contextExists(inputGroup: InputGroupValues) {
	const {
		hasInput,
		hasLeftAddon,
		hasRightAddon,
		hasLeftIcon,
		hasRightIcon,
		hasLeftElement,
		hasRightElement,
	} = inputGroup;
	if (
		hasInput ||
		hasLeftAddon ||
		hasRightAddon ||
		hasLeftIcon ||
		hasRightIcon ||
		hasLeftElement ||
		hasRightElement
	) {
		return true;
	}
	return false;
}

/* INPUT GROUP CONTEXT */

interface InputGroupValues extends VariantProps<typeof inputVariants> {
	hasInput: boolean;
	hasLeftAddon: boolean;
	hasRightAddon: boolean;
	hasLeftIcon: boolean;
	hasRightIcon: boolean;
	hasLeftElement?: boolean;
	hasRightElement?: boolean;
	ring?: RingType;
	setRing?: React.Dispatch<React.SetStateAction<RingType>>;
	inputRef?: React.MutableRefObject<HTMLInputElement | null>;
	containerRef?: React.MutableRefObject<HTMLDivElement | null>;
}

type RingType = "container" | "input" | "none";

const InputGroupContext = createContext<InputGroupValues>({
	hasInput: false,
	hasLeftAddon: false,
	hasRightAddon: false,
	hasLeftIcon: false,
	hasRightIcon: false,
	hasLeftElement: false,
	hasRightElement: false,
});

const InputGroupProvider = ({
	children,
	values,
}: {
	children: ReactNode;
	values: InputGroupValues;
}) => {
	const [ring, setRing] = useState<RingType>("none");

	const containerRef = useRef<HTMLDivElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	return (
		<InputGroupContext.Provider
			value={{
				...values,
				ring,
				setRing,
				inputRef,
				containerRef,
			}}
		>
			{children}
		</InputGroupContext.Provider>
	);
};

const useInputGroup = () => useContext(InputGroupContext);

/* INPUT GROUP */

interface InputGroupProps extends VariantProps<typeof inputVariants> {
	children: ReactNode;
	className?: string;
}

interface InputGroupChildren {
	InputLeftAddon: typeof InputLeftAddon;
	InputRightAddon: typeof InputRightAddon;
	InputLeftIcon: typeof InputLeftIcon;
	InputRightIcon: typeof InputRightIcon;
	InputLeftElement: typeof InputLeftElement;
	InputRightElement: typeof InputRightElement;
	Input: typeof Input;
}

export function InputGroup({
	children,
	size,
	variant,
	className,
}: InputGroupProps) {
	// Set child.type to any because Typescript cannot infer the type of the component
	const inputLeftAddon = findChildByType(children, InputLeftAddon);
	const inputRightAddon = findChildByType(children, InputRightAddon);
	const inputLeftIcon = findChildByType(children, InputLeftIcon);
	const inputRightIcon = findChildByType(children, InputRightIcon);
	const inputLeftElement = findChildByType(children, InputLeftElement);
	const inputRightElement = findChildByType(children, InputRightElement);
	const input = findChildByType(children, Input, false);

	return (
		<InputGroupProvider
			values={{
				size,
				variant,
				hasInput: !!input,
				hasLeftAddon: !!inputLeftAddon,
				hasRightAddon: !!inputRightAddon,
				hasLeftIcon: !!inputLeftIcon,
				hasRightIcon: !!inputRightIcon,
				hasLeftElement: !!inputLeftElement,
				hasRightElement: !!inputRightElement,
			}}
		>
			<InputGroupContainer className={className}>
				<div className="flex h-full items-center gap-2 empty:hidden">
					{inputLeftAddon}
					{inputLeftIcon}
					{inputLeftElement}
				</div>
				{input}
				<div className="flex h-full items-center gap-2 empty:hidden">
					{inputRightIcon}
					{inputRightAddon}
					{inputRightElement}
				</div>
			</InputGroupContainer>
		</InputGroupProvider>
	);
}

/* INPUT GROUP CONTAINER */

export const inputGroupContainerVariants = cva(
	[...styles.field, "relative flex gap-3 items-center py-0"],
	{
		variants: {
			size: {
				default: "h-10",
				sm: "h-8",
				lg: "h-12 text-base",
			},
			variant: {
				default: styles.def,
				success: styles.success,
				error: styles.error,
				warning: styles.warning,
			},
		},
		defaultVariants: {
			size: "default",
			variant: "default",
		},
	}
);

const InputGroupContainer = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	const { containerRef, inputRef, ring, size, variant } = useInputGroup();

	const handleDivClick = useCallback(() => {
		if (inputRef?.current) {
			inputRef.current.click();
		}
	}, [inputRef]);

	const handleDivFocus = useCallback(() => {
		if (inputRef?.current) {
			inputRef.current.focus();
		}
	}, [inputRef]);

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			ref={containerRef}
			onClick={handleDivClick}
			onFocus={handleDivFocus}
			className={cn(
				inputGroupContainerVariants({
					size,
					variant,
					className,
				}),
				ring === "input" && [
					styles.clickedFocusWithin,
					styles.clickedFocusVisible,
				]
			)}
		>
			{children}
		</div>
	);
};

/* INPUT LEFT ADDON */

interface InputAddonProps extends React.HTMLAttributes<HTMLSpanElement> {
	text: string;
}

export const InputLeftAddon = forwardRef<HTMLSpanElement, InputAddonProps>(
	({ text, className, ...rest }, ref) => {
		return (
			<span ref={ref} className={className} {...rest}>
				{text}
			</span>
		);
	}
);

InputLeftAddon.displayName = "InputLeftAddon";

InputGroup.InputLeftAddon = InputLeftAddon;

/* INPUT RIGHT ADDON */

export const InputRightAddon = forwardRef<HTMLSpanElement, InputAddonProps>(
	({ text, className, ...rest }, ref) => {
		return (
			<span ref={ref} className={className} {...rest}>
				{text}
			</span>
		);
	}
);

InputRightAddon.displayName = "InputRightAddon";

InputGroup.InputRightAddon = InputRightAddon;

/* INPUT LEFT ELEMENT */

interface InputElementProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export const InputLeftElement = forwardRef<HTMLDivElement, InputElementProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("flex items-center text-gray-11", className)}
				{...rest}
			>
				{children}
			</div>
		);
	}
);

InputLeftElement.displayName = "InputLeftElement";

InputGroup.InputLeftElement = InputLeftElement;

/* INPUT RIGHT ELEMENT */

export const InputRightElement = forwardRef<HTMLDivElement, InputElementProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("flex items-center text-gray-11", className)}
				{...rest}
			>
				{children}
			</div>
		);
	}
);

InputRightElement.displayName = "InputRightElement";

InputGroup.InputRightElement = InputRightElement;

/* INPUT LEFT ICON */

const iconVariants = cva(
	"pointer-events-none transition-all duration-100 ease-in-out text-gray-11",
	{
		variants: {
			size: {
				default: "w-5 h-5",
				sm: "w-4 h-4",
				lg: "w-6 h-6",
			},
		},
		defaultVariants: {
			size: "default",
		},
	}
);

interface IconProps extends React.HTMLAttributes<SVGElement> {
	icon: LucideIcon;
}

export const InputLeftIcon = ({ icon, className, ...rest }: IconProps) => {
	const { size } = useInputGroup();
	const Icon = icon;
	return <Icon {...rest} className={iconVariants({ size, className })} />;
};

InputGroup.InputLeftIcon = InputLeftIcon;

/* INPUT RIGHT ICON */

export const InputRightIcon = ({ icon, className, ...rest }: IconProps) => {
	const { size } = useInputGroup();
	const Icon = icon;
	return <Icon {...rest} className={iconVariants({ size, className })} />;
};

InputGroup.InputRightIcon = InputRightIcon;

/* INPUT */

export const inputVariants = cva(
	[
		...styles.field,
		"flex w-full",
		"file:border-0 file:bg-transparent file:text-sm",
	],
	{
		variants: {
			size: {
				default: "h-10",
				sm: "h-8 rounded-md",
				lg: "h-12 text-base",
			},
			variant: {
				default: styles.def,
				success: styles.success,
				error: styles.error,
				warning: styles.warning,
			},
		},
		defaultVariants: {
			size: "default",
			variant: "default",
		},
	}
);

export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
		VariantProps<typeof inputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ size, variant, className, onClick, onFocus, onKeyDown, ...props },
		forwardedRef
	) => {
		const inputGroup = useInputGroup();

		const ref = useRef<HTMLInputElement>(null);
		const isMouseDownRef = useMouseDown(inputGroup.containerRef || ref);
		useImperativeHandle(forwardedRef, () => ref.current as HTMLInputElement);

		const hasContext = contextExists(inputGroup);

		// Re-create the state changing ring for cases where the input does not have InputGroup as parent
		const [ring, setRing] = useState<RingType>("none");

		if (hasContext) {
			size = inputGroup.size;
			variant = inputGroup.variant;
		}

		const handleFocus = useCallback(
			(e: React.FocusEvent<HTMLInputElement, Element>) => {
				// Determine focus origin (tab/click/autofocus) using mousedown
				const ring = isMouseDownRef.current ? "input" : "container";
				const callback = inputGroup.setRing || setRing;
				callback(ring);
				onFocus?.(e);
			},
			[inputGroup.setRing, isMouseDownRef, onFocus]
		);

		const handleClick = useCallback(
			(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
				const callback = inputGroup.setRing || setRing;
				callback("input");
				onClick?.(e);
			},
			[inputGroup.setRing, onClick]
		);

		const handleKeyDown = useCallback(
			(e: React.KeyboardEvent<HTMLInputElement>) => {
				if (e.key === "Escape") {
					const callback = inputGroup.setRing || setRing;
					callback("none");
				}
				onKeyDown?.(e);
			},
			[onKeyDown, inputGroup]
		);

		return (
			<input
				className={cn(
					hasContext
						? [
								"flex w-full bg-background text-sm font-medium file:border-0 file:bg-transparent file:text-sm placeholder:text-gray-11 dark:bg-gray-2",
								"transition-all duration-100 ease-in-out",
								"appearance-none outline-none",
								className,
						  ]
						: [
								inputVariants({
									size,
									variant,
									className,
								}),
								ring === "input" && [
									styles.clickedFocusWithin,
									styles.clickedFocusVisible,
								],
						  ]
				)}
				onFocus={handleFocus}
				onClick={handleClick}
				onKeyDown={handleKeyDown}
				ref={inputGroup.inputRef || ref}
				{...props}
			/>
		);
	}
);

Input.displayName = "Input";

InputGroup.Input = Input;
