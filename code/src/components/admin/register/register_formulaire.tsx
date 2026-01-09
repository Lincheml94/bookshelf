const FormulaireRegister = () => {

     return (
        <>
       
            <form method="post" action="">
                 <h2>S'inscrire</h2>
                <label htmlFor="email">email</label>
                <input type="text" id="firstName" name="firstName"/>
            
                <label htmlFor="password">mot de passe</label>
                <input type="password" id="password" name="password" />

                <button>envoyer</button>
              
                
            
        </form >
            </>
     )
}

export default FormulaireRegister