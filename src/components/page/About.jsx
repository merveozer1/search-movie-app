import React from 'react'

function About() {
  return (
    <div className='container'>
      <div className="border border-4 border-warning my-5 bg-dark">
        <div className="text-white text-center fs-5">
          <p>This web page is UP School <b>Capstone Project</b> that I completed.</p>
          <p>I want to tell you what you can do on this web page.</p>
          <p>You can see Discover and Trending movies on the homepage. You can filter trending movies by last week and today.</p>
          <p>You can search all movies and also you can filter those movies.
            If you want to learn more about a movie you should visit the detail page.
            You can reach the detail page by clicking on the movie of your pick. </p>
          <p>You can filter the top rated and popular movies on the site by date range and genre from the movies page. You can also sort by title.</p>
          <p>You should log in with a username and password to manage and filter your profile and view your watch or favorite list. You can add movies to the watched list and favorites list and access them from the profile page.</p>
          <p>Check out the API and documentation that I used for this assignment below.</p>
          <p>Thank you for coming!</p>
          <p>Please use the contact page to reach me.</p>
          <div className="fs-6">

            <p><a className='text-warning' href="https://www.themoviedb.org/">Click</a> to see TMDB Website {' '}-{' '}
              <a className='text-warning' href="https://developers.themoviedb.org/3">Click</a> to see API Documentation{' '}-{' '}
              <a className='text-warning' href="https://github.com/merveozer1">Click</a> to see source code
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About