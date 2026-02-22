import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("ErrorBoundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            fontFamily: "var(--font-mono)",
            color: "var(--text-secondary)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "var(--accent)", marginBottom: "1rem" }}>
              ICARUS
            </h1>
            <p>Something went wrong. Please reload the page.</p>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                background: "var(--accent)",
                color: "var(--bg-primary)",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontFamily: "var(--font-mono)",
              }}
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
