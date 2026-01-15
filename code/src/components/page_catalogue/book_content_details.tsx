// import React from 'react'
import type { BookContentDetailsProps } from '../../models/props/book/book_content_details_props';

// récupération du props data envoyé par le parent 
const BookContentDetails = ({data}: BookContentDetailsProps) => {
    return <div>
        {data.title}
        <img src={`/img/book/${data.images}`} alt={data.title} />
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
};

export default BookContentDetails;