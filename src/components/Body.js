import ResCard, { ResCardString } from "./ResCard"
const Body = () => <div className="body">

    <div>
        Search
        {ResCardString}
    </div>


    <div className="res-container">
        <ResCard />
    </div>

</div>

export default Body