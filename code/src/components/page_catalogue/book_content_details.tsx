// import React from 'react'
import type { BookContentDetailsProps } from '../../models/props/book/book_content_details_props';
import styles from "../../assets/css/page_book_details.module.css"
import Fondcatalogue from '../fonds/fond_catalogue';
// récupération du props data envoyé par le parent 
const BookContentDetails = ({ data }: BookContentDetailsProps) => {
    
    return<> < Fondcatalogue />
    <div className={styles.bookdetail}>
        <img src={`/img/book/${data.images}`} alt={data.title} />
        <div className={styles.legendedetail}>
        <h2>{data.title}</h2>
        <p>prix : {data.price} euros</p>
        <p>dimensions :{data.dimensions} cm</p>
        <p>parution :{data.published_at}</p>
        <p>isbn : {data.isbn}</p>
        <p>technique d'impression : {data.print}</p>
        <p>{data.pages}</p>
        <p>{data.description}</p>
        <p>A propos de l'auteur.ice : {data.authors.map((item) => (
            <li key={item.id}>{item.firstname} {item.lastname} {item.bio}</li>))}
        </p>
        <p>{data.categories.map((item) => (
            <li key={item.id}>{item.name}</li>))}
        </p>
        <p>{data.currentstates.map((item) => (
            <li key={item.id}>{item.statename}</li>))}
        </p>
        </div>
    
        </div>
        </>
};

export default BookContentDetails;