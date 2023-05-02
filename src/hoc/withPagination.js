import React from "react";
import Pagination from "../components/Pagination/Pagination";
import useQuery from "../hooks/useQuery";

const withPagination = (Component, opts) => {
  return () => {
    const [currentPage, onChangeCurrentPage]= React.useState(1)
    const {data, refetch} = useQuery(opts.query, currentPage)

    return (
      <>
        <Component {...props} data={data} refetch={refetch}/>
        <Pagination 
            onChangeCurrentPage={onChangeCurrentPage}
            currentPage={currentPage}
            totalPage={5}
        />
      </>
    );
  };
};

export default withPagination;
