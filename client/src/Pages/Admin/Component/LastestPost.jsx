import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function LastestPost({data}) {
    const columns = [
        //   { field: 'id', headerName: 'ID', width: 40 },
          { field: 'name', headerName: 'Name', width: 150 },
          { field: 'title', headerName: 'Title', width: 200 },
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
          { field: 'date', headerName: 'Date', width: 150, renderCell: (params)=>{
            return(
                <div style={{display:"flex", alignItems:"center"}}>
                    <div style={{marginRight:"10px",}}>{params.row.date}</div> 
                    {
                        params.row.time
                    }
                </div>
            )
      }},   
        ];
        const rows = data?.slice(0,5).map((item,idx)=>{
            return{
                id:item?._id,
                name:item?.user.name,
                title:item?.title,
                image:item?.image,
                cat:item?.category.name,
                date:new Date(item?.createdAt).toDateString(),
                time:new Date(item?.createdAt).toLocaleTimeString()
            }
        })
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
