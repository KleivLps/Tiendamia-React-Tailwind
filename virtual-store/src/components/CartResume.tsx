export default function CartResume({preciodescuento}:{preciodescuento:number}) {
    return (
        <div className="w-[340px] h-[220px] flex flex-col justify-between rounded-md p-[30px] m-[10px] bg-[#f2f2f2]">
              <div className="flex-grow flex flex-col justify-between">
                <h2 className="flex justify-between text-[20px] font-bold">
                  <span>Resumen</span>
                  <span>del</span>
                  <span>pedido</span>
                </h2>
                <div className="flex justify-between items-center">
                  <h3>Total</h3>
                  <strong className=" font-bold ">S/{preciodescuento} </strong>
                </div>
                <small className="pb-[10px]">
                Incluye impuesto general de ventas (I.G.V) <br></br> no incluye costo de
            envio.
                </small>
              </div>
              <button
               className="w-full h-[40px] bg-[#ff3b3c] text-white font-bold border-0 rounded-md"
                id="buy" 
                type="button">
                COMPRAR
              </button>
            </div>
    )}



