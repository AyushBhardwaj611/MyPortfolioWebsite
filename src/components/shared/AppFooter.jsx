import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
} from 'react-icons/fi';
import LeetCodeIcon from '../../images/leetcode_gray.svg';
import GitHubIcon from '../../images/githublogosmall.svg';
import LinkedInIcon from '../../images/linkedinsmalllogo.svg';
import GFGIcon from '../../images/gfgsmalllogo.svg';
import EmailIcon from '../../images/emailsmalllogo.svg';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <img src={EmailIcon} alt="Email" className="w-full h-full" />,
		url: 'mailto:bhardwaj.ayush419@gmail.com',
	},
	{
		id: 2,
		icon: <img src={GitHubIcon} alt="GitHub" className="w-full h-full" />,
		url: 'https://github.com/AyushBhardwaj611',
	},
	{
		id: 3,
		icon: <img src={LeetCodeIcon} alt="LeetCode" className="w-full h-full" />,
		url: 'https://leetcode.com/u/Ayush_Bhardwaj3351/',
	},
	{
		id: 4,
		icon: <img src={LinkedInIcon} alt="LinkedIn" className="w-full h-full" />,
		url: 'https://linkedin.com/in/ayushbhardwaj419',
	},
	{
		id: 5,
		icon: <img src={GFGIcon} alt="GeeksforGeeks" className="w-full h-full" />,
		url: 'https://www.geeksforgeeks.org/user/bhardwajar4b4/',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Online Profiles
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
