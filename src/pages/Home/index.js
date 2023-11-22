// src/Home.js
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './home.css'

const GET_BOOKS = gql`
    query {
        allBooks {
            id
            name
            cover
        }
    }
`

const BookList = () => {
    const { loading, error, data } = useQuery(GET_BOOKS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }

    return (
        <div className='lista-livros'>
            <Slider {...settings}>
                {data.allBooks.map(({ name, cover, id }) => (
                    <div className='livro' key={id}>
                        <Link to={`/livro/${id}`}>
                            <h2>{name}</h2>
                            <img src={cover} alt={name} />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

const PrevArrow = (props) => (
    <div {...props} className='slick-arrow slick-prev'>
        <FaChevronLeft />
    </div>
)

const NextArrow = (props) => (
    <div {...props} className='slick-arrow slick-next'>
        <FaChevronRight />
    </div>
)

const Home = () => {
    return (
        <div className='container'>
            <BookList />
        </div>
    )
}

export default Home
