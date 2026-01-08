import { Link } from "react-router";
const FormulaireLogin = () => {
    return (
        <>
       
            <form method="post" action="/ma-page-de-traitement">
                 <h2>Login</h2>
                <label htmlFor="email">email</label>
                <input type="text" id="firstName" name="firstName"/>
            
                <label htmlFor="password">mot de passe</label>
                <input type="password" id="password" name="password" />

                <button type="submit">envoyer</button>
                <Link to={"/admin/register"}><p>Créer un compte</p></Link>
                <Link to={"/admin/dashboard"}><p>Dashboard</p></Link>
            </form >
            </>
      )
}

export default FormulaireLogin