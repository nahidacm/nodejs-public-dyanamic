import React from 'react'
import { Result } from 'antd';
import { useRouteError } from "react-router-dom";

function Exception() {
    const error = useRouteError();
  return (
    <>
        <Result
        status="warning"
        title={`There are some problems with your operation.`}
        subTitle={`${error.message}`}
    />
    </>
  )
}

export default Exception