// import React from 'react'
import type { BookContentDetailsProps } from '../../models/props/book/book_content_details_props';

// récupération du props data envoyé par le parent 
const BookContentDetails = ({data}: BookContentDetailsProps) => {
    return <div>
        {data.title}
        {data.images}
        <p>prix : {data.price}</p>
        <p>dimensions :{data.dimensions} cm</p>
        <p>isbn : {data.isbn}</p>
        <p>{data.pages}</p>
        <p>A propos de l'auteur.ice : {data.authors.map((item) => (
                                    <li key={item.id}>{item.firstname} {item.lastname} {item.bio}</li>))
                            }</p>
    
    </div>
};

export default BookContentDetails;