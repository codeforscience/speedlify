module.exports = {
	name: "css-domains", // optional, falls back to object key
	description: "Other CSS Domains",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://eventfund.codeforscience.org",
		"https://blog.codeforscience.org"
	]
};
