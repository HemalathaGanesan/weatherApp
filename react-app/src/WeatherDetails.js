import React from 'react';
// import processing from './weather.gif'

class WeatherDetails extends React.Component{
    render(props){
        if(this.props.WeatherReports.length === 0){
            return <div></div>
        }

    return (
        this.props.WeatherReports.map(items => {
            console.log(items.report[0].date.pretty)

            return (
                <div className='weather-container'>
                    <div className='col-1'>
                    <h3>DAY-1</h3>
                    {items.report[0].conditions && <p> Conditions:{items.report[0].conditions}</p>}
                    {items.report[0].icon_url && <img alt=" " src={items.report[0].icon_url}/>}
                    {items.location && <p>Place:{items.location}</p>}
                    {items.report[0].date.pretty && <p>Date & Time:{items.report[0].date.pretty}</p>}
                    {items.report[0].high.celsius && <p>Temperature: {items.report[0].high.celsius}<sup>0</sup>C</p>}
                    {items.report[0].avehumidity && <p>Humidity:{items.report[0].avehumidity}</p>}                
                    </div>
    
                    <div className='col-2'>
                    <h3>DAY-2</h3>
                    {items.report[1].conditions && <p> Conditions:{items.report[1].conditions}</p>}
                    {items.report[1].icon_url && <img alt=" " src={items.report[1].icon_url}/>}
                    {items.location && <p>Place:{items.location}</p>}
                    {items.report[1].date.pretty && <p>Date & Time:{items.report[1].date.pretty}</p>}
                    {items.report[1].high.celsius && <p>Temperature: {items.report[1].high.celsius}<sup>0</sup>C</p>}
                    {items.report[1].avehumidity && <p>Humidity:{items.report[1].avehumidity}</p>}                   
                    </div>
    
                    <div className='col-3'>
                    <h3>DAY-3</h3>
                    {items.report[2].conditions && <p> Conditions:{items.report[2].conditions}</p>}
                    {items.report[2].icon_url && <img alt=" " src={items.report[2].icon_url}/>}
                    {items.location && <p>Place:{items.location}</p>}
                    {items.report[2].date.pretty && <p>Date & Time:{items.report[2].date.pretty}</p>}
                    {items.report[2].high.celsius && <p>Temperature: {items.report[2].high.celsius}<sup>0</sup>C</p>}
                    {items.report[2].avehumidity && <p>Humidity:{items.report[2].avehumidity}</p>}                   
                    </div>
    
                    </div>
            )
        })
    )
    
    }
}
export default WeatherDetails;