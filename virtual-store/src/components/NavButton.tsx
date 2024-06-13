function NavButton({ title, link }) {
  return (
    <li className="no-underline inline-block md:block">
      <a
        className="text-white font-bold text-center no-underline inline-block w-[150px] md:w-full p-1.5 text-sm md:text-base lg:text-lg hover:underline"
        href={link}
      >
        {title}
      </a>
    </li>
  );
}

export default NavButton;
