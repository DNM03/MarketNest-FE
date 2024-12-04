import React from "react";
import { Check } from "lucide-react";

interface Step {
  label: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

const Stepper = ({ steps, currentStep, className = "" }: StepperProps) => {
  return (
    <div className={`w-full py-4 ${className}`}>
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = currentStep > index;
          const isCurrent = currentStep === index;
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="flex flex-1 items-center">
              {/* Step circle and label */}
              <div className="relative flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                    ${
                      isCompleted
                        ? "bg-slate-500 border-slate-500"
                        : isCurrent
                        ? "border-slate-500 text-slate-500 bg-white"
                        : "border-slate-300 text-slate-300 bg-white"
                    }`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span
                      className={`text-sm ${
                        isCurrent ? "text-slate-500" : "text-gray-500"
                      }`}
                    >
                      {index + 1}
                    </span>
                  )}
                </div>

                {/* Step label and description */}
                <div className="mt-2 text-center">
                  <div
                    className={`text-sm font-medium 
                    ${
                      isCompleted || isCurrent
                        ? "text-slate-900"
                        : "text-slate-500"
                    }`}
                  >
                    {step.label}
                  </div>
                  {step.description && (
                    <div className="text-xs text-slate-500 mt-1">
                      {step.description}
                    </div>
                  )}
                </div>

                {/* Connector line */}
                {!isLast && (
                  <div
                    className={`absolute top-4 w-full left-1/2 h-0.5 z-[-1]
                    ${isCompleted ? "bg-slate-500" : "bg-slate-300"}`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
