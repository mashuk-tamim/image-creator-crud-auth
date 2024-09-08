export default function Features() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
							Features that make Imagely stand out
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Discover the powerful features that make Imagely the ultimate
							AI-powered image creation tool.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<div className="flex flex-col justify-center space-y-4">
						<FeatureItem
							title="AI-Powered Generation"
							description="Generate stunning images from scratch using advanced AI models."
						/>
						<FeatureItem
							title="Seamless Editing"
							description="Easily edit and customize your images with a wide range of tools and filters."
						/>
						<FeatureItem
							title="Collaboration Features"
							description="Invite team members to collaborate on your projects and provide feedback."
						/>
					</div>
					<div className="flex flex-col justify-center space-y-4">
						<FeatureItem
							title="Intelligent Templates"
							description="Choose from a library of pre-designed templates to kickstart your projects."
						/>
						<FeatureItem
							title="Seamless Integration"
							description="Integrate Imagely with your favorite tools and workflows for a streamlined experience."
						/>
						<FeatureItem
							title="Powerful Analytics"
							description="Track the performance of your images and gain insights to improve your content."
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

interface FeatureItemProps {
	title: string;
	description: string;
}

function FeatureItem({ title, description }: FeatureItemProps) {
	return (
		<div className="grid gap-1">
			<h3 className="text-xl font-bold">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</div>
	);
}
