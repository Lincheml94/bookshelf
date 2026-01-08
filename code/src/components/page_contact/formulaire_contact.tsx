// import React from 'react'
// import style from "../assets/css/formulaire_contact.module.css"

const FormulaireContact = () => {
    return (
        <>
        <h2>Contact</h2>
        <form method="post" action="/ma-page-de-traitement">
                <label htmlFor="name">Nom</label>
                <input type="text" id="firstName" name="firstName"/>
            
                <label htmlFor="mail">Email</label>
                <input type="email" id="email" name="email" />
            
                <label htmlFor="msg">Dites-nous</label>
                <textarea name="" id=""></textarea>

                <button>envoyer</button>
            
            
      
            </form >
            </>
      )
}

export default FormulaireContact