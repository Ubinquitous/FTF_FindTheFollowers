import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.scss';

const Header = () => {
    return (
        <div className='header-wrap'>
            <Link to='/' className='logo-wrap'>
                <svg width="45" height="38" viewBox="0 0 310 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="21.8043" y="159.771" width="30.8359" height="154.179" transform="rotate(-135 21.8043 159.771)" fill="#C197F7" />
                    <rect x="81.6665" y="159.505" width="30.8359" height="111.009" transform="rotate(-135 81.6665 159.505)" fill="#6F17D7" />
                    <rect x="59.8622" y="137.747" width="30.8359" height="154.179" transform="rotate(-45 59.8622 137.747)" fill="#6F17D7" />
                    <rect x="287.173" y="88.1059" width="30.8359" height="154.179" transform="rotate(45 287.173 88.1059)" fill="#6F17D7" />
                    <rect x="309.098" y="109.021" width="30.8359" height="154.179" transform="rotate(135 309.098 109.021)" fill="#6F17D7" />
                    <rect x="0.0406494" y="137.747" width="30.8359" height="154.179" transform="rotate(-45 0.0406494 137.747)" fill="#C197F7" />
                    <rect x="117.217" y="21.8043" width="30.8359" height="154.179" transform="rotate(-45 117.217 21.8043)" fill="#C197F7" />
                    <rect x="169.24" y="187.874" width="30.8359" height="111.009" transform="rotate(-135 169.24 187.874)" fill="#C197F7" />
                </svg>
                <span className='logo-text'><span className='purple'>F</span><span className='pink'>TF</span></span>
            </Link>
            <div className='SEO'>
                <Link to='/' className='link home' ><span className='purple'>Hom</span><span className='pink'>e</span></Link>
                <a href='https://github.com/Ubinquitous/FTF_FindTheFollowers'
                    target={'_blank'}
                    rel='noreferrer'
                    className='link github' ><span className='pink'>GitH<span className='purple'>ub</span></span></a>
                <a href='https://instagram.com/ubin._ing'
                    target={'_blank'}
                    rel='noreferrer'
                    className='link last-link contact' ><span className='purple'>Conta</span><span className='pink'>ct us</span></a>
            </div>
        </div>
    );
};

export default Header;