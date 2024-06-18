export default function CartCard({
    title,
    images,
    description,
    quantity,
    color,
    descuento,  
    id,
    precio,
    preciodescuento,

}:{title:string, images:string, quantity:string, description:string, color:string, descuento:number, id:string, precio:number, preciodescuento:number}) {
    return(
        <article className="w-[340px] lg:w-[680px] md:h-[220px] flex justify-between items-center rounded-md px-[30px] py-[15px] lg:py-[30px] m-[10px] bg-[#f2f2f2]">
              <img
                className="hidden lg:inline-block w-[140px] h-[140px] rounded-sm"
                src={images}
                alt="ipad"
              />
              <div className="flex flex-col justify-start flex-grow">
              <div className="lg:h-[120px] flex flex-col justify-between flex-grow p-[10px]">
                <span>
                <strong className="block lg:inline-block text-[16px]">{title} </strong>
                <span className="block lg:inline-block text-[12px]">-{color} </span>
                </span>
                <p className="hidden lg:inline-block w-[340px] truncate text-[12px]">
                    {description}
                </p>
                <input
                  className="w-[70px] rounded-sm border-1 border-[#eaeaea] p-[5px] pl-[15px] text-[14px]"
                  type="number"
                  name="quantity"
                  defaultValue={quantity}
                  min="1"
                  id={id}
                />
              </div>
              <strong className="text-start lg:text-end text-[14px] px-[10px]">Subtotal = S/{precio} </strong>
              <strong className="text-start lg:text-end text-[14px] px-[10px]"> {descuento} %off </strong>
            
              <strong className="text-start lg:text-end text-[14px] px-[10px]">Total = S/{preciodescuento} </strong>
              
             
              </div>
            </article>
    )
}