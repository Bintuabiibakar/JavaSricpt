import React from "react";

// Higher-Order Component
function withLogger(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

// MyComponentPage
function MyComponent(props) {
  return <div>Hello {props.name}</div>;
}

// Enhance MyComponent
const EnhancedComponent = withLogger(MyComponent);

// Page Component
function MyComponentPage() {
  return <EnhancedComponent name="Alice" />;
}

export default MyComponentPage;
