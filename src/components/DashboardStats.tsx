import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./AuthProvider";

export const DashboardStats = () => {
  const { session } = useAuth();

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile", session?.user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session?.user?.id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="p-6 animate-fadeIn">
        <h3 className="text-lg font-semibold text-gray-700">Total Earnings</h3>
        {isLoading ? (
          <Skeleton className="h-10 w-24 mt-2" />
        ) : (
          <>
            <p className="text-3xl font-bold text-primary">${profile?.total_earnings?.toFixed(2) || "0.00"}</p>
            <p className="text-sm text-gray-500 mt-2">Lifetime earnings</p>
          </>
        )}
      </Card>
      
      <Card className="p-6 animate-fadeIn">
        <h3 className="text-lg font-semibold text-gray-700">Available Ads</h3>
        {isLoading ? (
          <Skeleton className="h-10 w-24 mt-2" />
        ) : (
          <>
            <p className="text-3xl font-bold text-secondary">5</p>
            <p className="text-sm text-gray-500 mt-2">Ready to watch</p>
          </>
        )}
      </Card>
      
      <Card className="p-6 animate-fadeIn">
        <h3 className="text-lg font-semibold text-gray-700">Next Payout</h3>
        {isLoading ? (
          <Skeleton className="h-10 w-24 mt-2" />
        ) : (
          <>
            <p className="text-3xl font-bold text-accent">7 days</p>
            <p className="text-sm text-gray-500 mt-2">Minimum $5.00 required</p>
          </>
        )}
      </Card>
    </div>
  );
};