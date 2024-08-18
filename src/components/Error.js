import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const errorDetails = useRouteError();
    console.log(errorDetails);
    return (<>
        <h1 className="text-3xl">Error Occured</h1>
        <p>{errorDetails.status}</p>
        <p>{errorDetails.data}</p>
    </>)
}


export default ErrorComponent