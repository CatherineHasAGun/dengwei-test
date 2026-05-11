"use client";

import { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
} from "recharts";
import {
  DIMENSION_KEYS,
  type DimensionScores,
  type DimensionKey,
} from "@/lib/questions";

type RadarChartProps = {
  dimensions: DimensionScores;
};

const radarLabels: Record<DimensionKey, string> = {
  experiencePressure: "经验压迫",
  controlBoundary: "控制边界",
  cognitiveRigidity: "认知开放",
  empathyDeficit: "共情倾听",
  judgmentalSuperiority: "评价优越",
};

export function RadarChart({ dimensions }: RadarChartProps) {
  const [mounted, setMounted] = useState(false);
  const data = DIMENSION_KEYS.map((key) => ({
    dimension: radarLabels[key],
    score: dimensions[key],
  }));

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="rounded-[24px] border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur">
      <h2 className="text-lg font-black text-ink">五维雷达图</h2>
      <div className="mt-4 h-72 w-full">
        {mounted ? (
          <ResponsiveContainer height="100%" width="100%">
            <RechartsRadarChart
              data={data}
              margin={{ bottom: 18, left: 36, right: 36, top: 18 }}
            >
              <PolarGrid stroke="#FFD166" />
              <PolarAngleAxis
                dataKey="dimension"
                tick={{ fill: "#2D2D2D", fontSize: 10, fontWeight: 700 }}
              />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
              <Radar
                dataKey="score"
                fill="#FF6B9D"
                fillOpacity={0.32}
                stroke="#FF6B9D"
                strokeWidth={3}
              />
            </RechartsRadarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center rounded-2xl bg-cream text-sm font-black text-ink/55">
            雷达图加载中
          </div>
        )}
      </div>
    </section>
  );
}
