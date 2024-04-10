import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const datas = useLoaderData();
    const {id} = useParams();
    const mainData = datas.find(datas => datas.id === parseInt(id))


    return (
        <div>
          <h1> {mainData.estate_title} </h1>
        </div>
    );
};

export default Details;