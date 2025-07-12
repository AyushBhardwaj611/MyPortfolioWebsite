function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()} Ayush Bhardwaj. Built with React & Tailwind CSS.
			</div>
		</div>
	);
}

export default AppFooterCopyright;
