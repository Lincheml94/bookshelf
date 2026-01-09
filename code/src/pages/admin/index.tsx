import { Link } from "react-router";

const Dashboard = () => {
	return <>
        <h2>Dashboard</h2>
        <Link to={"/admin/books"}><p>books</p></Link>
        <Link to={"/admin/agenda"}><p>Agenda</p></Link>
        <Link to={"/admin/books"}><p>Info</p></Link>
        <Link to={"/admin/books"}><p>page d'accueil</p></Link>
		
	</>
};

export default Dashboard;