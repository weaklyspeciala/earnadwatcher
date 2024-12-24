import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const GuidelinesList = () => {
  const guidelines = [
    "Watch ads completely without skipping",
    "Ensure you're actively engaged during ad playback",
    "Only watch ads when you're genuinely available",
    "Don't use automated tools or scripts",
    "One account per person",
    "Report any technical issues immediately",
  ];

  return (
    <Card className="p-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-primary mb-6">Platform Guidelines</h2>
      <div className="space-y-4">
        {guidelines.map((guideline, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
            <p className="text-gray-700">{guideline}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};