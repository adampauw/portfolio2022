import * as React from 'react';


export interface ISvgIconProps {
  src: string;
  cssClass?: string;
  onClick?: () => void;
  color?: string;
  style?: any;
  stroke?: string;
}

interface ISvgIconState {
  loadedSvg: any;
}


export class SvgIcon extends React.Component<ISvgIconProps, ISvgIconState> {
  private hasUnMounted: boolean = false;

  constructor(props: ISvgIconProps) {
    super(props);
    this.state = {
      loadedSvg: null,
    }
    this.loadSVGFromProps();
  }

  componentWillUnmount() {
    this.hasUnMounted = true;
  }

  protected loadSVGFromProps = () => {
    fetch(this.props.src)
      .then(response => {
        if (response) {
          response.text().then(text => {
            if (this.hasUnMounted) return;
            this.setState({
              loadedSvg: text,
            });
          });
        }
      });
  }

  render() {
    return (
      <div className={this.props.cssClass} dangerouslySetInnerHTML={{ __html: this.state.loadedSvg }}
        style={{
          ...this.props.style,
          fill: this.props.color ? this.props.color : 'white',
          stroke: this.props.stroke ? this.props.stroke : 'black'
        }} />
    )
  }
}
