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
        <h1>Follower List</h1>
        {loading ?
          <>
            {followerArray?.map((data: any, index: number) => (
              <div key={data?.id}>
                <span>{data?.login}</span>
                <br />
              </div>
            ))}
          </> : 'loading...'}
        <h1>Following List</h1>
        {loading ?
          <>
            {followingArray?.map((data: any, index: number) => (
              <div key={data?.id}>
                <span>{data?.login}</span>
                <br />
              </div>
            ))}
          </> : 'loading...'}
      </div>
    </div>
  );
};

export default App;