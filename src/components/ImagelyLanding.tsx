import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";

export default function ImagelyLanding() {
	return (
		<div className="flex flex-col overflow-x-hidden min-h-[100dvh]">
			<main className="flex-1">
				<Hero />
				<Testimonials />
				<Features />
			</main>
		</div>
	);
}
