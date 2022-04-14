import React from 'react'

function PadNumber({postPerPage, totalPosts, paginate, goToNext,goToPrev,currentPage}) {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumber.push(i)
    }
  return (
    <div>
        <ul className="pagination">
            {/* <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li> */}
            <li className={`prev ${currentPage === 1 ? "disable": "" }`} onClick={goToPrev}><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                {
                    pageNumber.map((number, index)=>(
                        <li className={`${currentPage === number ? "active" : "waves-effect"}`} key={index} onClick={()=>paginate(number)} ><a href="#!">{number}</a></li>
                    ))
                }
            <li className={`next ${ currentPage === pageNumber.length ? "disable" :""}`} onClick={goToNext}><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
    </div>
  )
}

export default PadNumber