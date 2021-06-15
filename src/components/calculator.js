import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';

const Calculator = () => { 
	
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
	const [year, setYear] = useState(1);
	const [amount, setAmount] = useState(1000)
	const [totalInterest, setTotalInterest] = useState(rate * year * amount)

	const handleChangeRate = (event) => {
		setRate(event.target.value);
		setTotalInterest(rate * year * amount)
	};

	const handleChangeYear = (event) => {
		setYear(event.target.value);
		setTotalInterest(rate * year * amount)
	};

	const handleChangeAmount = (event) => {
		setAmount(event.target.value);
		setTotalInterest(rate * year * amount)
	};

	return (
		<Card bg="primary" text="white" style={{ width: '18rem' }}>
			<CardContent style={{ padding: '0 25px 10px 25px' }}>
				<h3> Interest Rate Calculator </h3>
				<TextField
					onChange={handleChangeAmount}
					label="Investment Amount"
					id="outlined-margin-dense"
					defaultValue="1000"
					margin="dense"
					variant="outlined"
				/>
				<TextField
					onChange={handleChangeRate}
					id="outlined-select-currency-native"
					select
					label="Interest Rate"
					margin="dense"
					value={rate}
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
					onChange={handleChangeYear}
					id="outlined-select-currency-native"
					select
					label="Years"
					margin="dense"
					value={year}
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
				<h4>Total Interest: <NumberFormat value={totalInterest} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>

			</CardContent>
		</Card>
	)
}

export default Calculator