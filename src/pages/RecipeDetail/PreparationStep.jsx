import React from 'react'
import { steps } from '../../data/mockdata';

export default function PreparationStep() {
  return (
   <section className="mb-16">
              <h3 className="font-display text-3xl font-bold mb-10">Preparation</h3>
              <div className="space-y-12">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-outline-variant/10 text-primary flex items-center justify-center font-display text-xl font-black">
                      {i + 1}
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-display text-2xl font-bold text-on-surface">{step.title}</h4>
                      <p className="text-lg text-on-surface-variant leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
  )
}
