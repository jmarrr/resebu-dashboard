import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { ResponsiveLine } from '@nivo/line'
import db from './firebase'
import './styles.css'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("America/Winnipeg")

const Dashboard = () => {
	const [pnlDaily, setpnlDaily] = useState(0);
	const [pnlPercentDaily, setpnlPercentDaily] = useState(0);
	const [pnlAllTime, setpnlAllTime] = useState(0);
	const [pnlAllTimePercent, setpnlPercentAllTime] = useState(0);
	const [startingPortSize, setstartingPortSize] = useState(0);
	const [prevPortSize, setprevPortSize] = useState(0);
	const [portSize, setPortSize] = useState(0);

	const[ dailyProfits, setdailyProfits] = useState([{"data":[]}])
	const[ portSnapshot, setportSnapshot] = useState([{"data":[]}])
	const[ returnPercentSnapshot, setreturnPercentSnapshot] = useState([{"data":[]}])
	const[ returnDollarSnapshot, setreturnDollarSnapshot] = useState([{"data":[]}])

	const refPortfolio = db.firestore().collection("portfolio")
	refPortfolio.onSnapshot((snap) => {
		snap.forEach((doc) => {
			setPortSize(doc.data().currentBalance)
			setprevPortSize(doc.data().previousDayBalance)
			setstartingPortSize(doc.data().startingBalance)
			setpnlPercentDaily(((portSize-prevPortSize)/prevPortSize * 100).toFixed(2))
			setpnlPercentAllTime(((portSize-startingPortSize)/startingPortSize * 100).toFixed(2))
			setpnlAllTime(portSize-startingPortSize)
		})
	})
	
	useEffect(() => {
		const refPortfolioSnapshot = db.firestore().collection("portSnapshot").orderBy('date')
		refPortfolioSnapshot.onSnapshot((snap) => {
			let portSnap = [{"data":[]}]
			snap.forEach((doc) => {
				portSnap[0].data.push({"x": dayjs(doc.data().date.toDate()).tz().format('MM-D-YYYY H:mm'), "y": doc.data().balance })
			})
			setportSnapshot(portSnap)
		})
	}, []);
	

	useEffect(() => {
		const refReturnPercentSnapshot = db.firestore().collection("returnsPercent").orderBy('date')
		refReturnPercentSnapshot.onSnapshot((snap) => {
			let retSnap = [{"data":[]}]
			snap.forEach((doc) => {
				retSnap[0].data.push({"x": dayjs(doc.data().date.toDate()).tz().format('MM-D-YYYY H:mm'), "y": doc.data().return })
			})
			setreturnPercentSnapshot(retSnap)
		})
	}, []);

	useEffect(() => {
		const refReturnDollarSnapshot = db.firestore().collection("returnsDollar").orderBy('date')
		refReturnDollarSnapshot.onSnapshot((snap) => {
			let retSnap = [{"data":[]}]
			snap.forEach((doc) => {
				retSnap[0].data.push({"x": dayjs(doc.data().date.toDate()).tz().format('MM-D-YYYY H:mm'), "y": doc.data().return })
			})
			setreturnDollarSnapshot(retSnap)
		})
	}, []);

	useEffect(() => {
		const refTradesDaily = db.firestore().collection("trades").where('date', '>', new Date(new Date().setHours(1,0,0,0))) //adjusted for timezone
		refTradesDaily.onSnapshot((snap) => {
			let tempdailyProfits = [{"data":[]}]
			let pnlSum = 0

			snap.forEach((doc) => {
				pnlSum += doc.data().pnl
				tempdailyProfits[0].data.push({"x": dayjs(doc.data().date.toDate()).tz().format('H:mm'), "y": pnlSum})
			})
			
			setdailyProfits(tempdailyProfits);
			setpnlDaily(pnlSum)
		})
	}, []);


	return (	
		<Grid container spacing={3}> 
			<Grid item xs={12}>
				<Card bg="primary" text="white">
					<CardContent style={{ padding: '30px' }}>
				<h3 style={{ marginTop: '0' }}>Portfolio Summary</h3>
				<Grid container spacing={3} style={{ textAlign: 'center' }}>
					<Grid item xs={12} md={3}>
						<Typography color="textSecondary" gutterBottom>
							Daily PnL ($)
						</Typography>
						<Typography variant="h4" component="h2">
							${(pnlDaily).toFixed(2)}
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography color="textSecondary" gutterBottom>
							Daily PnL (%)
						</Typography>
						<Typography variant="h4" component="h2">
							{pnlPercentDaily}%
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography color="textSecondary" gutterBottom>
							Total PnL ($)
						</Typography>
						<Typography variant="h4" component="h2">
							${(pnlAllTime).toFixed(2)}
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography color="textSecondary" gutterBottom>
							Total PnL (%)
						</Typography>
						<Typography variant="h4" component="h2">
							{(pnlAllTimePercent)}%
						</Typography>
					</Grid>
				</Grid>
				</CardContent>
				</Card>
			</Grid>
			<Grid container spacing={3} ></Grid>
				<Grid item xs={12} md={6}>
					<h3>Daily $ Return </h3>
					<div style={{ width: '100%', height: '90%' }}>
						<ResponsiveLine
							data={returnDollarSnapshot}
							curve="monotoneX"
							margin={{ top: 10, right: 0, bottom: 50, left: 50 }}
							axisTop={null}
							axisRight={null}
							lineWidth={1}
							enableArea={true}
							enablePoints={false}
							useMesh={true}
							colors={{ scheme: 'paired' }}
							xScale={{ type: "time", format: "%m-%d-%Y %H:%M", useUTC: false, precision: 'day' }}
							xFormat="time:%m-%d-%Y %H:%M"
							axisBottom={{
								orient: 'bottom',
								format: "%b %d %Y",
								tickValues: "every 1 day",
								tickSize: 1,
								tickPadding: 5,
								tickRotation: -10,
								legend: 'Date',
								legendOffset: 40,
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
				</Grid>
				<Grid item xs={12} md={6}>
					<h3>Daily % Return</h3>
					<div style={{ width: '100%', height: '90%' }}>
						<ResponsiveLine
							data={returnPercentSnapshot}
							curve="monotoneX"
							margin={{ top: 10, right: 0, bottom: 50, left: 80 }}
							yFormat=" >-.2f"
							axisTop={null}
							axisRight={null}
							lineWidth={1}
							enableArea={false}
							enablePoints={false}
							useMesh={true}
							colors={{ scheme: 'paired' }}
							xScale={{ type: "time", format: "%m-%d-%Y %H:%M", useUTC: false, precision: 'day' }}
							xFormat="time:%m-%d-%Y %H:%M"
							axisBottom={{
								orient: 'bottom',
								format: "%b %d %Y",
								tickValues: "every 1 day",
								tickSize: 1,
								tickPadding: 5,
								tickRotation: -10,
								legend: 'Date',
								legendOffset: 40,
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
				</Grid>
			<Grid container spacing={3} justify="center" >
				<Grid item xs={12} md={6}>
				<h3>Daily PnL</h3>
					<div style={{ width: '100%', height: '90%' }}>
						<ResponsiveLine
							data={dailyProfits}
							margin={{ top: 10, right: 0, bottom: 50, left: 50 }}
							axisTop={null}
							axisRight={null}
							lineWidth={1}
							enableArea={true}
							enablePoints={false}
							useMesh={true}
							colors={{ scheme: 'paired' }}
							xScale={{ type: "time", format: "%H:%M", useUTC: false, precision: 'minute'}}
							xFormat="time:%H:%M"
							axisBottom={{
								orient: 'bottom',
								format: "%H:%m",
								tickValues: "every 1 hours",
								tickSize: 1,
								tickPadding: 5,
								tickRotation: -10,
								legend: 'Date',
								legendOffset: 40,
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
				</Grid>
				<Grid item xs={12} md={6} >
					<h3>Portfolio Size</h3>
					<div  style={{ width: '100%', height: '90%' }}>
						<ResponsiveLine
							data={portSnapshot}
							margin={{ top: 10, right: 0, bottom: 50, left: 80 }}
							axisTop={null}
							axisRight={null}
							lineWidth={1}
							enableArea={true}
							enablePoints={false}
							useMesh={true}
							colors={{ scheme: 'paired' }}
							yScale={{ type: 'linear', min: 'auto', max: 'auto', clamp: true, nice: true}}
							xScale={{ type: "time", format: "%m-%d-%Y %H:%M", useUTC: false, precision: 'minute' }}
							xFormat="time:%m-%d-%Y %H:%M"
							axisBottom={{
								orient: 'bottom',
								format: "%b %d %H:%m",
								tickValues: "every 12 hours",
								tickSize: 5,
								tickPadding: 5,
								tickRotation: -10,
								legend: 'Date',
								legendOffset: 40,
								legendPosition: 'middle',
							}}
							axisLeft={{
								format: function(value){ 
									return `$${value.toLocaleString('USD')}`;
								},
								orient: 'left',
								tickSize: 5,
								tickPadding: 5,
								tickRotation: 0,
								legend: 'Balance',
								legendOffset: -60,
								legendPosition: 'middle'
							}}
							
						/>
					</div>
				</Grid>			
			</Grid>				
		</Grid>
	
	)
}

export default Dashboard
