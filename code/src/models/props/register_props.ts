import type { ZodError } from "zod";
import type { User } from "../../../models/user";

type RegisterProps = {
	validator: (data: Partial<User>) => Promise<Partial<User> | ZodError>;
	dataToUpdate: User | undefined;
};

export type { RegisterProps };
