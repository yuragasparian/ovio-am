export default ({ title, text, order }) => {
    const colors = ["bg-[#53079d]", "bg-[#04eed2]"]
  return (
    <div className="h-[10rem] w-[26rem] flex justify-center rounded-[21px] overflow-hidden shadow-lg shadow-slate-300 my-6 select-none cursor-grab">
      <div className={`${colors[order%2]} w-1/3 rounded-e-[120px] -mt-3 flex items-center justify-center text-4xl text-white font-bold`}>
        {order}
      </div>
      <div className="pl-6 py-6 flex flex-col justify-between pr-16">
        <h2 className="font-black text-2xl">{title}</h2>
        <p className="text-slate-600">{text}</p>
      </div>
    </div>
  );
};
