import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function LastestPost() {
    const columns = [
        //   { field: 'id', headerName: 'ID', width: 40 },
          { field: 'name', headerName: 'Name', width: 150 },
          { field: 'title', headerName: 'Title', width: 150 },
          { field: 'image', headerName: 'Image', width: 70, renderCell: (params)=>{
                return(
                    <div>{
                        <img src={params.row.image} alt="" style={
                            {
                                width:"50px",height:"45px", objectFit:"cover", borderRadius:"50%"
                            }
                        }/> 
                        }
                        
                    </div>
                )
          } },
          { field: 'cat', headerName: 'Category', width: 70,},
          { field: 'date', headerName: 'Date', width: 80,},   
        ];
        const rows = [
            { id: 1, name:"John", title: 'Snow', image: '/images/caro2.jpg', category: "travel", date:"oct 2020"},
            { id: 2, name:"John", title: 'Snow', image: '/images/caro2.jpg', category: "travel", date:"oct 2020"},
            { id: 3, name:"John", title: 'Snow', image: '/images/caro2.jpg', category: "travel", date:"oct 2020"},
            { id: 4, name:"John", title: 'Snow', image: '/images/caro2.jpg', category: "travel", date:"oct 2020"},
            { id: 5, name:"John", title: 'Snow', image: '/images/caro2.jpg', category: "travel", date:"oct 2020"},
        ]
  return (
      <>
        <h6>Lastest Posts</h6>
        <div className="row">
            <div className="col s12"style={{ height: 400, marginTop:"10px" }}>
            <DataGrid style={{fontSize:"8px"}}
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
            </div>
        </div>
    </>
  )
}
