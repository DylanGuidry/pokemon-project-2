import React from "react";
import Navbar from '../components/navbar.component'
import Figure from 'react-bootstrap/Figure';
import Dylan from '../components/images/dylan fiverr bun (red).png'

function About() {
    return (
        <div>
            <Navbar />
                <Figure className="m-5 shadow p-3 mb-5">
                    <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={Dylan}
                    />
                <Figure.Caption>
                    Welcome to my Pokémon website! My name is Dylan guidry, and I am a passionate Pokémon enthusiast and the creator of this website. Pokémon has been a significant part of my life since childhood, and I have always been captivated by the imaginative world of these extraordinary creatures.
                    As a front-end developer, I decided to combine my love for Pokémon with my skills in web development to create a platform where fellow Pokémon fans can indulge in their shared passion. This website is the result of that endeavor, aiming to provide a hub of information and enjoyment for trainers, collectors, and fans alike.
                    Through this website, I hope to bring the magic of Pokémon to life by offering a comprehensive collection of Pokémon data sourced from the PokeAPI. Whether you're looking to learn more about your favorite Pokémon, explore their abilities and characteristics, or discover new creatures to add to your team, this website is designed to fulfill your Pokémon-related desires.
                    I am excited to share this journey with you and provide a space where we can all celebrate the wonderful world of Pokémon together. Thank you for visiting, and I hope you have an amazing time exploring the website!
                </Figure.Caption>
            </Figure>
        </div>
    )
}

export default About