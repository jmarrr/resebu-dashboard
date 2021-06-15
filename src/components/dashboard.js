import React, { useState, useEffect } from 'react'
import MaterialTable from "material-table";
import Grid from '@material-ui/core/Grid';
import dayjs from 'dayjs';
import dayjsPluginUTC from 'dayjs/plugin/utc';
import { ResponsiveLine } from '@nivo/line'
import db from './firebase'
import './styles.css'

dayjs.extend(dayjsPluginUTC)

const Dashboard = () => {
    const [totalTrades, setTotalTrades] = useState(0);
	const [pnlDaily, setpnlDaily] = useState(0);
	const [pnlPercentDaily, setpnlPercentDaily] = useState(0);
	const [pnlAllTime, setpnlAllTime] = useState(0);
	const [pnlAllTimePercent, setpnlPercentAllTime] = useState(0);
	const [startingPortSize, setstartingPortSize] = useState(0);
	const [prevPortSize, setprevPortSize] = useState(0);
	const [portSize, setPortSize] = useState(0);

	const[ dailyProfits, setdailyProfits] = useState([{"data":[]}])
	const[ portSnapshot, setportSnapshot] = useState([{"data":[]}])
	const[ returnSnapshot, setreturnSnapshot] = useState([{"data":[]}])

	const refPortfolio = db.firestore().collection("portfolio")
	refPortfolio.onSnapshot((snap) => {
		snap.forEach((doc) => {
			setPortSize(doc.data().currentBalance)
			setprevPortSize(doc.data().previousDayBalance)
			setstartingPortSize(doc.data().startingBalance)
			setpnlPercentDaily(((portSize-prevPortSize)/prevPortSize * 100).toFixed(2))
			setpnlPercentAllTime(((portSize-startingPortSize)/startingPortSize * 100).toFixed(2))
		})
	})
	
	const refTradesAllTime = db.firestore().collection("trades")
	refTradesAllTime.onSnapshot((snap) => {
		let pnlSumAllTime = 0
		snap.forEach((doc) => {
			pnlSumAllTime += doc.data().pnl
			
		})
		setpnlAllTime(pnlSumAllTime)
	})

	useEffect(() => {
		const refPortfolioSnapshot = db.firestore().collection("portSnapshot").orderBy('date')
		refPortfolioSnapshot.onSnapshot((snap) => {
			let portSnap = [{"data":[]}]
			snap.forEach((doc) => {
				portSnap[0].data.push({"x": dayjs(doc.data().date.toDate()).format('MM-D-YYYY'), "y": doc.data().balance })
			})
			setportSnapshot(portSnap)
		})
	}, []);

	useEffect(() => {
		const refReturnSnapshot = db.firestore().collection("returnSnapshot").orderBy('date')
		refReturnSnapshot.onSnapshot((snap) => {
			let retSnap = [{"data":[]}]
			snap.forEach((doc) => {
				retSnap[0].data.push({"x": dayjs(doc.data().date.toDate()).format('MM-D-YYYY'), "y": doc.data().return })
			})
			setreturnSnapshot(retSnap)
		})
	}, []);

	useEffect(() => {
		const refTradesDaily = db.firestore().collection("trades").where('date', '>', new Date(new Date().setHours(0,0,0,0)))
		refTradesDaily.onSnapshot((snap) => {
			let tempdailyProfits = [{"data":[]}]
			let pnlSum = 0

			snap.forEach((doc) => {
				pnlSum += doc.data().pnl
				tempdailyProfits[0].data.push({"x": dayjs(doc.data().date.toDate()).format('H:mm'), "y": pnlSum})
			})
			
			setdailyProfits(tempdailyProfits);
			setTotalTrades(snap.size)
			setpnlDaily(pnlSum)
		})
	}, []);

	console.log(dailyProfits[0].data)

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
								value: totalTrades,
							},
							{
								name: "PnL($)",
								value: `$${pnlDaily.toFixed(2)}`,
							},
							{
								name: "PnL(%)",
								value: `${pnlPercentDaily}%`,
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
								value: `$${portSize.toLocaleString('USD')}`,
							},
							{
								name: "PnL($)",
								value: `$${pnlAllTime.toFixed(2)}`,
							},
							{
								name: "PnL(%)",
								value: `${pnlAllTimePercent}%`,
							},
						]}
					/>
				</Grid>
			</Grid>
			<div style={{ height: '50%' }}>	
				<h3>Daily Profits</h3>
				<ResponsiveLine
					data={dailyProfits}
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
						format: function(value){ 
							return `$${value}`;
						},
						orient: 'left',
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'PnL',
						legendOffset: -40,
						legendPosition: 'middle'
					}}
				/>
			</div>
			<br />
			<div style={{ height: '50%' }}>	
				<h3>Daily Return</h3>
				<ResponsiveLine
					data={returnSnapshot}
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
						format: function(value){ 
							return `${value}%`;
						},
						orient: 'left',
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'Percent',
						legendOffset: -50,
						legendPosition: 'middle'
					}}
				/>
			</div>
			<br />
			<div style={{ height: '50%' }}>	
				<h3>Portfolio Size</h3>
				<ResponsiveLine
					data={portSnapshot}
					margin={{ right: 40, bottom: 50, left: 80 }}
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
						format: function(value){ 
							return `$${value.toLocaleString('USD')}`;
						},
						orient: 'left',
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'Balance in $',
						legendOffset: -60,
						legendPosition: 'middle'
					}}
				/>
			</div>
		
		</div>
	)
}

export default Dashboard
