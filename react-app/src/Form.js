import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'Madurai, India' }
    this.onChange = (address) => this.setState({ address })
  }

  formSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.getWeather({city:this.state.address,latLng}))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
    return (
      <form onSubmit={this.formSubmit}>
        <PlacesAutocomplete inputProps={inputProps} />
        <button type="submit">GetWeather</button>
      </form>
    )
  }
}

export default Form