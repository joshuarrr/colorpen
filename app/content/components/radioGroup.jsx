let RadioGroup = React.createClass({
  getInitialState: function() {
    return {
      selectedValue: 'apple',
    };
  },

  handleChange: function(value) {
    this.setState({
      selectedValue: value,
    });
  },

  render: function() {
    return (
      <div>
        <RadioGroup
          name="fruit"
          selectedValue={this.state.selectedValue}
          onChange={this.handleChange}>
          {Radio => (
            <div>
              <label>
                <Radio value="apple" />Apple
              </label>
              <label>
                <Radio value="orange" />Orange
              </label>
              <label>
                <Radio value="watermelon" />Watermelon
              </label>
            </div>
          )}
        </RadioGroup>
      </div>
    );
  }
});


export default RadioGroup;
