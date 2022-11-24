import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { Octokit } from 'octokit';
import '../style/Result.scss';
import '../style/Home.scss';

const Result = () => {
    const [followerArray]: any = useState([]);
    const [followingArray]: any = useState([]);
    const [followerName]: any = useState([]);
    const [followingName]: any = useState([]);
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState();
    const [count, setCount] = useState(0);
    const [dataLen, setDataLen] = useState(0);
    const [src, setSrc] = useState();
    const [notFound, setNotFound] = useState(false);
    const searchName: any = useParams();

    const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_KEY,
    })

    const user = octokit.request('GET /users/{username}', {
        username: searchName.id,
        per_page: 100,
        page: 1
    })

    user.then((res: any) => {
        setUserName(res.data.name)
        setSrc(res.data.avatar_url)
    }).catch(() => {
        setNotFound(true)
    })

    useEffect(() => {
        const follower = octokit.request('GET /users/{username}/followers{?per_page,page}', {
            username: searchName.id,
            per_page: 100,
            page: count
        })
        const following = octokit.request('GET /users/{username}/following{?per_page,page}', {
            username: searchName.id,
            per_page: 100,
            page: count
        })

        follower
            .then((res) => {
                if (!res.data.length) {
                    return;
                } else {
                    setDataLen(res.data.length)
                    for (let j = 1; j <= res.data.length; j++) {
                        if (res.data[j]?.login !== undefined) {
                            followerArray.push(res.data[j])
                            followerName.push(res.data[j].login)
                        }
                    }
                }
            })
            .then(() => {
                following.then((res) => {
                    if (!res.data.length) {
                        return;
                    } else {
                        if (res.data.length > dataLen) {
                            setDataLen(res.data.length);
                        }
                        for (let j = 1; j <= res.data.length; j++) {
                            if (res.data[j]?.login !== undefined) {
                                followingArray.push(res.data[j])
                                followingName.push(res.data[j].login)
                            }
                        }
                    }
                })
            })
    }, [count]);

    useEffect(() => {
        if (dataLen === 100) {
            setCount(count + 1);
        } else {
            setLoading(true)
        }
    }, []);

    return (
        <div>
            <Header />
            {notFound ?
                <div className='not-found-user-wrap'>
                    <h1>User Not Found. Sorry.</h1>
                </div>
                :
                <>
                    <div className='image-wrap'>
                        <img src={src} className='image' alt='프로필' />
                        <span><span className='pink'>{userName}'</span><span className='purple'>s F<span className='pink'>4</span><span className='purple'>F</span> Result</span></span>
                    </div>
                    <div className='result-wrap'>
                        <div className='my-f4f-box box'>
                            <div className='title-box'>
                                <svg width="50" height="38" viewBox="0 0 310 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="21.8043" y="159.771" width="30.8359" height="154.179" transform="rotate(-135 21.8043 159.771)" fill="#C197F7" />
                                    <rect x="81.6665" y="159.505" width="30.8359" height="111.009" transform="rotate(-135 81.6665 159.505)" fill="#6F17D7" />
                                    <rect x="59.8622" y="137.747" width="30.8359" height="154.179" transform="rotate(-45 59.8622 137.747)" fill="#6F17D7" />
                                    <rect x="287.173" y="88.1059" width="30.8359" height="154.179" transform="rotate(45 287.173 88.1059)" fill="#6F17D7" />
                                    <rect x="309.098" y="109.021" width="30.8359" height="154.179" transform="rotate(135 309.098 109.021)" fill="#6F17D7" />
                                    <rect x="0.0406494" y="137.747" width="30.8359" height="154.179" transform="rotate(-45 0.0406494 137.747)" fill="#C197F7" />
                                    <rect x="117.217" y="21.8043" width="30.8359" height="154.179" transform="rotate(-45 117.217 21.8043)" fill="#C197F7" />
                                    <rect x="169.24" y="187.874" width="30.8359" height="111.009" transform="rotate(-135 169.24 187.874)" fill="#C197F7" />
                                </svg>
                                <span>
                                    <span className='pink'>Don't fol</span>
                                    <span className='purple'>low you</span>
                                </span>
                            </div>
                            {loading ?
                                <div className='list'>
                                    {followingArray.map((data: any, index: number) => (
                                        <>
                                            {followerName.includes(data.login) ?
                                                ''
                                                :
                                                <a href={data.html_url} target={'_blank'} rel="noreferrer" key={index}>
                                                    <div className='map'>
                                                        <img src={data.avatar_url} alt='프로필' />
                                                        <span>{data.login}</span>
                                                    </div>
                                                </a>}
                                        </>
                                    ))}
                                </div>
                                : <h4>Loading...</h4>}
                        </div>
                        <div className='other-f4f-box box'>
                            <div className='title-box'>
                                <svg width="50" height="38" viewBox="0 0 310 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="21.8043" y="159.771" width="30.8359" height="154.179" transform="rotate(-135 21.8043 159.771)" fill="#C197F7" />
                                    <rect x="81.6665" y="159.505" width="30.8359" height="111.009" transform="rotate(-135 81.6665 159.505)" fill="#6F17D7" />
                                    <rect x="59.8622" y="137.747" width="30.8359" height="154.179" transform="rotate(-45 59.8622 137.747)" fill="#6F17D7" />
                                    <rect x="287.173" y="88.1059" width="30.8359" height="154.179" transform="rotate(45 287.173 88.1059)" fill="#6F17D7" />
                                    <rect x="309.098" y="109.021" width="30.8359" height="154.179" transform="rotate(135 309.098 109.021)" fill="#6F17D7" />
                                    <rect x="0.0406494" y="137.747" width="30.8359" height="154.179" transform="rotate(-45 0.0406494 137.747)" fill="#C197F7" />
                                    <rect x="117.217" y="21.8043" width="30.8359" height="154.179" transform="rotate(-45 117.217 21.8043)" fill="#C197F7" />
                                    <rect x="169.24" y="187.874" width="30.8359" height="111.009" transform="rotate(-135 169.24 187.874)" fill="#C197F7" />
                                </svg>
                                <span>
                                    <span className='pink'>You do</span>
                                    <span className='purple'>n't follow</span>
                                </span>
                            </div>
                            {loading ?
                                <div className='list'>
                                    {followerArray.map((data: any, index: number) => (
                                        <>
                                            {followingName.includes(data.login) ?
                                                ''
                                                :
                                                <a href={data.html_url} target={'_blank'} rel="noreferrer" key={index}>
                                                    <div className='map'>
                                                        <img src={data.avatar_url} alt='프로필' />
                                                        <span>{data.login}</span>
                                                    </div>
                                                </a>}
                                        </>
                                    ))}
                                </div>
                                : <h4>Loading...</h4>}
                        </div>
                    </div></>}
        </div>
    );
};

export default Result;