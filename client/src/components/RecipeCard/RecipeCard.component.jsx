/* eslint-disable react/prop-types */
const RecipeCard = ({ title, author, description, thumbnail }) => {
  return (
    <div className="p-3 bg-white shadow-lg shadow-slate-500/50 hover:shadow-xl hover:shadow-slate-500/60 cursor-pointer w-80 rounded-xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
      <div className="relative mt-2 mx-2">
        <h2 className="font-semibold text-2xl text-lime-500 mb-2">{title}</h2>
        <div className="h-56 rounded-2xl overflow-hidden">
          <img
            src={`assets/recipes/${thumbnail}`}
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
        <p className="py-2 text-base text-stone-600 h-20 w-full overflow-hidden overflow-ellipsis">
          {description}
        </p>
        <p className="pt-2 text-sm text-stone-400 text-right w-40 overflow-ellipsis overflow-hidden float-right">
          @{author}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
