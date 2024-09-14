
import { Home, Users, Wallet, CircleUserRound } from "lucide-react";
import { Link, useLocation } from "@remix-run/react";
import ScanDialog from "~/components/Dialog";
// import Webcam from "react-webcam";
// import { ClientOnly } from "remix-utils/client-only";

function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <footer className="sticky bottom-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-end px-4 py-4">
        <Link to="/" className="flex flex-col items-center">
          <Home
            className={`h-6 w-6 ${
              currentPath === "/" ? "text-green-600" : "text-gray-500"
            }`}
          />
          <span className="text-xs mt-1 text-gray-500 sr-only">Home</span>
        </Link>
        <Link to="/social" className="flex flex-col items-center">
          <Users
            className={`h-6 w-6 ${
              currentPath === "/social" ? "text-green-600" : "text-gray-500"
            }`}
          />
          <span className="text-xs mt-1 text-gray-500 sr-only">Social</span>
        </Link>
        {/* place holder */}
        <span className="w-16" />
        <Link to="/history" className="flex flex-col items-center">
          <Wallet
            className={`h-6 w-6 ${
              currentPath === "/history" ? "text-green-600" : "text-gray-500"
            }`}
          />
          <span className="text-xs mt-1 text-gray-500 sr-only">History</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center">
          <CircleUserRound
            className={`h-6 w-6 ${
              currentPath === "/profile" ? "text-green-600" : "text-gray-500"
            }`}
          />
          <span className="text-xs mt-1 text-gray-500 sr-only">Profile</span>
        </Link>
        <ScanDialog />
      </div>
    </footer>
  );
}

export default Footer;