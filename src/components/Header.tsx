import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">AdRewards</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/guidelines")}
          >
            Guidelines
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/earnings")}
          >
            Earnings
          </Button>
          <Button
            variant="default"
            onClick={() => navigate("/watch")}
          >
            Watch Ads
          </Button>
        </nav>
      </div>
    </header>
  );
};