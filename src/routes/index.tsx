import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="min-h-screen  from-slate-900 via-slate-800 to-slate-900 m-auto flex flex-col gap-4">
			<section className="relative py-20 px-6 text-center flex flex-col gap-8">
				<div>
					<img
						src="/wedding-logo.png"
						alt="wedding"
						className="mx-auto mb-4 w-auto max-w-[800px] h-auto"
					/>
				</div>

				<div className="flex flex-col gap-4 text-center max-w-[800px] m-auto">
					<h2>The time</h2>

					<p>Capetown 21st of October 2026.</p>
				</div>

				<img
					src="/wedding-image-2.png"
					alt="wedding"
					className="mx-auto mb-4 w-auto w-full h-auto"
				/>
				<div className="flex flex-col gap-4 text-center max-w-[800px] m-auto">
					<h2>The place</h2>

					<p>
						We’re getting hitched in the beautiful Webersburg Wine Farm.
						Surrounded by stunning nature with views of Table Mountain. Just
						half an hour from the city. Take a tour here LINK
					</p>
				</div>

				<div className="flex flex-col gap-4 text-center max-w-[800px] m-auto">
					<h2>The day.</h2>

					<p>
						An unforgettable day celebrating with love, laughter, fine wine and
						dancing beneath the stars. Full details to follow.
					</p>
				</div>

				<div className="flex flex-col gap-4 text-center max-w-[800px] m-auto">
					<h2>The dresscode</h2>

					<p>
						Garden Party Chic with a Splash of Colour. Light, bright and perfect
						for a Capetonian summer’s day.
					</p>
				</div>

				<img
					src="/wedding-img-1.png"
					alt="wedding"
					className="mx-auto mb-4 w-auto w-full h-auto"
				/>

				<div className="flex flex-col gap-4 text-center max-w-[800px] m-auto">
					<h2>RSVP</h2>

					<p>
						We’re only inviting our nearest and dearest. So, please RSVP by
						21/7/2026 so we can confirm numbers as spaces are limited.
					</p>
				</div>

				<div className="flex flex-col gap-4 text-center max-w-[800px] m-auto">
					<h2>The adventure</h2>

					<p>
						Don’t just stay for the wedding, make a holiday of it! Cape Town
						offers everything from Safari to wine tours. Here’s some
						recommendations.
						<a href="#">Recommendations</a>
					</p>
				</div>

				<div className="flex flex-col gap-4 text-center max-w-[800px] m-auto">
					<h2>The trip</h2>

					<p>
						Cape Town airport. Guests are kindly asked to book their own
						transport. Here are some recommended airlines.
					</p>
				</div>

				<div className="flex flex-col gap-4 text-center max-w-[800px] m-auto">
					<h2>The digs</h2>

					<p>
						There a limited cottages on the venue at a first come first serve.
						But as the venue is fairly close to the city, Airbnb options are
						plentiful. Here are some recommendations just half an hour from the
						venue.
					</p>
				</div>

				<div className="flex flex-col gap-4 text-center max-w-[800px] m-auto">
					<h2>Transport to the venue</h2>
					<a href="#">Transport options</a>
					If you have any questions please call or whatsapp either of us.
				</div>
			</section>
		</div>
	);
}
