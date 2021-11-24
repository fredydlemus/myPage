import React from 'react';
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';

const fredy = {
    social_media: [
        {
            ref: 'twitter',
            link: 'https://twitter.com/fredyflemus',
            icon: <AiFillTwitterCircle/>
        },
        {
            ref: 'github',
            link: 'https://www.linkedin.com/in/fredy-daniel-flores-lemus-8a979a196/',
            icon: <AiFillGithub/>
        },
        {
            ref: 'linkedin',
            link: 'https://www.linkedin.com/in/fredy-daniel-flores-lemus-8a979a196/',
            icon: <AiFillLinkedin/>
        },
        {
            ref: 'instagram',
            link: 'https://www.instagram.com/fredyflemus/',
            icon: <AiFillInstagram/>
        }
        
    ],
    description: `Hello!, I'm Fredy Flores and I'm a Web Developer passionate about build products and solutions using the web technologies.`,
    projects_description: 'As a Web Developer I have done many projects '
}

export default fredy;