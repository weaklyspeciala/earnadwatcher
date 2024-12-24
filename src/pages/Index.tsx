import { Header } from "@/components/Header";
import { DashboardStats } from "@/components/DashboardStats";
import { GuidelinesList } from "@/components/GuidelinesList";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
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
      </main>
    </div>
  );
};

export default Index;