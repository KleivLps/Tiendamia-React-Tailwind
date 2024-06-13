

function NavButton ({title,link}) {

    return( <>
<li className="no-underline inline-block ">
        <a className="text-white font-bold text-center no-underline inline-block w-[150px] p-1.5 text-sm hover:underline " href={link}>
          {title}
        </a>
      </li>
    </>
    )
    }


export default NavButton