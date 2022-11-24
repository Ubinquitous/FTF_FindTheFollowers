import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../style/Home.scss';

const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const onClickResultPage = () => {
        navigate(`/search/${searchValue}`);
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

/*
import axios from 'axios';
import { Octokit } from 'octokit';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [followerArray, setFollowerArray]: any = useState([]);
  const [followingArray, setFollowingArray]: any = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_KEY,
    })
    for (let i = 1; i <= 1000; i++) {
      const follower = octokit.request('GET /users/{username}/followers{?per_page,page}', {
        username: 'Ubinquitous',
        per_page: 100,
        page: i
      })
      follower.then((res) => {
        if (res.data.length === 0) {
          return;
        } else {
          for (let j = 1; j <= res.data.length; j++) {
            if (res.data[j]?.login !== undefined) {
              followerArray.push(res.data[j]?.login)
            }
          }
        }
      })

      const following = octokit.request('GET /users/{username}/following{?per_page,page}', {
        username: 'Ubinquitous',
        per_page: 100,
        page: i
      })

      following.then((res) => {
        if (res.data.length === 0) {
          setLoading(true)
          return;
        } else {
          for (let j = 1; j <= res.data.length; j++) {
            if (res.data[j]?.login !== undefined) {
              followingArray.push(res.data[j]?.login)
            }
          }
        }
      })
    }

  }, []);

  return (
    <div>
      <button onClick={() => { console.log(followerArray, followingArray, followingArray.filter((x: any) => !followerArray.includes(x)), followerArray.filter((x: any) => !followingArray.includes(x))) }}>CLICK</button>
      <div>
        <h1>나를 팔로우하는 사람</h1>
        {loading ?
          <>
            {followerArray?.map((data: any, index: number) => (
              <div>
                <span>{data}</span>
                <br />
              </div>
            ))}
          </> : 'loading...'}
        <h1>내가 팔로우하는 사람</h1>
        {loading ?
          <>
            {followingArray?.map((data: any, index: number) => (
              <div>
                <span>{data}</span>
                <br />
              </div>
            ))}
          </> : 'loading...'}
        <h1>나를 맞팔로우하지 않는 사람</h1>
        {loading ?
          <>
            {followingArray.filter((x: any) => !followerArray.includes(x))?.map((data: any, index: number) => (
              <div>
                <span>{data}</span>
                <br />
              </div>
            ))}
          </> : 'loading...'}
        <h1>내가 맞팔로우하지 않는 사람</h1>
        {loading ?
          <>
            {followerArray.filter((x: any) => !followingArray.includes(x))?.map((data: any, index: number) => (
              <div>
                <span>{data}</span>
                <br />
              </div>
            ))}
          </> : 'loading...'}
      </div>
    </div>
  );
};

export default App;
 */