import ProductProp from "../assets/interface/ProductProps";



export default function ProductDescriptionDetail(props: ProductProp) {

const {product} = props

  return (
    <>
      <div className=" flex-col w-[340px] p-[10px] m-[10px] "> {/* product-description-block */}
        <h1 className="text-black text-3xl font-bold break-words mt-0 ">{product.title}</h1> {/* product-title */}
        <form className=" my-8"> {/* product-selector */}
          <fieldset className=" border-none p-0 flex flex-col "> {/* product-fieldset */}
            <label className=" text-black text-[12px] font-bold " htmlFor="color"> {/* product-label */}
              Color
            </label>
            <select
              className="w-full h-[40px] bg-white rounded-xl border border-1 border-gray-600 M-[10px 0] P-[10px] box-border  " /* product-select */
              id="color"
              defaultValue={product.colors[0]}
            >
              {product.colors.map((each) => (
                <option key={each} value={each}>
                  {each}
                </option>
              ))}
            </select>
          </fieldset>
        </form>
        <div className=" my-8 leading-5 text-xl font-normal text-[#383838] mb-[5px]  "> {/* product-description */}
          <span className=" text-black text-sm leading-5 font-bold ">Descripción</span> {/* product-label */}
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
}

