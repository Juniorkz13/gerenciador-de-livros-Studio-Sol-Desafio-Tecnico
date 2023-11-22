// src/Livro.js
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import './livro.css'

const GET_BOOK_DETAILS = gql`
    query getBookDetails($id: ID!) {
        book(id: $id) {
            id
            name
            cover
            author {
                name
            }
            description
            category
        }
    }
`

const Livro = () => {
    const location = useLocation()
    const { pathname } = location
    const livroId = parseInt(pathname.replace('/livro/', ''))

    const { loading, error, data } = useQuery(GET_BOOK_DETAILS, {
        variables: { id: livroId }
    })

    if (loading) return <p>Carregando...</p>
    if (error) return <p>Erro ao carregar informações do livro</p>

    const { name, cover, description, author } = data.book

    return (
        <div className='livro-container'>
            <div className='nomeImagem'>
                <h2>{name}</h2>
                <img src={cover} alt={name} />
            </div>
            <div className='descricao'>
                <p>{description}</p>
                <p>Categoria: {data.book.category}</p>
                <p>Autor: {author.name}</p>
            </div>
        </div>
    )
}

export default Livro
