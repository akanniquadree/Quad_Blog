// import React, {useMemo, useState} from 'react'


// export const UsePagination = ({data, RenderComponent, title, pageLimit, dataLimit }) => {
//    const [pages] = useState(Math.round(data.length/ dataLimit))
//    const [currentPage, setCurrentPage] = useState(1);

//    const goToNextPage = (page) =>{
//      setCurrentPage(page + 1)
//    }
//    const goToPrevPage = (page) =>{
//      setCurrentPage(page - 1)
//    }
//    const changePage = (e) => {
//      const pageNumber = Number(e.target.textContent)
//      setCurrentPage(pageNumber)
//    }
//    const getPaginatedData = () =>{
//      const startIndex = currentPage * dataLimit - dataLimit
//      const endIndex = startIndex + dataLimit
//      return data.slice(startIndex, endIndex)
//    }
//    const getPaginatedGroup = () => {
//      let start = Math.floor((currentPage-1)/pageLimit)
//      return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
//    }
//    return(
//      <div>
//       <div className="dataContainer">
//          {/* show the posts, 10 posts at a time */}
//          {getPaginatedData().map((d, idx)=>(
//            <div key={idx} data={d}/>
//          ))}
//       </div>
//        {/* show the pagiantion
//         it consists of next and previous buttons
//         along with page numbers, in our case, 5 page
//         numbers at a time
//       */}
//       <ul className="pagination">
//           <li className={`${currentPage === 1 ? "disable" : ""}`} onClick={goToPrevPage}><i className="material-icons">chevron_left</i></li>
//           {
//             getPaginatedGroup().map((item, index)=>(
//               <li className={`active ${currentPage === item ? 'active' : null}`} key={index} onClick={changePage}>{item}</li>
//             ))
//           }

//           <li className={`next ${currentPage === pages ? 'disabled' : ''}`} onClick={goToNextPage}><i className="material-icons">chevron_right</i></li>
//       </ul>
//      </div>
//    )
// }
