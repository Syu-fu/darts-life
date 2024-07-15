import React, { useState, useEffect } from "react";
import {
  getZeroOneBullHitsCount,
  getLatestZeroOneBullStatsDate,
  getLast14DaysBullCount,
} from "../services/zeroOneBullDB";
import { calculateAndSaveZeroOneBullStats } from "../utils/calculateZeroOneBullStats";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHead,
} from "../components/ui/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ZeroOneStatsPage: React.FC = () => {
  const [dailyStats, setDailyStats] = useState<string[]>([]);
  const [cumulativeStats, setCumulativeStats] = useState<{
    zeroHits: number;
    oneHits: number;
    twoHits: number;
    threeHits: number;
  } | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const latestDate = await getLatestZeroOneBullStatsDate();
      const today = new Date().toISOString().split("T")[0];

      if (latestDate) {
        const calcDate = new Date(latestDate);

        while (calcDate <= new Date(today)) {
          const dateStr = calcDate.toISOString().split("T")[0];
          await calculateAndSaveZeroOneBullStats(dateStr);
          calcDate.setDate(calcDate.getDate() + 1);
        }
      } else {
        await calculateAndSaveZeroOneBullStats(today);
      }

      const dailyStats = await getLast14DaysBullCount();
      setDailyStats(dailyStats);

      const cumulative = await getZeroOneBullHitsCount();
      setCumulativeStats(cumulative);
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold my-4 mx-2">01 Bull Statistics</h1>
      <Accordion type="single" collapsible className="mx-4">
        <AccordionItem value="item1">
          <AccordionTrigger className="text-lg font-medium">
            Cumulative Data
          </AccordionTrigger>
          <AccordionContent>
            {cumulativeStats && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Stats</TableHead>
                    <TableHead>Count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableRow>
                  <TableCell>Bull Count</TableCell>
                  <TableCell>
                    {cumulativeStats.oneHits +
                      cumulativeStats.twoHits * 2 +
                      cumulativeStats.threeHits * 3}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>LowTon Count Count</TableCell>
                  <TableCell>{cumulativeStats.twoHits}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hat Count</TableCell>
                  <TableCell>{cumulativeStats.threeHits}</TableCell>
                </TableRow>
              </Table>
            )}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item2">
          <AccordionTrigger className="text-lg font-medium mt-4">
            Daily Bull Count
          </AccordionTrigger>
          <AccordionContent>
            <LineChart width={600} height={300} data={dailyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="total_bull_count"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ZeroOneStatsPage;
