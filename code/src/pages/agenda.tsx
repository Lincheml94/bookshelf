import FondAgenda from "../components/fonds/fond_agenda";
import Seo from "../models/props/seo/seo";

const Agenda = () => {
	return <>
			<Seo title="Agenda" description="Agenda - desc" url="/agenda" />
			<FondAgenda />
			</>
	
};

export default Agenda;
