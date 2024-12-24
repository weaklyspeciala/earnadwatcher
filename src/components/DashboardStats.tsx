import { Card } from "@/components/ui/card";

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="p-6 animate-fadeIn">
        <h3 className="text-lg font-semibold text-gray-700">Total Earnings</h3>
        <p className="text-3xl font-bold text-primary">$0.00</p>
        <p className="text-sm text-gray-500 mt-2">Lifetime earnings</p>
      </Card>
      
      <Card className="p-6 animate-fadeIn">
        <h3 className="text-lg font-semibold text-gray-700">Available Ads</h3>
        <p className="text-3xl font-bold text-secondary">5</p>
        <p className="text-sm text-gray-500 mt-2">Ready to watch</p>
      </Card>
      
      <Card className="p-6 animate-fadeIn">
        <h3 className="text-lg font-semibold text-gray-700">Next Payout</h3>
        <p className="text-3xl font-bold text-accent">7 days</p>
        <p className="text-sm text-gray-500 mt-2">Minimum $5.00 required</p>
      </Card>
    </div>
  );
};