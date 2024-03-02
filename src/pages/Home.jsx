import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { NavLink } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to Read Posts
                            </h1>
                            <br />
                            <h3 className='w-1/2 relative left-[50%] transform -translate-x-1/2'>
                                Get Started to write Blog on this Blog application Start Creating a simple blog article. Easy-to-Understand app for smooth use.
                            </h3>
                            <br />
                            <NavLink
                            to={`/login`}
                            className="bg-blue-100 rounded-3xl px-4 py-2 shadow-lg hover:text-xl "
                            >
                                Login / Sign Up
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/2 lg:w-1/3 xl:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home