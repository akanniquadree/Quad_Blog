import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function NewUser({data}) {
    const columns = [
        //   { field: 'id', headerName: 'ID', width: 40 },
        { field: 'name', headerName: 'User', width: 200, renderCell: (params)=>{
            return(
                <div style={{display:"flex", alignItems:"center"}}>{
                    <img src={params.row.image} alt="" style={{width:"50px",height:"45px",marginRight:"10px", objectFit:"cover", borderRadius:"50%"}}/> 
                    }
                    {
                        params.row.name
                    }
                </div>
            )
      } },
          { field: 'email', headerName: 'Email', width: 150 },
          { field: 'username', headerName: 'Username', width: 70,},
          { field: 'date', headerName: 'Date', width: 150, renderCell: (params)=>{
            return(
                <div style={{display:"flex", alignItems:"center"}}>
                    <div style={{marginRight:"10px",}}>{params.row.date}</div> 
                    {
                        params.row.time
                    }
                </div>
            )
      }}
        ];
        const rows = data?.slice(0,5).map((itm, idx)=>{
            return{
                id: itm?._id,
                name: itm?.name,
                image:itm?.pic,
                email:itm?.email,
                username:itm?.username,
                date:new Date(itm?.createdAt).toDateString(),
                time:new Date(itm?.createdAt).toLocaleTimeString()
            }
        })
  return (
      <>
        <h6>New Users</h6>
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
