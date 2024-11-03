import { Link } from "react-router-dom"
const Item = ({name,pic,id}) => {
    console.log(pic)
    return (<>
    <Link to={`/Service/${id}`}>
    <div className={` mt-10 sm:w-[20rem] sm:h-[33rem] w-72 h-72 relative flex  p-10  bg-cover  justify-center items-center rounded-xl hover:scale-105 duration-300 cursor-pointer`}
    style={{backgroundImage:`url('${pic}')`}}>
        <p className="text-xl font-bold absolute top-5  bg-black/50 p-3 rounded-xl text-white">{name}</p>
    </div>
    </Link>
    </>)
}

export default Item