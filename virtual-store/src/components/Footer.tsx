


function Footer() {
  return (
    <>
      <footer className="min-h-64 bg-[#7525a7] flex flex-col items-center p-3 ">
        <div id="footer" className="w-[1080px] flex justify-between p-2.5 "> {/* footer-container */}
          <ul className="w-[170px] list-none p-2.5"> {/* footer-ul */}
            <li className="font-bold text-lg pb-5  "> {/* footer-main-item */}
              <a className="text-white no-underline " /* footer-a */ href="./index.html"> 
                Ofertas
              </a>
            </li>
            <li className="pt-5 pb-5  " > {/* footer-li */}
              <a className="text-white no-underline " /* footer-a */ href="./index.html"> 
                Laptops
              </a>
            </li>
            <li className="pt-5 pb-5  " > {/* footer-li */}
              <a className="text-white no-underline " /* footer-a */ href="./index.html">
                Audio
              </a>
            </li>
            <li className="pt-5 pb-5  "> {/* footer-li */}
              <a className="text-white no-underline " /* footer-a */ href="./index.html">
                Auriculares
              </a>
            </li>
          </ul>
          <ul className="w-[170px] list-none p-2.5 "> {/* footer-ul */}
            <li className="font-bold text-lg pb-5  "> {/*footer-main-item*/}
              <a className="text-white no-underline " /* footer-a */ href="./index.html">
                Cómo comprar
              </a>
            </li>
            <li className="pt-5 pb-5  "> {/* footer-li */}
              <a className="text-white no-underline " /* footer-a  */ href="./index.html">
                Formas de pago
              </a>
            </li>
            <li className="pt-5 pb-5  "> {/* footer-li */}
              <a className="text-white no-underline " /* footer-a */ href="./index.html">
                Envios
              </a>
            </li>
            <li className="pt-5 pb-5  "> {/* footer-li */}
              <a className="text-white no-underline " /* footer-a */ href="./index.html">
                Devoluciones
              </a>
            </li>
          </ul>
          <ul className="w-[170px] list-none p-2.5 "> {/* footer-ul */}
            <li className="font-bold text-lg pb-5  "> {/* footer-main-item */}
              <a className="text-white no-underline " /* footer-a */ href="./index.html">
                Costos y tarifas
              </a>
            </li>
            <li className="pt-5 pb-5  "> {/* footer-li */}
              <a className="text-white no-underline " /* footer-a */ href="./index.html">
                Impuestos
              </a>
            </li>
            <li className="pt-5 pb-5 "> {/* footer-li */}
              <a className="text-white no-underline " /* footer-a */ href="./index.html">
                Facturación
              </a>
            </li>
          </ul>
          <ul className="w-[170px] list-none p-2.5 "> {/* footer-ul */}
            <li className="font-bold text-lg pb-5  "> {/* footer-main-item */}
              <a className="text-white no-underline " /* footer-a */ href="./index.html">
                Mis pedidos
              </a>
            </li>
            <li className="pt-5 pb-5 "> {/* footer-li */}
              <a className="text-white no-underline " /* footer-a */ href="./index.html">
                Pedir nuevamente
              </a>
            </li>
            <li className="pt-5 pb-5 "> {/* footer-li */}
              <a className="text-white no-underline " /* footer-a */ href="./index.html">
                Lista de deseos
              </a>
            </li>
          </ul>
          <ul className="w-[170px] list-none p-2.5 "> {/* footer-ul */}
            <li className="font-bold text-lg pb-5  "> {/* footer-main-item */}
              <a className="text-white no-underline " /* footer-a */ href="./index.html">
                Garantía
              </a>
            </li>
          </ul>
        </div>
        <div className="w-[1080px] border-t-2 border border-solid border-purple-500 text-center text-white font-bold pt-30 pb-30 box-border " /* footer-copyright  */>Curso de HTML + CSS 2023</div>
      </footer>
    </>
  );
}

export default Footer;
