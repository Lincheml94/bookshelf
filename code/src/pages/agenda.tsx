import FondAgenda from "../components/fond_agenda";
import Seo from "../models/props/seo";

const Agenda = () => {
	return <>
			<Seo title="Agenda" description="Agenda - desc" url="/agenda" />
			<FondAgenda />
			</>
	
};

export default Agenda;
