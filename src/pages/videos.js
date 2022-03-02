import React from 'react';
import Layout from '../components/layout';
import ReactPlayer from 'react-player/youtube'

function videos() {
    return ( 
        <Layout pageTitle='Videos'>
            <main className='videos-page-wrapper'>
                <h1>Videos</h1>
                <section className='video-wrapper'>
                    <div className='video-player'>
                        <h2>Propolis Live in Kalamazoo</h2>
                        <ReactPlayer 
                            light={true}
                            playing={true}
                            width='100%'
                            height='100%'
                            url='https://www.youtube.com/watch?v=qUZCC6Y_0y0' />
                    </div>

                    <div className='video-player'>
                        <h2>Blood on the Cement Floor Live in the Irish Hills</h2>
                        <ReactPlayer 
                            light={true}
                            playing={true}
                            width='100%'
                            height='100%'
                            url='https://www.youtube.com/watch?v=AQ1f275IcCI' />
                    </div>

                    <div className='video-player'>
                        <h2>Propolis - Corrugated Pipe</h2>
                        <ReactPlayer 
                            light={true}
                            playing={true}
                            width='100%'
                            height='100%'
                            url='https://www.youtube.com/watch?v=Rf6LljKTK60' />
                    </div>
                </section>
                </main>
        </Layout>
     );
}

export default videos;