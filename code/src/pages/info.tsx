import FondInfo from "../components/fonds/fond_info";
import Presentation from "../components/info/presentation";
import Seo from "../models/props/seo/seo";

const Info = () => {
	return (
		<>
			<Seo
				title="Informations"
				description="Informations - desc"
				url="/catalogue"
			/>
			<FondInfo />
			<h2>Info</h2>
			<Presentation />
		</>
	);
};

export default Info;
