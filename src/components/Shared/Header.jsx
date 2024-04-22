import navBg from "../../assets/more/navBg.jpg";
import navLogo from '../../assets/more/logo1.png'
const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${navBg})` }}
      className="bg-center bg-no-repeat bg-cover h-20 md:h-20"
    >
      <div className="flex items-center justify-center h-full">
        <img className="w-16 md:w-14" src={navLogo} alt="" />
        <h2 className="text-white font-rancho text-xl md:text-4xl">Espresso Emporium</h2>
      </div>
    </div>
  );
};

export default Header;
