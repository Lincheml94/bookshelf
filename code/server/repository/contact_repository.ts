import type { Document, InsertOneResult, OptionalId } from "mongodb";
import type { Contact } from "../../models/contact";
import MongodbService from "../service/mongodb_service";

class ContactRepository {
	// nom de la collection
	private collection = "contact";

	// sélectionner tous les documents :
	// public selectAll = async () => {
	public selectAll = async (): Promise<Document[] | unknown> => {
		// connection au serveur mongoDB
		const connection = await new MongodbService().connect();

		// sélection d'une collection
		const collection = connection?.db().collection(this.collection);
		const results = collection?.find().toArray();
		return results;
	};

	// insérer un document
	public insert = async (
		data: InsertOneResult,
	): Promise<InsertOneResult[] | unknown> => {
		// connection au serveur mongoDB
		const connection = await new MongodbService().connect();

		// sélection d'une collection
		const collection = connection?.db().collection(this.collection);
		const results = collection?.insertOne(data);
		return results;
	};
}
export default ContactRepository;
