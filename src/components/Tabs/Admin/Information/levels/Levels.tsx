import { Link, useSearchParams } from "react-router-dom";
import useFetcherEffect from "../../../../../Helpers/Fetcher";
import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";

export default function Levels() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [programDetails, setProgramDetails] = useState({});
  const [rowData, setrowsData] = useState([]);
  const programSearchParams = new URLSearchParams(searchParams).get("programs");

  useEffect(() => {
    try {
      if (programSearchParams) {
        console.log("able to run");
        (async () => {
          const response: any = await fetch(
            `http://3.7.55.13:5000/sanjivani/program/id/${programSearchParams}`
          );

          if (response.ok) {
            const programData = await response.json();
            setProgramDetails(programData);
            const levelResponse = await fetch(
              `http://3.7.55.13:5000/sanjivani/level/program/${programData?.name}`
            );
            if (levelResponse.ok) {
              const responseData = await levelResponse.json();
              setrowsData(responseData.content);
            }
          }
        })();
      } else {
        (async () => {
          const levelResponse = await fetch(
            `http://3.7.55.13:5000/sanjivani/level/`
          );
          if (levelResponse.ok) {
            const responseData = await levelResponse.json();
            setrowsData(responseData.content);
          } else {
            const responseData = await levelResponse.json();
            console.log(responseData);
          }
        })();
      }
    } catch (error) {
      console.log(error);
    }
  }, [programSearchParams]);
  const columnDefs: any = [
    {
      headerName: "#",
      field: "index",
      pinned: "left",
      width: 50,
      valueGetter: (params: any) => params.node.rowIndex + 1, // Row index (1-based index)
      cellStyle: {
        borderRight: "1px solid gray",
      },
    },

    {
      headerName: "Level Name",
      field: "name",
      pinned: "left",
      width: 210,
      cellRenderer: (params: any) => {
        return (
          <div className="flex items-center gap-5 justify-center h-full">
            <Link to={`/admin/information/levels?programs=${params.data.id}`}>
              <button className="underline text-blue-500" data-action="delete">
                <p>{params.data.name}</p>
              </button>
            </Link>
          </div>
        );
      },
      cellStyle: {
        borderleft: "1px solid gray",
        borderRight: "1px solid gray",
        textDecoration: "underline",
      },
    }, // Assuming SymbolEntity has a name field

    {
      headerName: "Preacher1",
      field: "preacher1",

      cellStyle: {
        borderleft: "1px solid gray",
        borderRight: "1px solid gray",
      },
    },
    {
      headerName: "Preacher2",
      field: "preacher2",

      cellStyle: {
        borderleft: "1px solid gray",
        borderRight: "1px solid gray",
      },
    },
    {
      headerName: "Mentor",
      field: "mentor",

      cellStyle: {
        borderleft: "1px solid gray",
        borderRight: "1px solid gray",
      },
    },
    {
      headerName: "Coordinator",
      field: "coordinator",
      cellStyle: {
        borderleft: "1px solid gray",
        borderRight: "1px solid gray",
      },
    }, // enum: BUY/SELL

    {
      headerName: "Accepting Participants",
      field: "acceptingNewParticipants",

      cellStyle: {
        borderleft: "1px solid gray",
        borderRight: "1px solid gray",
      },
    },
    {
      headerName: "Display Name",
      field: "displayName",

      cellStyle: {
        borderleft: "1px solid gray",
        borderRight: "1px solid gray",
      },
    },
    {
      headerName: "Status",
      field: "status",
      cellStyle: {
        borderleft: "1px solid gray",
        borderRight: "1px solid gray",
      },
    },

    {
      headerName: "Sadhana Links",
      field: "charges",
      pinned: "right",
      width: 150,
      cellStyle: {
        borderleft: "1px solid gray",
        borderRight: "1px solid gray",
      },
    },
  ];

  return (
    <div
      className="ag-theme-quartz w-full" // applying the Data Grid theme
      style={{ height: 500 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        pagination={true} // Enable pagination
        paginationPageSize={10} // Set page size
        onPaginationChanged={(e) => console.log(e)} // Register the event listener
        columnDefs={columnDefs}
      />
    </div>
  );
}
