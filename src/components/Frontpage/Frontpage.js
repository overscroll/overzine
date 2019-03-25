import React, { Component } from 'react';


export default function Frontpage({ headline, subline, background, linkTo }) {
    linkTo = (url) => { alert(`navigate to ${url}`); return false; };
    background = background || '12';
    subline = subline || 'BLOGAZINE ZUM DIGITALEN LEBEN';

    return (
        <div className={`overzine-frontpage`}>
            <div className={`overzine-frontpage__inner`}>
                <h2 className={`overzine-frontpage__headline`}>{headline}</h2>
                <p className={`overzine-frontpage__subline overzine-frontpage__geviert `}>{subline}</p> 

                <p className={`overzine-frontpage__intro`}><span className={`overzine-frontpage__emoji`}>✌️</span> Yes, endlich gelauncht. Hier blogge ich ab sofort über das Leben mit dem Smartphone und alles was damit zu tun hat! <a href="/mehr" onClick={linkTo('t')}>Erfahre mehr</a></p>
            </div>
        </div>
    );

}
