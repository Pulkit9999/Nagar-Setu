import React, { useMemo, useState, useCallback } from "react";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

import "../css/GrievanceTable.css";
import { useTranslation } from "react-i18next";

const GrievanceTable = ({ grievances }) => {
   const {t} = useTranslation();
  const [globalFilter, setGlobalFilter] = useState("");

  const [sorting, setSorting] = useState([]);

  const [selectedGrievance, setSelectedGrievance] = useState(null);



  const formatDate = useCallback((timestamp)=>{

    if(!timestamp){
      return "-";
    }


    const date = timestamp.toDate();


    return date.toLocaleDateString("en-IN",{
      day:"2-digit",
      month:"short",
      year:"numeric"
    });


  },[]);



  const columns = useMemo(()=>[


    {
      header:"S.No.",
      cell:({row})=> row.index + 1
    },


    {
      accessorKey:"registrationNumber",
      header:t("registrationNumber")
    },


    {
      accessorKey:"createdAt",
      header:t("receivedDate"),

      cell:({row})=>(
        formatDate(row.original.createdAt)
      )
    },


    {
      accessorKey:"Remarks",
      header:t("remarks"),


      cell:({row})=>{


        const description =
          row.original.remarks || "";


        return (

          <div className="remarks-cell">


            <span>

              {
                description.length > 40
                ?
                description.substring(0,40)+"..."
                :
                description
              }

            </span>



            {
              description.length > 40 &&

              <button

                className="more-btn"

                onClick={()=>(
                  setSelectedGrievance(row.original)
                )}

              >

                More

              </button>

            }


          </div>

        );


      }


    },


    {
      accessorKey:"status",

      header:t("status"),


      cell:({row})=>{


        const status=row.original.status;


        return (

          <span

          className={
            status==="Closed"
            ?
            "status-badge status-closed"
            :
            "status-badge status-open"
          }

          >

            {status}

          </span>

        );


      }

    }



  ],[formatDate]);



  const table = useReactTable({

    data:grievances,

    columns,


    state:{
      globalFilter,
      sorting
    },


    onGlobalFilterChange:setGlobalFilter,

    onSortingChange:setSorting,


    getCoreRowModel:getCoreRowModel(),

    getSortedRowModel:getSortedRowModel(),

    getFilteredRowModel:getFilteredRowModel(),

    getPaginationRowModel:getPaginationRowModel(),


    globalFilterFn:(row,columnId,value)=>{


      const search=value.toLowerCase();



      return Object.values(row.original).some((field)=>{


        if(!field){
          return false;
        }



        if(
          typeof field==="object" &&
          field.seconds!==undefined
        ){

          return formatDate(field)
          .toLowerCase()
          .includes(search);

        }



        return field
        .toString()
        .toLowerCase()
        .includes(search);



      });


    }



  });



  return (

    <div className="grievance-table-wrapper">



      <div className="table-header">


        <h2>
          {t("myGrievances")}
        </h2>



        <input

        type="text"

        placeholder={t("searchGrievances")}

        value={globalFilter}

        onChange={(e)=>setGlobalFilter(e.target.value)}

        className="search-box"

        />


      </div>





      <div className="table-container">


        <table className="grievance-table">


          <thead>


            {
              table.getHeaderGroups()
              .map((headerGroup)=>(


                <tr key={headerGroup.id}>


                  {
                    headerGroup.headers.map((header)=>(


                      <th

                      key={header.id}

                      onClick={
                        header.column.getToggleSortingHandler()
                      }

                      >


                        {
                          flexRender(

                            header.column.columnDef.header,

                            header.getContext()

                          )
                        }



                        {

                          {

                            asc:" ▲",

                            desc:" ▼"

                          }[header.column.getIsSorted()]

                          ||

                          ""

                        }



                      </th>


                    ))
                  }


                </tr>


              ))
            }


          </thead>
                    <tbody>


            {
              table.getRowModel().rows.length > 0 ?


              (

                table.getRowModel().rows.map((row)=>(


                  <tr key={row.id}>


                    {
                      row.getVisibleCells()
                      .map((cell)=>(


                        <td key={cell.id}>


                          {
                            flexRender(

                              cell.column.columnDef.cell,

                              cell.getContext()

                            )
                          }


                        </td>


                      ))
                    }


                  </tr>


                ))


              )


              :


              (

                <tr>


                  <td

                  colSpan={columns.length}

                  className="no-data"

                  >

                    No grievances found

                  </td>


                </tr>


              )


            }


          </tbody>


        </table>


      </div>





      <div className="pagination-container">


        <button

        className="pagination-btn"

        onClick={()=>table.previousPage()}

        disabled={!table.getCanPreviousPage()}

        >

          Previous

        </button>





        <span className="page-info">


          Page{" "}

          <strong>

            {
              table.getState()
              .pagination
              .pageIndex + 1
            }

          </strong>


          {" "}of{" "}


          <strong>

            {
              table.getPageCount()
            }

          </strong>


        </span>





        <button

        className="pagination-btn"

        onClick={()=>table.nextPage()}

        disabled={!table.getCanNextPage()}

        >

          Next

        </button>



      </div>




      {
        selectedGrievance &&


        (

          <div

          className="modal-overlay"

          onClick={()=>
            setSelectedGrievance(null)
          }

          >



            <div

            className="modal-content"

            onClick={(e)=>
              e.stopPropagation()
            }

            >



              <h3>

                Grievance Details

              </h3>




              <div className="modal-body">



                <p>

                  <strong>
                    Registration Number:
                  </strong>

                  {" "}

                  {
                    selectedGrievance.registrationNumber
                  }

                </p>





                <p>

                  <strong>
                    Received Date:
                  </strong>

                  {" "}

                  {
                    formatDate(
                      selectedGrievance.createdAt
                    )
                  }

                </p>





                <p>

                  <strong>
                    Status:
                  </strong>

                  {" "}

                  {
                    selectedGrievance.status
                  }

                </p>





                <p>

                  <strong>
                    Ministry:
                  </strong>

                  {" "}

                  {
                    selectedGrievance.ministry
                  }

                </p>





                <p>

                  <strong>
                    Main Category:
                  </strong>

                  {" "}

                  {
                    selectedGrievance.mainCategory
                  }

                </p>





                <p>

                  <strong>
                    Level One Category:
                  </strong>

                  {" "}

                  {
                    selectedGrievance.levelOneCategory
                  }

                </p>





                <p>

                  <strong>
                    Level Two Category:
                  </strong>

                  {" "}

                  {
                    selectedGrievance.levelTwoCategory
                  }

                </p>





                <p>

                  <strong>
                    Grievance Description:
                  </strong>

                </p>





                <div className="remarks-box">


                  {
                    selectedGrievance.remarks
                  }


                </div>



              </div>





              <div className="modal-footer">


                <button

                className="close-btn"

                onClick={()=>
                  setSelectedGrievance(null)
                }

                >

                  Close

                </button>


              </div>




            </div>



          </div>


        )

      }




    </div>


  );


};



export default GrievanceTable;