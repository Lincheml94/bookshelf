// reprendre strictement les noms des colonnes de la table SQL

import type { Role } from "./role";

type User = {
	id: number;
	email: string;
	role_id: number;
	role: Role;
};

export type { User };
