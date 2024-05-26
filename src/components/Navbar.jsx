const Navbar = () => {
  return (
    <nav className="py-6">
      <div className="container mx-auto flex items-center justify-between gap-x-6 ">
        {/* Logo  */}
        <h1 className="text-2xl">Moumita Seema</h1>
        {/* Logo Ends  */}
        <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
          Get Admission
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
