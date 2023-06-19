import { Alert } from "react-bootstrap";

import React from 'react'

const Notfound = () => {
    return (
        <>
            <Alert variant="warning" className="m-4">
                No Data Found, please make sure the API contains information to be displayed here
            </Alert>
        </>
    )
}

export default Notfound
