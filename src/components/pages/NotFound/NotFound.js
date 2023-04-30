import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import scrollToTop from '../../../functions/scrollToTop';
import './NotFound.css';
const NotFound = () => {
    document.title = `Page not found | CoinStats`;

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <>
            <Header />
            <br/>
            <Container maxWidth="lg">
                <div className="not-found41"><p>404, Page not found!</p></div>
            </Container>
            <br/>
            <Footer />
        </>
    )
}

export default NotFound;