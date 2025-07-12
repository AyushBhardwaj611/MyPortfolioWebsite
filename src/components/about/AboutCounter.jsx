import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 4, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 6, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 15, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 500, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Months of hands-on Internship Experience"
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Technical Projects built"
					counter={<span id="githubStarsCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Technologies across Backend & System Design"
					counter={<span id="feedbackCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Hours spent Coding and Building"
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
