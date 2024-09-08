import Link from "next/link";
// import { ImageIcon } from "@/components/ui/icons";

export default function Header() {
	return (
		<header className="bg-background px-4 lg:px-6 h-14 flex items-center justify-between">
			<Link href="#" className="flex items-center">
				<span className="font-bold">Imagely</span>
			</Link>
			<nav className="flex items-center gap-4 sm:gap-6">
				<Link
					href="#"
					className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4"
				>
					Login
				</Link>
			</nav>
		</header>
	);
}
