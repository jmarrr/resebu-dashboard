import React from 'react'
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import { ChevronLeft, ChevronRight, Clear, Search, AddBox, Check, DeleteOutline, Edit, SaveAlt, FilterList, FirstPage, LastPage, ArrowDownward, Remove, ViewColumn } from "@material-ui/icons";
import './styles.css'


function symbolstats() {
	const tableIcons = {
		Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
		Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
		Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
		Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
		DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
		Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
		Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
		Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
		FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
		LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
		NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
		PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
		ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
		Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
		SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
		ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
		ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
	};
	  
	return (
		<MaterialTable
			title="Symbol Statistics"
			icons={tableIcons}
			options={{
				pageSize: 15, 
				emptyRowsWhenPaging: true,
				pageSizeOptions:[15,30,45,60],
				cellStyle: {
					textAlign: "left"
				},
				headerStyle: {
					fontWeight: "bold",
					textAlign: "left"
				},
				rowStyle: x => {
					if (x.tableData.id % 2) {
						return {backgroundColor: "#eee"}
					}
				}
			}}
			columns={[
				{ title: "Symbol", field: "symbol" },
				{ title: "Total Trades", field: "totalTrade"},
				{ title: "Avg. Trade Count", field: "avgTradeCount"},
				{ title: "Total PnL", field: "totalPnL" },
				{ title: "Mean PnL", field: "meanPnL" },
				
			]}
			data={[
				{
					symbol: "BTCUSDT",
					totalTrade: 1254,
					avgTradeCount: 50,
					totalPnL: '$63.00',
					meanPnL: '$1.82'
				},
				{
					symbol: "DODOUSDT",
					totalTrade: 50,
					avgTradeCount: 51,
					totalPnL: '$64.00',
					meanPnL: '$1.82'
				},
			]}	
		/>
	)
}

export default symbolstats
