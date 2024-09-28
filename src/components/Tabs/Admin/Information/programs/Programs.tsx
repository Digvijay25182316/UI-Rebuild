import { AgGridReact, AgGridReactProps, AgReactUiProps } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import clsx from "clsx";
import useFetcherEffect from "../../../../../Helpers/Fetcher";
import { Link } from "react-router-dom";
import { Field, Input, Label } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
export default function Programs() {
  const responseData: any = useFetcherEffect({
    url: "http://3.7.55.13:5000/sanjivani/program/",
  });

  // Column Definitions: Defines the columns to be displayed.
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
      headerName: "Program Name",
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
      headerName: "Preacher",
      field: "preacher",

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
      headerName: "Incharge",
      field: "incharge",

      cellStyle: {
        borderleft: "1px solid gray",
        borderRight: "1px solid gray",
      },
    },
    {
      headerName: "Audience Type",
      field: "audienceType",

      cellStyle: {
        borderleft: "1px solid gray",
        borderRight: "1px solid gray",
      },
    },
    {
      headerName: "Type",
      field: "type",
      cellStyle: {
        borderleft: "1px solid gray",
        borderRight: "1px solid gray",
      },
    },
    {
      headerName: "Location",
      field: "location",
      cellStyle: {
        borderleft: "1px solid gray",
        borderRight: "1px solid gray",
      },
    },
    {
      headerName: "Activities Link",
      field: "Activities Link",
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
    <div className="bg-white rounded-lg">
      <div className={"flex items-center justify-between"}>
        <Field>
          <Input
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 ",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-blue-500"
            )}
            placeholder="Search..."
          />
        </Field>
        <div className="flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-300 px-2 py-1.5 mx-2 rounded-lg">
          <PlusIcon className="h-5 w-5" />
          Program
        </div>
      </div>
      <div
        className="ag-theme-quartz w-full" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={responseData.content}
          pagination={true} // Enable pagination
          paginationPageSize={10} // Set page size
          onPaginationChanged={(e) => console.log(e)} // Register the event listener
          columnDefs={columnDefs}
        />
      </div>
    </div>
  );
}
