import React, { useState, useEffect } from "react";
import { BlogPost } from "./FetchBlogPosts";

import MaterialTable from "material-table";
import { AddBox, ArrowUpward, SaveAlt } from "@material-ui/icons";

// import { forwardRef } from 'react';

// import AddBox from '@material-ui/icons/AddBox';
// import ArrowUpward from '@material-ui/icons/ArrowUpward';
// import Check from '@material-ui/icons/Check';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import DeleteOutline from '@material-ui/icons/DeleteOutline';
// import Edit from '@material-ui/icons/Edit';
// import FilterList from '@material-ui/icons/FilterList';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import Remove from '@material-ui/icons/Remove';
// import SaveAlt from '@material-ui/icons/SaveAlt';
// import Search from '@material-ui/icons/Search';
// import ViewColumn from '@material-ui/icons/ViewColumn';

// const tableIcons = {
//     Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//     Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//     Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//     DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//     Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//     Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//     FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//     LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//     NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//     ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//     SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
//     ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//     ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
//   };

interface SimpleMaterialTableProps {
  rows: BlogPost[];
}

const SimpleMaterialTable: React.FC<SimpleMaterialTableProps> = ({ rows }) => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        options={{
          exportButton: true
          //   search: false,
          //   paging: false
        }}
        //   icons={tableIcons}

        // columns={[
        //   { title: "Adı", field: "name" },
        //   { title: "Soyadı", field: "surname" },
        //   { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
        //   {
        //     title: "Doğum Yeri",
        //     field: "birthCity",
        //     lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
        //   }
        // ]}
        // data={[
        //   { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 }
        // ]}
        columns={[
          { title: "User Id", field: "userId" },
          { title: "Blog Id", field: "id" },
          { title: "Title", field: "title" },
          { title: "Body", field: "body" }
        ]}
        data={rows}
        title="Blog Posts"
      />
    </div>
  );
};

const FetchBlogPostsTable = () => {
  const [data, setData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchMyAPI() {
    const responseJson = await fetch(
      "https://jsonplaceholder.typicode.com/posts/"
    );
    const response: BlogPost[] = await responseJson.json();
    setData(response);
    setLoading(false);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <div>
      {loading ? (
        <div>...loading</div>
      ) : (
        <div>{data && <SimpleMaterialTable rows={data} />}</div>
      )}
    </div>
  );
};

export default FetchBlogPostsTable;
