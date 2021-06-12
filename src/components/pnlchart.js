import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveLine } from '@nivo/line'
import './styles.css'


function pnlchart() {
	const dataPie = [
		{
		  "id": "BTC",
		  "label": "BTC",
		  "value": 562,
		  "color": "hsl(57, 70%, 50%)"
		},
		{
		  "id": "ETH",
		  "label": "ETH",
		  "value": 88,
		  "color": "hsl(289, 70%, 50%)"
		},
		{
		  "id": "XRP",
		  "label": "XRP",
		  "value": 413,
		  "color": "hsl(88, 70%, 50%)"
		},
		{
		  "id": "LTC",
		  "label": "LTC",
		  "value": 435,
		  "color": "hsl(350, 70%, 50%)"
		},
		{
		  "id": "SOL",
		  "label": "SOL",
		  "value": 377,
		  "color": "hsl(279, 70%, 50%)"
		}
	]

	const dataLine = [
		{
		  "id": "germany",
		  "color": "hsl(195, 53%, 79%)",
		  "data": [
			{
			  "x": "plane",
			  "y": 64
			},
			{
			  "x": "helicopter",
			  "y": 128
			},
			{
			  "x": "boat",
			  "y": 228
			},
			{
			  "x": "train",
			  "y": 169
			},
			{
			  "x": "subway",
			  "y": 221
			},
			{
			  "x": "bus",
			  "y": 260
			},
			{
			  "x": "car",
			  "y": 263
			},
			{
			  "x": "moto",
			  "y": 201
			},
			{
			  "x": "bicycle",
			  "y": 278
			},
			{
			  "x": "horse",
			  "y": 193
			},
			{
			  "x": "skateboard",
			  "y": 201
			},
			{
			  "x": "others",
			  "y": 233
			}
		  ]
		},
	] 

	return (
		<div style={{ height: '100%', width: '100%' }}>
			<h2>All Time PnL</h2>
			<div style={{ height: '45%', width: '100%' }}>
				<ResponsivePie
					data={dataPie}
					valueFormat={value =>
						`${Number(value).toLocaleString('dollar', {
							minimumFractionDigits: 2,
						})} $`
					}
					margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
					innerRadius={0.5}
					padAngle={0.7}
					cornerRadius={3}
					activeOuterRadiusOffset={8}
					borderWidth={1}
					borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
					arcLinkLabelsSkipAngle={10}
					arcLinkLabelsTextColor="#333333"
					arcLinkLabelsThickness={2}
					arcLinkLabelsColor={{ from: 'color' }}
					arcLabelsSkipAngle={10}
					arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
					defs={[
						{
							id: 'dots',
							type: 'patternDots',
							background: 'inherit',
							color: 'rgba(255, 255, 255, 0.3)',
							size: 4,
							padding: 1,
							stagger: true
						},
						{
							id: 'lines',
							type: 'patternLines',
							background: 'inherit',
							color: 'rgba(255, 255, 255, 0.3)',
							rotation: -45,
							lineWidth: 6,
							spacing: 10
						}
					]}
					fill={[
						{
							match: {
								id: 'ruby'
							},
							id: 'dots'
						},
						{
							match: {
								id: 'c'
							},
							id: 'dots'
						},
						{
							match: {
								id: 'go'
							},
							id: 'dots'
						},
						{
							match: {
								id: 'python'
							},
							id: 'dots'
						},
						{
							match: {
								id: 'scala'
							},
							id: 'lines'
						},
						{
							match: {
								id: 'lisp'
							},
							id: 'lines'
						},
						{
							match: {
								id: 'elixir'
							},
							id: 'lines'
						},
						{
							match: {
								id: 'javascript'
							},
							id: 'lines'
						}
					]}
					legends={[
						{
							anchor: 'bottom',
							direction: 'row',
							justify: false,
							translateX: 0,
							translateY: 56,
							itemsSpacing: 0,
							itemWidth: 100,
							itemHeight: 18,
							itemTextColor: '#999',
							itemDirection: 'left-to-right',
							itemOpacity: 1,
							symbolSize: 18,
							symbolShape: 'circle',
							effects: [
								{
									on: 'hover',
									style: {
										itemTextColor: '#000'
									}
								}
							]
						}
					]}
				/>
			</div>
			<div style={{ height: '45%', width: '100%' }}>
			<ResponsiveLine
				data={dataLine}
				margin={{ top: 50, right: 40, bottom: 50, left: 80 }}
				yFormat=" >-.2f"
				axisTop={null}
				axisRight={null}
				lineWidth={1}
				enableArea={true}
				enablePoints={false}
				useMesh={true}
				colors={{ scheme: 'paired' }}
				axisBottom={{
					orient: 'bottom',
					tickSize: 1,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Date',
					legendOffset: 36,
					legendPosition: 'middle'
				}}
				axisLeft={{
					orient: 'left',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Balance',
					legendOffset: -40,
					legendPosition: 'middle'
				}}
			/>
			</div>
		</div>
	);
}

export default pnlchart
