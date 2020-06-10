import React from 'react';
import { Link } from 'react-router-dom';

function Show(props) {
    return (
        <div>
            <Link to='/'>Back</Link>
            <img alt='show' src='http://static.tvmaze.com/uploads/images/medium_portrait/240/600519.jpg'></img>
            <h1>Title:</h1>
            <p>Modern Family</p>
            <h3>Description:</h3>
            <p>Modern Family revolves around three different types of families (nuclear, step- and same-sex) living in the Los Angeles area, who are interrelated through Jay Pritchett and his children, Claire Dunphy (née Pritchett) and Mitchell Pritchett. Patriarch Jay is remarried to a much younger woman, Gloria Delgado Pritchett (née Ramirez), a passionate Colombian with whom he has an infant son, Fulgencio (Joe) Pritchett, and a son from Gloria's previous marriage, Manny Delgado. Jay's daughter Claire was a homemaker, but has returned to the business world. She is now the chief executive of her father's previous business, Pritchett's Closets and Blinds. She is married to Phil Dunphy, a realtor and self-professed \"cool dad\". They have three children: Haley Dunphy, a stereotypical ditzy teenage girl; Alex Dunphy, a nerdy, smart middle child; and Luke Dunphy, the off-beat only son. Jay's lawyer son Mitchell and his husband Cameron Tucker have one daughter, Lily Tucker-Pritchett. As the name suggests, this family represents a modern-day family, and episodes are comically based on situations which many families encounter in real life.</p>
        </div>
    )
}



export default Show;



