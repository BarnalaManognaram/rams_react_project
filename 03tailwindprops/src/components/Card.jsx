import React from 'react'

function Card(props){
    let username=props.userName
    // console.log("props",username)
    return(
        <>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img  className="w-24 h-24 md:w-48 md:h-auto md:rounded-l rounded-full mx-auto" src="https://images.pexels.com/photos/17516407/pexels-photo-17516407/free-photo-of-coffee-beans-spilling-out-of-a-white-cup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"/>
        <div  className="pt-6 md:p-8 text-center space-y-4">
          <blockquote>
            <p  className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption  className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
          <h2 className="text-yellow-400"><b>User Name : {username}</b></h2>
        </div>
        
      </figure>
      <br></br>
     </>

    )
}

export default Card