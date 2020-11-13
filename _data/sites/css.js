module.exports = {
	name: "css", // optional, falls back to object key
	description: "CSS Websites",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://codeforscience.org",
		"https://codeforscience.org/about/",
		"https://codeforscience.org/board/",
		"https://codeforscience.org/sponsored-projects/",
		"https://codeforscience.org/donate/"
	]
};
