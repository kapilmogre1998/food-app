'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import styleClasses from './imageSlider.module.css';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';

const images = [
    { image: burgerImg, alt: 'A delicious, juicy burger' },
    { image: curryImg, alt: 'A delicious, spicy curry' },
    { image: dumplingsImg, alt: 'Steamed dumplings' },
    { image: macncheeseImg, alt: 'Mac and cheese' },
    { image: pizzaImg, alt: 'A delicious pizza' },
    { image: schnitzelImg, alt: 'A delicious schnitzel' },
    { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlider() {
    const [currentSlider, setCurrentSlider] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlider((prevVal) => (
                prevVal < images.length - 1 ? prevVal + 1 : 0
            ))
        }, 2000);

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className={styleClasses.img_slider_container} >
            {
                images.map((img, index) => (
                    <Image
                        key={index}
                        className={index === currentSlider ? styleClasses.active : ''}
                        src={img.image}
                        alt={img.alt}
                    />
                ))
            }
        </div>
    )
}