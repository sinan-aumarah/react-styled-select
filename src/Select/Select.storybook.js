import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Select from './Select'
import SelectShadowDOM from './ShadowDOM'

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'tree', label: 'Tree' },
]

storiesOf('Select', module)
  .add('default', () => (
    <div style={{display: 'flex', margin: '20px'}}>
      <div style={{width: '300px'}}>
        <SelectShadowDOM
          className="secondary"
          name="form-field-name"
          options={options}
          onOpen={action('onOpen')}
          onChange={action('onChange')}
          onInputClear={action('onInputClear')}
          onValueClick={action('onValueClick')}
        />
      </div>
    </div>
  ))
  .add('no results', () => (
    <div style={{display: 'flex', margin: '20px'}}>
      <div style={{width: '300px'}}>
        <SelectShadowDOM
          className="secondary"
          name="form-field-name"
          options={[]}
          onOpen={action('onOpen')}
          onChange={action('onChange')}
          onInputClear={action('onInputClear')}
          onValueClick={action('onValueClick')}
        />
      </div>
    </div>
  ))
  .add('valueRenderer', () => {
    const customValueRenderer = (option) => {
      return (
        <span>{option.value} - {option.label}</span>
      );
    }
    return (
      <div style={{display: 'flex', margin: '20px'}}>
        <div style={{width: '300px'}}>
          <SelectShadowDOM
            className="secondary"
            name="form-field-name"
            options={options}
            valueRenderer={customValueRenderer}
          />
        </div>
      </div>
    )
  })
