import React from 'react';
import '../footer/footer.scss';

const Footer = () => {
    return (
        <div className = "footer-main">
            <div className = "footer-left">
                <p>Новостник</p>
                <p>Single Page Application</p>
            </div>
            <div className = "footer-center">
                <p>Дипломный проект</p>
            </div>
            <div className = "footer-right">
                <p>Made by</p>
                <p>Иван Петров</p>
            </div>
            

        </div>
        
    )
}

export default Footer;