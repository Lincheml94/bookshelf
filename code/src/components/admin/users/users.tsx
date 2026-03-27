// import { use } from "react";
// import UserApiService from "../../../services/user_api_service";

// const Users = () => {
// 	const results = use(new UserApiService().selectAll()).data;

// 	return (
// 		<div>
// 			<h1>Utilisateur.ice.s :</h1>
// 			{results?.map((item) => {
// 				return (
// 					<div key={item.id}>
// 						<p>mail :{item.email}</p>
// 						<p>rôle :{item.role.name}</p>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };

// export default Users;

import { use } from "react";
import UserApiService from "../../../services/user_api_service";

const Users = () => {
	const results = use(new UserApiService().selectAll()).data;

	return (
		<div>
			<h1>Utilisateur.ice.s :</h1>
			{results?.map((item) => {
				return (
					<div key={item.id}>
						<p>mail : {item.email}</p>
						<p>rôle : {item.role.name}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Users;
