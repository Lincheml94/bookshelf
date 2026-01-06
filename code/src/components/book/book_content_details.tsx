import React from 'react'
import type { BookContentDetailsProps } from '../../models/props/book_content_details_props';

// récupération du props data envoyé par le parent 
const BookContentDetails = ({data}: BookContentDetailsProps) => {
    return <div>
        {data.title}
        {data.authors.map((item) => (
                                    <li key={item.id}>{item.firstname} {item.lastname}</li>))
                            }
        {data.price}
        {data.dimensions}
    
    </div>
};

export default BookContentDetails;