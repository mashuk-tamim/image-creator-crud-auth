import { FilePenIcon, MagnetIcon, ShareIcon } from "lucide-react";
import Image from "next/image";
import ai from "@/assets/images/ai.avif"

export default function Features() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
				<div>
					<Image
						src={ai}
						width="550"
						height="310"
						alt="Features"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-top sm:w-full"
					/>
				</div>
				<div className="space-y-4">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Unleash your creativity with Imagely
					</h2>
					<p className="text-muted-foreground md:text-xl">
						Imagely offers a range of powerful features to help you create
						stunning visuals for your projects.
					</p>
					<ul className="grid gap-4">
						<li className="flex items-start gap-4">
							<div className="bg-primary text-primary-foreground rounded-full p-2">
								<MagnetIcon className="h-5 w-5" />
							</div>
							<div>
								<h3 className="text-lg font-semibold">
									AI-powered image generation
								</h3>
								<p className="text-muted-foreground">
									Easily create unique, high-quality images using advanced AI
									algorithms.
								</p>
							</div>
						</li>
						<li className="flex items-start gap-4">
							<div className="bg-primary text-primary-foreground rounded-full p-2">
								<FilePenIcon className="h-5 w-5" />
							</div>
							<div>
								<h3 className="text-lg font-semibold">
									Powerful editing tools
								</h3>
								<p className="text-muted-foreground">
									Refine and enhance your images with a suite of intuitive
									editing tools.
								</p>
							</div>
						</li>
						<li className="flex items-start gap-4">
							<div className="bg-primary text-primary-foreground rounded-full p-2">
								<ShareIcon className="h-5 w-5" />
							</div>
							<div>
								<h3 className="text-lg font-semibold">Seamless sharing</h3>
								<p className="text-muted-foreground">
									Easily share your creations with others or publish them
									online.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

