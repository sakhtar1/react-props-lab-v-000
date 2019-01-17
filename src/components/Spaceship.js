import React from 'react';

<<<<<<< HEAD

export default class Spaceship extends React.Component {
  // your code here


  static defaultProps = {
   speed: 'slow',
   hasRockets: false,
   colors:['black','red']
 };

  render() {
    const { name, speed, hasRockets, colors } = this.props;
    return (
      <div>
        {name}
        {speed}
        {hasRockets}
        {colors}
      </div>
=======
const names = [string]
const speed = [:integer, default => :slow]
const hasRockets = [:boolean, default => :false]
const colors = ['black', 'red']
export default class Spaceship extends React.Component {
  // your code here
  render() {
   return (
     <div>
      {this.props.names}
      {this.props.speed}
      {this.props.hasRockets}
      {this.props.colors}
     </div>
>>>>>>> dba400912b1b7d56f34a8b1fad0d84e219463f64

   )
 }
}
