import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
// import { ImageIcon } from "@/components/ui/icons";

export default function Header() {
	return (
		<header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-accent text-accent-foreground">
			<Link href="/" className="flex items-center">
				<span className="font-bold">Imagely</span>
			</Link>
			<nav className="flex items-center gap-4 sm:gap-6">
				<ModeToggle />
				<Link
					href="/login"
				>
          <Button variant="outline">
            Login
          </Button>
				</Link>
			</nav>
		</header>
	);
}
