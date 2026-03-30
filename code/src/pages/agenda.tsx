import ContentAgenda from "../components/agenda/content-agenda";
import FondAgenda from "../components/fonds/fond_agenda";
import Seo from "../models/props/seo/seo";

const Agenda = () => {
	return (
		<>
			<Seo title="Agenda" description="Agenda - desc" url="/agenda" />
			<FondAgenda />
			<ContentAgenda />
		</>
	);
};

export default Agenda;
