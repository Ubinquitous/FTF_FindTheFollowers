import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../style/Home.scss';

const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const onClickResultPage = () => {
        navigate(`/search/${searchValue}`);
        window.location.reload();
    }

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return (
        <div>
            <Header />
            <div className='home-wrap'>
                <svg width="300" height="220" viewBox="0 0 310 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="21.8043" y="159.771" width="30.8359" height="154.179" transform="rotate(-135 21.8043 159.771)" fill="#C197F7" />
                    <rect x="81.6665" y="159.505" width="30.8359" height="111.009" transform="rotate(-135 81.6665 159.505)" fill="#6F17D7" />
                    <rect x="59.8622" y="137.747" width="30.8359" height="154.179" transform="rotate(-45 59.8622 137.747)" fill="#6F17D7" />
                    <rect x="287.173" y="88.1059" width="30.8359" height="154.179" transform="rotate(45 287.173 88.1059)" fill="#6F17D7" />
                    <rect x="309.098" y="109.021" width="30.8359" height="154.179" transform="rotate(135 309.098 109.021)" fill="#6F17D7" />
                    <rect x="0.0406494" y="137.747" width="30.8359" height="154.179" transform="rotate(-45 0.0406494 137.747)" fill="#C197F7" />
                    <rect x="117.217" y="21.8043" width="30.8359" height="154.179" transform="rotate(-45 117.217 21.8043)" fill="#C197F7" />
                    <rect x="169.24" y="187.874" width="30.8359" height="111.009" transform="rotate(-135 169.24 187.874)" fill="#C197F7" />
                </svg>
                <div className='title-wrap'>
                    <span className='title-main'>
                        Find The Followers
                    </span>
                    <span className='title-descrpition'>
                        Best service to find Github followers
                    </span>

                    <form className='title-search-wrap'>
                        <input onChange={onChangeValue} value={searchValue} />
                        <button onClick={onClickResultPage} >SEARCH</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;