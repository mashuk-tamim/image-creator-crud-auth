import Link from "next/link";

export default function Footer() {
	return (
		<footer className="p-6 md:py-12 w-full bg-accent text-accent-foreground">
			<div className="container max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-items-center gap-8 text-sm">
				<FooterColumn
					title="Imagely"
					links={["Home", "Features", "Pricing", "Contact"]}
				/>
				<FooterColumn
					title="Resources"
					links={["Blog", "Documentation", "Help Center", "Community"]}
				/>
				<FooterColumn
					title="Legal"
					links={["Terms of Service", "Privacy Policy", "Cookie Policy"]}
				/>
				<FooterColumn
					title="Company"
					links={["About Us", "Careers", "Press", "Partners"]}
				/>
				<FooterColumn
					title="Connect"
					links={["Twitter", "LinkedIn", "Instagram", "Discord"]}
				/>
			</div>
			<p className="text-xs text-center pt-5">
				Copyright &copy; {new Date().getFullYear()} - All rights reserved
			</p>
		</footer>
	);
}

interface FooterColumnProps {
	title: string;
	links: string[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
	return (
		<div className="grid gap-1">
			<h3 className="font-semibold">{title}</h3>
			{links.map((link) => (
				<Link key={link} href="#">
					{link}
				</Link>
			))}
		</div>
	);
}
