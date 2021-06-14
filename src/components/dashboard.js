import React from 'react'
import MaterialTable from "material-table";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { ResponsiveLine } from '@nivo/line'
import './styles.css'


const Dashboard = () => {
	const rateOptions = [
		{
		  value: 'one',
		  label: '1%',
		},
		{
		  value: 'two',
		  label: '2%',
		},
		{
		  value: 'three',
		  label: '3%',
		},
		{
		  value: 'four',
		  label: '4%',
		},
	];

	const yearOptions = [
		{
		  value: 'one',
		  label: '1',
		},
		{
		  value: 'two',
		  label: '2',
		},
		{
		  value: 'three',
		  label: '3',
		},
		{
		  value: 'four',
		  label: '4',
		},
	];

	const [rate, setRate] = React.useState('one');

	const handleChangeRate = (event) => {
		setRate(event.target.value);
	};

	const [year, setYear] = React.useState('one');

	const handleChangeYear = (event) => {
		setYear(event.target.value);
	};

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
						title="24 Hour Summary"
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
				<Grid item xs={4}>
					<Card bg="primary" text="white" style={{ width: '18rem' }}>
						<CardContent style={{ padding: '0 25px 10px 25px' }}>
							<h3> Interest Rate Calculator </h3>
							<TextField
								label="Investment Amount"
								id="outlined-margin-dense"
								defaultValue="1000"
								margin="dense"
								variant="outlined"
							/>
							<TextField
								id="outlined-select-currency-native"
								select
								label="Interest Rate"
								margin="dense"
								value={rate}
								onChange={handleChangeRate}
								SelectProps={{
									native: true,
								}}
								helperText="Please select your rate"
								variant="outlined"
								>
								{rateOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
       						</TextField>
							<TextField
								id="outlined-select-currency-native"
								select
								label="Years"
								margin="dense"
								value={year}
								onChange={handleChangeYear}
								SelectProps={{
									native: true,
								}}
								helperText="How many years?"
								variant="outlined"
								>
								{yearOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
       						</TextField>

						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<div style={{ height: '50%' }}>	
				<h3>24 Hour Profits</h3>
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
		</div>
	)
}

export default Dashboard
