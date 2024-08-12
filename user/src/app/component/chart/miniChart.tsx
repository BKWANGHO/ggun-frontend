'use client'
import { Bar, Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Chart from 'chart.js/auto';
import { useQuery } from '@tanstack/react-query';
import { fetchItemsDetail } from '@/app/service/items/items.api';
Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

    export const stockData =[
        {date:'24-06-01', value: "200"},
        {date:'24-06-02', value: "310"},
        {date:'24-06-03', value: "420"},
        {date:'24-06-04', value: "725"},
        {date:'24-06-05', value: "920"},
        {date:'24-06-06', value: "530"},
        {date:'24-06-07', value: "1200"},
        {date:'24-06-04', value: "725"},
        {date:'24-06-05', value: "920"},
        {date:'24-06-06', value: "530"},
        {date:'24-06-07', value: "1200"},
    ]

function MiniChart({ props }: {props: string}){

    const handleItemsDetail = async (): Promise<IItems[]> => {
        const response = await fetchItemsDetail(props)
        if (typeof response === 'object' && 'status' in response) {
            throw new Error(`Error: ${response.status}`);
          }
        return response;
    }

    const { data:itemsList } = useQuery<IItems[]>(
        {
            queryKey: ["itemDetail"],
            queryFn: handleItemsDetail,
        }
    );

    const labels = itemsList&&itemsList.map((i) => i.date)
    const data: any =
    {
        labels: labels,
        datasets: [
            {
                pointStyle: false,
                label: '',
                type:'line',
                data: itemsList&&itemsList.map((i) => i.close),
                borderColor : "red",
                borderWidth : 1,
            },
        ],
    };
    const oprions: any = {
        scales: {
            x: {
                display : false,
            },
            y: {
                display : false,
            },
        },
        plugins: {
            legend: {
                display:false,
              },
              datalabels :{
                display : false,
            },
            }
    }


    return (
        <Bar data={data} options={oprions} className='w-full'></Bar>
    );
}
export default MiniChart;
