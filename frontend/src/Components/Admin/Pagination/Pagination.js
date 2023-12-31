import React, { useEffect, useState } from 'react'

function Pagination({users,setCurrentPage,currentPage}) {

console.log(currentPage);

    const [pages,setPages]=useState([])


useEffect(()=>{
    if(users.length>0){

       const totalPages=Math.ceil(users.length/4)
       console.log(totalPages,"length");
       const arr=Array( totalPages).fill(0)
       setPages(arr)
     
    }
},[users])

const pageHandler=(currentPage)=>{
    
   
  setCurrentPage(currentPage)

}

const handleNext=()=>{
    setCurrentPage(currentPage+1)
}

const handlePrevious=()=>{
    if(currentPage!==1){
        setCurrentPage(currentPage-1)

    }
}

  return (
    <div className='mb-10'>
      
<nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px">
    <li className={currentPage===1&&`hidden`}>
      <a 
       onClick={handlePrevious}
      className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    {pages.map((item,i)=>

    <li  className={ currentPage===i+1?"bg-real-orange":"bg-white"}>
      <a 
      
      onClick={() => pageHandler(i+1)}
      className={`px-3 py-2 leading-tight text-gray-500${ currentPage===i+1?"bg-slate-600":"bg-slate-600"} border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-gblack dark:hover:bg-gray-700 text-black`}>{i+1}</a>
    </li>
    )}
   
    <li className={pages.length===currentPage&&`hidden`}>
      <a
      onClick={handleNext}
      
      className="px-3 py-2 leading-tight  bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-black dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

    </div>
  )
}

export default Pagination