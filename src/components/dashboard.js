import React from 'react'
import MaterialTable from "material-table";
import Grid from '@material-ui/core/Grid';
import { ResponsiveLine } from '@nivo/line'
import './styles.css'


const Dashboard = () => {
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
			<Grid container spacing={3}>
				<Grid item xs={4}>
					<MaterialTable
						title="Daily Summary"
						options={{
							paging: false,
							header: false,
							search: false,
							cellStyle: {
								textAlign: "left",
								BorderAll: 1
							},
							
						}}
						columns={[
							{ title: "Name", field: "name" },
							{ title: "Value", field: "value" },
							
						]}
						data={[
							{
								name: "Total Trades",
								value: "510",
							},
							{
								name: "PnL($)",
								value: "20$",
							},
							{
								name: "PnL(%)",
								value: "10%",
							},
						]}
					/>
				</Grid>
				<Grid item xs={4}>
					<MaterialTable
						title="All Time Summary"
						options={{
							paging: false,
							header: false,
							search: false,
							cellStyle: {
								textAlign: "left",
								BorderAll: 1
							},
							
						}}
						columns={[
							{ title: "Name", field: "name" },
							{ title: "Value", field: "value" },
							
						]}
						data={[
							{
								name: "Portfolio Size",
								value: "51000$",
							},
							{
								name: "PnL($)",
								value: "20$",
							},
							{
								name: "PnL(%)",
								value: "10%",
							},
						]}
					/>
				</Grid>
			</Grid>
			<div style={{ height: '50%' }}>	
				<h3>Daily Profits</h3>
				<ResponsiveLine
					data={dataLine}
					margin={{ right: 40, bottom: 50, left: 80 }}
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
						legend: 'PnL in $',
						legendOffset: -40,
						legendPosition: 'middle'
					}}
				/>
			</div>
			<br />
			<div style={{ height: '50%' }}>	
				<h3>Portfolio Size</h3>
				<ResponsiveLine
					data={dataLine}
					margin={{ right: 40, bottom: 50, left: 80 }}
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
						legend: 'Balance in $',
						legendOffset: -40,
						legendPosition: 'middle'
					}}
				/>
			</div>
			<br />
			<div style={{ height: '50%' }}>	
				<h3>Daily Return</h3>
				<ResponsiveLine
					data={dataLine}
					margin={{ right: 40, bottom: 50, left: 80 }}
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
						legend: 'Balance in $',
						legendOffset: -40,
						legendPosition: 'middle'
					}}
				/>
			</div>
		</div>
	)
}

export default Dashboard
