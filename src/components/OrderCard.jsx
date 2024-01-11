import { TrashIcon } from '@heroicons/react/24/outline';

const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {
  return (
    <div className="flex items-start justify-between p-1 mb-2 rounded-lg bg-gray-50 hover:bg-gray-100">
      <figure className="w-16 h-16">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={imageUrl}
          alt={title}
        />
      </figure>

      <div className="flex flex-col justify-between w-full h-16 pl-2">
        <div className="flex justify-between ">
          <p className="text-sm font-light">{title}</p>
          {handleDelete && (
            <TrashIcon
              onClick={() => handleDelete(id)}
              className="w-5 h-5 text-red-500 rounded-lg cursor-pointer hover:bg-red-100 hover:shadow-lg"
            />
          )}
        </div>

        <div className="text-right text-gray-600">
          <p className="text-lg font-medium">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
