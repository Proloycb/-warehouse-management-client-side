import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/n3zBhjw/banner-1.webp"
                    alt="First slide"
                />
                <Carousel.Caption className="text-uppercase">
                    <h1>Run More: Why Running</h1>
                    <h2>Is such perfect</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/99mRQ26/banner-2.webp"
                    alt="Second slide"
                />
                <Carousel.Caption className="text-uppercase">
                    <h1>Personal training</h1>
                    <h2>Fitness club</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;