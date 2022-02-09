import { useEffect, useState } from 'react';
import { getAllAuthors } from '../../../services/Services';
import './Authors.css';



export const Authors = () => {

    let [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAllAuthors()
            .then(authors => setAuthors(authors))
    }, [])


    return (
        <>
            <h1 className="text-center m-5">AUTHORS ({authors.length})</h1>

            <p className="ms-5">
                {authors.map((author, index) => <h5>{author.name}<hr /> </h5>)}
                
            </p>
        </>
    )
}