import "../../../node_modules/react-vis/dist/style.css"
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from "react-vis"

const NumberDoacoes = () => {
	const data=[
		{x: new Date('September 1 2017'), y: 3},
		{x: new Date('September 2 2017'), y: 3},
		{x: new Date('September 3 2017'), y: 3},
		{x: new Date('September 4 2017'), y: 3},
		{x: new Date('September 5 2017'), y: 3},
		{x: new Date('September 6 2017'), y: 3},
		{x: new Date('September 7 2017'), y: 3},
		{x: new Date('September 8 2017'), y: 3},
		{x: new Date('September 9 2017'), y: 3},
		{x: new Date('September 10 2017'), y: 5},
		{x: new Date('September 11 2017'), y: 15},
		{x: new Date('September 12 2017'), y: 13},
		{x: new Date('September 13 2017'), y: 17},
		{x: new Date('September 14 2017'), y: 45},
		{x: new Date('September 15 2017'), y: 19},
		{x: new Date('September 16 2017'), y: 20},
		{x: new Date('September 17 2017'), y: 18},
		{x: new Date('September 18 2017'), y: 18},
		{x: new Date('September 19 2017'), y: 18},
		{x: new Date('September 20 2017'), y: 18},
		{x: new Date('September 21 2017'), y: 18},
		{x: new Date('September 22 2017'), y: 18},
		{x: new Date('September 23 2017'), y: 18},
		{x: new Date('September 24 2017'), y: 18},
		{x: new Date('September 25 2017'), y: 18},
		{x: new Date('September 26 2017'), y: 18},
		{x: new Date('September 27 2017'), y: 18},
		{x: new Date('September 28 2017'), y: 18},
		{x: new Date('September 29 2017'), y: 18},
		{x: new Date('September 30 2017'), y: 18}
	]

	function formatdate(data){
		let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)); 
		return dataFormatada;
	}

	return (
		<div className={{marginTop: '15px'}}>
			<XYPlot xType="time" height={400} width={900}>
				<HorizontalGridLines />
		      <VerticalGridLines />
		      <XAxis title="Dias" tickFormat={v => formatdate(v)} tickLabelAngle={-46}/>
		      <YAxis title="Doações" />
		      <LineSeries data={data}	/>
			</XYPlot>
		</div>
	)
}

export default NumberDoacoes;


