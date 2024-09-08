import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function ImagelyLanding() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<Header />
			<main className="flex-1">
				<Hero />
				<Testimonials />
				<Features />
			</main>
			<Footer />
		</div>
	);
}
