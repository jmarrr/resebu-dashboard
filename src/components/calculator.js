import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import { ResponsiveLine } from '@nivo/line'

const Calculator = () => { 
	const[ rateData, setrateData] = useState([{"data":[{"x": 2021, "y": 1010}]}])
	
	const rateOptions = [
		{
		  value: 0.01,
		  label: '1%',
		},
		{
		  value: 0.02,
		  label: '2%',
		},
		{
		  value: 0.03,
		  label: '3%',
		},
		{
		  value: 0.04,
		  label: '4%',
		},
	];

	const yearOptions = [
		{
		  value: 1,
		  label: '1',
		},
		{
		  value: 2,
		  label: '2',
		},
		{
		  value: 3,
		  label: '3',
		},
		{
		  value: 4,
		  label: '4',
		},
	];

	const [rate, setRate] = useState(0.01);
	const [years, setYear] = useState(1);
	const [amount, setAmount] = useState(1000)
	const [totalInterest, setTotalInterest] = useState(rate * years * amount)

	const handleChangeRate = (event) => {
		setRate(event.target.value);
	};

	const handleChangeYear = (event) => {
		setYear(event.target.value);
	};

	const handleChangeAmount = (event) => {
		setAmount(event.target.value);
	};

	function calculate() {
		setTotalInterest(rate * years * amount)

		let retSnap = [{"data":[]}]
		for (let year = 1; year <= years; year++) {
			retSnap[0].data.push({"x": 2021 + year, "y": parseFloat(amount) + (rate * year * amount)})
		}
		setrateData(retSnap)
		
	}

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} style={{ textAlign: 'center' }}>
				<h1  style={{ color: 'red' }}> Resebu Calculator </h1>
				<h3> Use the calculator to see how much Resebu can help you reach your targeted goal. </h3>
			</Grid>
			<Card bg="primary" text="white">
				<CardContent style={{ padding: '10px 25px 10px 25px' }}>
					<Grid container spacing={3} >
						<Grid item xs={4} style={{ textAlign: 'center', padding: '100px 25px 25px 25px' }}> 	
							<TextField
								onChange={handleChangeAmount}
								label="Current Loan"
								id="outlined-margin-dense"
								defaultValue="1000"
								margin="dense"
								variant="outlined"
								helperText="How much willing to lend?"
								fullWidth="true"
							/>
							<TextField
								onChange={handleChangeRate}
								fullWidth="true"
								id="outlined-select-currency-native"
								select
								label="Resebu Interest Rate"
								margin="dense"
								value={rate}
								SelectProps={{
									native: true,
								}}
								helperText="Please select which rate"
								variant="outlined"
								>
								{rateOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</TextField>
							<TextField
								onChange={handleChangeYear}
								fullWidth="true"
								id="outlined-select-currency-native"
								select
								label="Years Contributing"
								margin="dense"
								value={years}
								SelectProps={{
									native: true,
								}}
								helperText="How many years to contribute?"
								variant="outlined"
								>
								{yearOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</TextField>
									
							<Button onClick={() => calculate()} style={{  margin: '15px' }} variant="contained" color="secondary">
								Calculate
							</Button>
						</Grid>
				
						<Grid item xs={8} style={{ textAlign: 'center'}}> 
							<h3>Lending Resebu <NumberFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={'$'} /> within <NumberFormat value={years} displayType={'text'} /> year(s) you will receive <NumberFormat style={{ color: 'red' }} value={totalInterest} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </h3>
							<div  style={{ width: '100%', height: '90%' }}>
								<ResponsiveLine
									data={rateData}
									margin={{ top: 10, right: 40, bottom: 50, left: 80 }}
									axisTop={null}
									axisRight={null}
									lineWidth={1}
									enableArea={true}
									enablePoints={false}
									useMesh={true}
									colors={{ scheme: 'paired' }}
									yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false, clamp: true, nice: true}}
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
										legend: 'Balance',
										legendOffset: -60,
										legendPosition: 'middle'
									}}
								/>
							</div>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>

	)
}

export default Calculator