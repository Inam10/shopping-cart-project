import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({item , itemIndex}) => {
  const dispatch = useDispatch();

  const  removeFromCart = () =>{
      dispatch(remove(item.id));
      toast.error("Item Removed");
  }
  return (
    <div className="border border-b-[5px] rounded w-[60vh]">

      <div className="flex gap-2" >
        <div>
          <img src={item.image} alt="Product Image" className="w-[200px] m-5"/>
        </div>
      <div className="flex flex-col gap-4 m-5">
        <h1 className="text-gray-700 font-semibold text-lg mt-5  mr-2">{item.title}</h1>
        <p className=" text-gray-400 font-normal  mt-5 mb-3">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        <div className="flex justify-between">
          <p className="text-green-600 font-semibold">{item.price}</p>
          <div 
          onClick={removeFromCart}
          >
            <AiFillDelete className="text-3xl text-red-600 "/>
          </div>
        </div>
      </div>

      </div>

    </div>
  )
};

export default CartItem;
