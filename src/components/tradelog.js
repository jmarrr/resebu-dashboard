import React from 'react'
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import { ChevronLeft, ChevronRight, Clear, Search, AddBox, Check, DeleteOutline, Edit, SaveAlt, FilterList, FirstPage, LastPage, ArrowDownward, Remove, ViewColumn } from "@material-ui/icons";
import './styles.css'


function tradelog() {
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
				{ title: "Date", field: "date" },
				{ title: "Symbol", field: "symbol"},
				{ title: "Direction", field: "direction"},
				{ title: "PnL", field: "pnl"},
				
			]}
			data={[
				{
					date: "May 4 2020, 11:14 PM",
					symbol: "BTCUSDT",
					direction: "LONG",
					avgTradeCount: 50,
					pnl: '$1.82'
				},
			]}
			title="Live Trade Logs"
		/>
	)
}

export default tradelog
