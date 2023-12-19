const Card = () => {
  return (
    <div className="w-56 rounded-lg cursor-pointer bg-gray-50 h-60">
      <figure className="relative w-full mb-2 h-4/5">
        <span className="absolute bottom-0 left-0 px-2 py-0.5 m-2 text-xs text-black rounded-md bg-white/60">
          Electronics
        </span>
        <img
          className="object-cover w-full h-full rounded-t-lg"
          src="https://picsum.photos/200"
          alt="headphones"
        />
        <div className="absolute top-0 right-0 flex justify-center w-6 h-6 m-2 bg-white rounded-full">
          +
        </div>
      </figure>
      <p className="flex justify-between px-2">
        <span className="text-sm font-light">Product</span>
        <span className="text-lg font-medium">$350</span>
      </p>
    </div>
  );
};

export default Card;
