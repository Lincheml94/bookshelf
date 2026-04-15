import Fond from "../components/fonds/fond";
import MentionsLegalesContent from "../components/mentions_legales/mentions_legales_content";
import Seo from "../models/props/seo/seo";

const MentionsLegales = () => {
	return (
		<>
			<Seo
				title="Mentions légales"
				description="Mentions légales - desc"
				url="/mentions_legales"
			/>
			<MentionsLegalesContent />
			<Fond />
		</>
	);
};

export default MentionsLegales;
