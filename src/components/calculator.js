import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

const Calculator = () => { 
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

	return (
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
	)
}

export default Calculator