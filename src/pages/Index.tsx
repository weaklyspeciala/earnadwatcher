import { Header } from "@/components/Header";
import { DashboardStats } from "@/components/DashboardStats";
import { GuidelinesList } from "@/components/GuidelinesList";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const renderContent = () => {
    switch (currentPath) {
      case "/guidelines":
        return <GuidelinesList />;
      case "/earnings":
        return (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Your Earnings</h2>
            <DashboardStats />
          </div>
        );
      case "/watch":
        return (
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Watch Ads</h2>
            <p className="text-gray-600 mb-8">
              Watch ads to earn rewards. Make sure to follow our guidelines for a better experience.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/guidelines")}
              variant="outline"
              className="mr-4"
            >
              View Guidelines
            </Button>
            <Button size="lg" disabled>
              Start Watching (Coming Soon)
            </Button>
          </div>
        );
      default:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4">
                Earn Rewards Watching Ads
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Watch ads, earn points, and get paid. It's that simple.
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/watch")}
                className="bg-secondary hover:bg-secondary/90"
              >
                Start Earning Now
              </Button>
            </div>
            <DashboardStats />
            <GuidelinesList />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">{renderContent()}</main>
    </div>
  );
};

export default Index;