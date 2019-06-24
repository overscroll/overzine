import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LogoDesktop from '../LogoDesktop/LogoDesktop';
import Typist from 'react-typist';
import { isArray } from 'util';

export default function Page({ headline, subline, background }) {
    background = background || '12';
    subline = subline || 'BLOGAZINE ZUM DIGITALEN LEBEN';
    headline = headline || '';

    if( isArray(headline) ){
        const headlines = headline;
        headline = (<Typist  corsor={{show: true,  blink: true, hideWhenDone: true }}>
            <Typist.Delay ms={1000} />    
            {   
                headlines.map((text) => {
                    console.log(text);
                    return (
                        <span>
                            <span>{text}</span>
                            <Typist.Backspace count={ text.length } delay={4000} />    
                        </span>        
                    )
                })
            }
            <span>{headlines[0]}</span>
            </Typist>   );
    }

    return (
        <div className={`overzine-frontpage`}>
            <LogoDesktop mobile={false} color="#ffffff" />
            <div className={`overzine-frontpage__inner`}>
                <h2 className={`overzine-frontpage__headline`}>
                    {headline}
                </h2>
                <p className={`overzine-frontpage__subline overzine-frontpage__geviert `}>{subline}</p> 

                <p className={`overzine-frontpage__intro`}><span className={`overzine-frontpage__emoji`}>✌️</span>Endlich gelauncht: Hier berichten wir über das Leben mit dem Smartphone und alles was damit zu tun hat!  <Link to="/1/hello" >Erfahre mehr</Link></p>
            </div>
        </div>
    );
}