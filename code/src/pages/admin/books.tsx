import style from "../../assets/css/formulaire_login.module.css"
const Books = () => {

    return  (
        <>
       
            <form method="post" action="submit">
                <label htmlFor="email">Ajouter un livre</label>
                <input type="text" id="firstName" name="firstName" />
                <button type="submit">ok</button>
            
                <label htmlFor="modifier">Modifier</label>
                <input type="modifier" id="modifier" name="modifier" />
                <button type="submit">ok</button>

                <label htmlFor="modifier">Supprimer</label>
                <input type="supprimer" id="supprimer" name="supprimer" />
                <button type="submit">ok</button>

            </form >
            </>
      )

}

export default Books;