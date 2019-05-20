import * as React from "react";

export interface IHelloProps {
  compiler: string;
  framework: string;
}

class Hello extends React.Component<IHelloProps, {}> {
  public render() {
    return (
      <div>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <p>{1}</p>
      </div>
    );
  }
}

export {
  Hello,
};
