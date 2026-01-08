import { Link } from "react-router";

const Dashboard = () => {
	return <>
        <h2>Dashboard</h2>
        <Link to={"/admin/books"}><p>books</p></Link>
		
		
	</>
};

export default Dashboard;
