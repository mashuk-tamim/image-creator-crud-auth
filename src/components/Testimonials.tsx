import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";
// import Image from "next/image";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Testimonials() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-accent-foreground">
			<div className="container mx-auto  px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							What our users say
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Hear from real people who have used Imagely to create amazing
							visuals for their projects.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<TestimonialCard
						name="Mashuk Tamim"
						role="Web Developer"
						content="Hear from real people who have used Imagely to create amazing
							visuals for their projects."
					/>
					<TestimonialCard
						name="Jane Doe"
						role="Creative Director"
						content='"Imagely has been a game-changer for my design workflow.
									The AI-powered tools make it easy to create stunning visuals
									in no time."'
					/>
				</div>
			</div>
		</section>
	);
}

interface TestimonialCardProps {
	name: string;
	role: string;
	content: string;
}

function TestimonialCard({ name, role, content }: TestimonialCardProps) {
	return (
		<Card className="p-5">
			<div className="flex flex-col justify-center space-y-4">
				<div className="">
					<CardHeader>
						<div className="flex items-center gap-2">
							<Avatar>
								<AvatarImage src="/placeholder-user.jpg" alt="User" />
								<AvatarFallback>
									{name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</AvatarFallback>
							</Avatar>
							<div>
								<CardTitle className="text-lg font-bold">{name}</CardTitle>
								<CardDescription className="text-sm text-muted-foreground">
									{role}
								</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent className="text-muted-foreground">{content}</CardContent>
					<CardFooter>
						<QuoteIcon className="h-6 w-6" />
					</CardFooter>
				</div>
			</div>
		</Card>
	);
}
