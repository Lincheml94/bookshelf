import type { SeoProps } from "../models/props/seo_props";

// récupérer les props dans les paramètres de la fonction du composant
const Seo = ({ title, description, url }: SeoProps) => {
	return (
		<>
			{/* 50 caractères max */}
			<title>{`Bookshelf editions - ${title}`}</title>

			{/* 150 caractères max */}
			<meta name="description" content={`Bookshelf - ${description}`} />

			{/* Open Graph */}
			<meta property="og:title" content={`Bookshelf - ${title}`} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`https://bookshelfeditions.com${url}`} />

			{/* image: 1200x630px */}
			<meta
				property="og:image"
				content="https://bookshelfedition.com/img/og_banner.jpg"
			/>
			<meta property="og:description" content={`Bookshelf - ${description}`} />

			{/* twitter cards */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={`Bookshelf - ${title}`} />
			<meta name="twitter:description" content={`Bookshelf - ${description}`} />
			{/* image carrée */}
			<meta name="twitter:image" content="https://bookshelf.com/image.jpg" />
		</>
	);
};

export default Seo;
