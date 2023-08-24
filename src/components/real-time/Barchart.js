import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class CandlestickChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPoints: [],
      loading: true,
      error: null,
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://api.p2pb2b.com/api/v2/public/market/kline?market=CLNX_USDT&interval=1h&offset=0&limit=96"
      );
      const jsonData = response.data;
      
      const dataPoints = jsonData.result.map(item => ({
        x: new Date(item[0] * 1000),
        y: [parseFloat(item[1]), parseFloat(item[3]), parseFloat(item[4]), parseFloat(item[2])],
        volume: parseFloat(item[5]),
        amount: parseFloat(item[6]).toFixed(2),
      }));

      this.setState({ dataPoints, loading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ error: "Error fetching data", loading: false });
    }
  }
  
  getChartOptions() {
    return {
      backgroundColor: "#fff",
      title: {
        text: "CLNX/USDT",
        labelFontFamily: "outfit"
      },
      axisX: {
        title: "Time",
        labelFontSize: 12,
        valueFormatString: "HH:00",
        labelFontFamily: "outfit",
        interval: 6,
        intervalType: "hour",
        gridDashType: "dot",
        color: "#fff",
        gridThickness: 1
      },
      axisY: {
        title: "Price",
        labelFontSize: 12,
        labelFontFamily: "outfit"
      },
      toolTip: {
        fontSize: 12,
        fontFamily: "outfit"
      },
      data: [
        {
          type: "candlestick",
          risingColor: "#2ADD84",
          fallingColor: "#dc3545",
          color: "#0A3641",
          dataPoints: this.state.dataPoints,
          toolTipContent: "Date: {x}<br/>Open: {y[0]}<br/>High: {y[1]}<br/>Low: {y[2]}<br/>Close: {y[3]}<br/>Volume: {volume}<br/>Amount: {amount}"
        }
      ]
    };
  }

  render() {
    return (
      <div className='col-lg-8 mt-5'>
        <h1></h1>
        <div id="historicalCandlestickChart" style={{ height: '500px', width: '100%' }}>
          <CanvasJSChart options={this.getChartOptions()} />
        </div>
      </div>
    );
  }
}

export default CandlestickChart;
