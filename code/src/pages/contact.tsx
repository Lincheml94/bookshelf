import Seo from "../models/props/seo/seo";
import FondContact from "../components/fonds/fond_contact";
import FormulaireContact from "../components/page_contact/formulaire_contact";
import style from "../assets/css/formulaire_contact.module.css"

const Contact = () => {
    return <>
        <Seo title="Contact" description="Contact - desc" url="/contact" />
        <FondContact />
        <div className={style.contentformulaire}>
            <FormulaireContact />
        </div>
			</>
}

export default Contact;