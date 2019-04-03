# A Tooltip Comoponent in React

A simple component for creating Tooltip in react.js

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

A basic understanding of React.js


### Props
|  Prop Name          | Prop Type           | Prop Definition   |
| ------------- |:-------------:| :-----:|
| parentClass      | String  | class selector of css   |
| childClass      | String      |  class selector of css   |
| childrenElement | String or JSX     |    Element on which tooltip is hovered |
| tooltipText  | String or JSX      |  Content of tooltip   |
| style | object     |  Style of the element     |


### Examples
Example specific to react
```
import Tooltip from "simple-tooltip-component";

<Tooltip childrenElement={<div>Adam</div>}
  tooltipText={<span>Hey this is my name</span>}
  childStyle={{}} parentStyle={{}}/>
```


## Authors

[Gaurav Jadwani](https://github.com/gauravjadwani)
