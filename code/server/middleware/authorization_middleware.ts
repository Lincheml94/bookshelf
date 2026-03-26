import type { NextFunction, Request, Response } from "express";
import * as jose from "jose";
import type { JWTInvalid } from "jose/errors";

class AuthorizationMiddleware {
	// But de cette fonction : vérifier le JWT contenu dans l'en-tête HTTP authorization
	public authorize = (roles: string[]) => {
		// ATTENTION : request et response de EXPRESS
		return async (req: Request, res: Response, next: NextFunction) => {
			// console.log("authorization middleware");
			// récupération du JWT dans l'en-tête authorization
			const token = req.header("authorization")?.split("Bearer ")[1];
			// console.log(token);
			// vérification de la validité du token
			try {
				const secret = new TextEncoder().encode(process.env.VITE_JWT_SECRET);
				await jose.jwtVerify(token as string, secret);
			} catch (error) {
				//  Si le token est invalide, on renvoie une réponse
				res.status(403).json({
					status: 403,
					message:
						process.env.NODE === "production"
							? "error"
							: (error as JWTInvalid).code,
				});
				return;
			}

			// passer au middleware suivant
			next();
		};
	};
}

export default AuthorizationMiddleware;
