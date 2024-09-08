import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import banner from "@/app/assets/images/banner.png"

export default function Hero() {
	return (
		<section className="w-screen py-12 md:py-24 lg:py-32">
			<div className="container mx-auto px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
				<div className="space-y-4">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
						Create stunning images with AI
					</h1>
					<p className="text-muted-foreground md:text-xl">
						Imagely is an AI-powered image creation tool that helps you bring
						your ideas to life. Easily generate, edit, and customize images for
						your projects.
					</p>
					<div className="flex flex-col gap-2 min-[400px]:flex-row">
						<Link href="#">
							<Button variant="secondary">Get Started</Button>
						</Link>
						<Link href="#">
							<Button variant="outline">Learn more</Button>
						</Link>
					</div>
				</div>
				<Image
					src={banner}
					width={550}
					height={550}
					alt="Hero"
					className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
				/>
			</div>
		</section>
	);
}
