import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { AlertTriangle } from 'lucide-react';

const ResellerBlacklistToggle = ({ onToggle }) => {
  const [isReseller, setIsReseller] = useState(true);

  const handleToggle = (checked) => {
    setIsReseller(checked);
    if (onToggle) {
      onToggle(checked);
    }
  };

  return (
    <div className="p-6 rounded-xl bg-amber-900/20 border border-amber-500/30 mt-6">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-lg font-semibold text-amber-400 mb-3">Reseller Blacklist Acknowledgment</h4>
          <p className="text-gray-300 mb-4">
            As a reseller, you must avoid using the following hosting providers to protect our brand integrity:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-1">
            <li>Kanhalabs By Manak Jangid</li>
            <li>Ateex Cloud</li>
            <li>Rippu</li>
            <li>Webyne Datacenter</li>
            <li>Bharat Datacenter</li>
          </ul>
          <p className="text-gray-300 mb-4">
            <strong>Important:</strong> If found violating this policy, your reseller services will be suspended and a refund will be issued for the remaining days.
          </p>
          <div className="flex items-center space-x-2 mt-4">
            <Checkbox 
              id="reseller-toggle" 
              checked={isReseller} 
              onCheckedChange={handleToggle}
              className="h-5 w-5 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
            />
            <Label htmlFor="reseller-toggle" className="text-white font-medium cursor-pointer">
              I acknowledge these terms and choose to be a XiteNodes Reseller
            </Label>
          </div>
          {!isReseller && (
            <div className="mt-4 p-3 bg-red-900/30 border border-red-500/30 rounded-md">
              <p className="text-red-300 text-sm">
                You have chosen not to be a XiteNodes Reseller. You may use the blacklisted providers, but you will not have access to our reseller program benefits.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResellerBlacklistToggle;