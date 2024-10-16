import NavbarLi from "@/app/components/NavbarLi";

const Country = () => {
    return (
        <div className="m-4 text-center mb-2">

          <h1 className="text-white text-2xl border-2 p-2 bg-purple-400 m-4">List of Countries</h1>
          <span className="text-green-400"><NavbarLi href="/country/pakistan" name="Pakistan"/></span>
         <span className="text-orange-300"><NavbarLi href="/country/india" name="India"/></span>
          <span className="text-green-700"><NavbarLi href="/country/bangladesh" name="Bangladesh"/></span>
          <span className="text-red-700"><NavbarLi href="/country/china" name="China"/></span>
          <span className="text-gray-500"><NavbarLi href="/country/japan" name="Japan"/></span>
        </div>
    );
}

export default Country;