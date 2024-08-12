'use client'

import DoughnutChart from "@/app/component/chart/doughnutChart";
import PolarChart from "@/app/component/chart/polarChart";
import TableDemo from "@/app/component/chart/tableDemo";
import { WhiteBox } from "@/app/common/box/whiteBox";
import HalfDoughnutChart from "@/app/component/chart/colorPerChart";
import DoubelBarChart from "@/app/component/chart/doubelBarChart";
import ColorPerChart from "@/app/component/chart/colorPerChart";
import RadarChart from "@/app/component/chart/radarChart";

export default function Dashboard() {
    return (
        <div className="w-screen h-screen flex justify-center">
            <div className="w-[80%] content-center text-center">
                <div className="grid grid-cols-4 gap-3 ">
                    <div className="bg-pebble-100 text-white rounded-lg">
                        <p>9%</p>
                        <p>오늘의 접속량</p>
                    </div>
                    <div className="bg-pebble-200 text-white rounded-lg">
                        <p>23</p>
                        <p>오늘의 접속자</p>
                    </div>
                    <div className="bg-pebble-300 rounded-lg">
                        <p>40,567</p>
                        <p>오늘의 매수량</p>
                    </div>
                    <div className="bg-pebble-400 rounded-lg">
                        <p>31,567</p>
                        <p>오늘의 매도량</p>
                    </div>
                    <div className=""><WhiteBox>
                        <div className="w-[100%] flex-col">
                            <p>일별 접속자수 </p>
                            <DoubelBarChart />
                        </div>
                    </WhiteBox>
                    </div>
                    <div className=""><WhiteBox><HalfDoughnutChart /></WhiteBox></div>
                    <div className=""><WhiteBox><RadarChart /></WhiteBox></div>
                    <div className=""><WhiteBox><DoubelBarChart /></WhiteBox></div>

                    <div className="grid col-span-2"><WhiteBox><ColorPerChart /></WhiteBox></div>
                    <div className="grid col-span-2"><WhiteBox><PolarChart /></WhiteBox></div>
                </div>
            </div>
        </div>
    )
}

